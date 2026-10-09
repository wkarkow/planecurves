; Curvecore.lsp

; ========================= Shared Variable List: CurveCore_Vars =========================
; Geometry & Evaluation:
;   basept, xaxisangle, divcount, paramstep, xstep
;   cosangle, sinangle, x0, y0, plineents, segcount, divpt, maxdraw, skm
;   eq_display
;   a1, a2, a3, x1, x2, x3, y1, y2, y3
;   xc, yc

; Dialog / UI:
;   id iq dcl opt kw mode dpr dct dpt span

; Curve-Specific Parameters:
;   fa, fb, fc, fd, fe, ff, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp...
; ========================= Shared Variable List: CurveCore_Vars =========================

(defun ACOS (x / tol)
  (setq tol 1e-12)
  (cond
    ((>= x 1.0) 0.0)
    ((<= x -1.0) pi)
    ((< (abs x) tol) (/ pi 2.0))                 ; acos(0)=pi/2
    ((>= x 0.0) (atan (/ (sqrt (- 1.0 (* x x))) x)))
    (T (+ pi (atan (/ (sqrt (- 1.0 (* x x))) x))))))
; returns arccos(x) in radians for x in [-1,1]; clamps inputs outside domain to 0 or pi

(defun ASIN (x / tol)
  (setq tol 1e-12)
  (cond
    ((>= x 1.0) (/ pi 2.0))
    ((<= x -1.0) (/ pi -2.0))
    ((> x (- 1.0 tol)) (/ pi 2.0))               ; asin(1)=pi/2
    ((< x (+ -1.0 tol)) (/ pi -2.0))             ; asin(-1)=-pi/2
    (T (atan (/ x (sqrt (- 1.0 (* x x))))))))
; returns arcsin(x) in radians for x in [-1,1]; clamps inputs outside domain to ±pi/2

(defun ALT_EXPT (base power complexsafe)
  (cond
    ((< (abs power) 1e-7) 1)                     ; Near-zero exponent: a^0 = 1
    ((and (< (abs base) 1e-7) (>= power 1)) 0)   ; 0^positive = 0
    ((and (< (abs base) 1e-7) (< power 0)) 1e7)  ; 0^negative = undefined → return large fallback
    ((and (> base 1e6) (>= power 1)) 1e7)        ; Large + base clamp
    ((and (> (abs base) 1e6) (>= power 1)) -1e7) ; Large - base clamp
    ((and (> base 1) (> power 10)) 1e7)          ; Normal + base, huge exponent
    ((and (< base -1) (> power 10)) -1e7)        ; Normal - base, huge exponent
    ((and (> (abs base) 1) (< power -10)) 0)     ; Huge negative power → near-zero
    ((= power (fix power)) (expt base power))    ; Integer power: safe
    ((and (< base 0) (not (= power (fix power)))) ; Negative base, non-integer power → 
     (if complexsafe                             ; Restart pline if complexsafe is T, flip sign if not
       (progn (setq restartflag T) 1e7)          ; Force imaginary values to restart pline
       (- (expt (abs base) power))))
    (T (expt base power))))                      ; Default
; broadens native (expt...) for any base and power to prevent AutoLISP crash, flips imaginary to negative real value for nil 3rd argument
; example: (alt_expt -2.0 0.5 nil) returns -1.414213562373095 for (sqrt -2.0)

(defun AVOID_ZERO (input)
  (if (< (abs input) 1e-13) 1e-12 input))
; returns 1e-12 if input is near-zero (within ±1e-13); otherwise returns input
; used to avoid divide-by-zero error when code sweeps input through zero values

(defun CA (id iq dcl opt kw mode dpr dct dpt span / dcl_id dpstr)
  (if (not (load "Curvecore.lsp" nil))
    (progn
      (prompt "\nError: CURVECORE.LSP not found. Please ensure it is in the support path.")
      (exit)))
  (princ (strcat "\n" id ": " iq))
  (if (boundp 'dcl)
    (progn
      (setq dcl_id (load_dialog (strcat dcl ".dcl"))) (if (< dcl_id 0) (exit))
      (if (not (new_dialog dcl dcl_id "" '(1680 0))) (exit))
      (start_list "list_col") (mapcar 'add_list opt) (end_list)
      (set_tile "list_col" (itoa kw))
      (action_tile "list_col" "(setq kw (atoi $value))")
      (start_dialog)
      (unload_dialog dcl_id)))
  (setq basept (get_point 0 "New origin" '(0.0 0.0) nil)
        xaxisangle (get_angle 0 "New X axis in degrees" 0.0 basept)
        cd (getvar "cmdecho")
        sa (getvar "snapang")
        sb (getvar "snapbase")
        sm (getvar "snapmode")
        om (getvar "orthomode")
        os (getvar "osmode")
        skm nil)
  (setvar "cmdecho" 0)
  (command "snap" "r" basept (* 180 (/ xaxisangle pi)))
  (setvar "snapmode" sm)
  (command "ortho" "off")
  (setq divcount (get_integer 6 dpr dct)
        cosangle (cos xaxisangle)
        sinangle (sin xaxisangle)
        x0 (car basept)
        y0 (cadr basept)
        plineents (ssadd)
        segcount 0
        baseinfo (strcat "Base = (" (rtos x0 2 4) "," (rtos y0 2 4)
                         ") , Angle = " (rtos (* 180 (/ xaxisangle pi)) 2 4)))
  (if (eq mode 'polar)
      (setq paramstep (/ (* span (/ pi 180.0)) divcount))
      (if (boundp 'dpt)
        (setq dpstr (strcat (rtos (car dpt) 2 4) "," (rtos (cadr dpt) 2 4))
              divpt (get_boundpt "Division/direction point" dpstr dpt basept 0 nil T nil nil nil)
              xspan (get_xspan basept xaxisangle divpt))))
  kw)
; initializes drawing context and division logic for either polar or parametric curve modes
; set dcl nil, opt nil if no .dcl file
; dpt should be set to nil in polar and also in parametric IF xspan is not needed later. If xspan is needed, dpt must be set to a point as in: '(5.0 0.0)
; set span = nil if 'param mode
; mode = 'polar or 'param; dpr is prompt string, dct is default division count
; span is interpreted in degrees if mode = 'polar
; defines shared: basept, xaxisangle, cd, sa, sb, sm, om, os, divcount, cosangle, sinangle, x0, y0, plineents, segcount, baseinfo, paramstep, divpt, xspan

(defun CC (/ draw_active add_count a3 x3 y3 prev_a1 prev_x1 prev_y1 mirror_flag
             ent_start ent_before ent_walk ss_copy openent ent70 i entn
             current_pts px py p3)
  (defun create_lwpolyline (pts / n vertex_list)
    (setq n (length pts)
          vertex_list nil)
    (foreach pt pts
      (setq vertex_list (append vertex_list (list (cons 10 pt)))))
    (entmake (append (list '(0 . "LWPOLYLINE")
                          '(100 . "AcDbEntity")
                          '(67 . 0)
                          '(410 . "Model")
                          (cons 8 (getvar "clayer"))
                          '(62 . 256)
                          '(100 . "AcDbPolyline")
                          (cons 90 n)
                          '(70 . 0)
                          '(43 . 0.0)
                          '(38 . 0.0)
                          '(39 . 0.0))
                     vertex_list
                     '((210 0.0 0.0 1.0))))
    (ssadd (entlast) plineents))
  (prompt baseinfo)
  (prompt eq_display)
  (setvar "osmode" 0)
  (setq ent_start (entlast)
        draw_active T
        maxdraw (if (numberp maxdraw) maxdraw 1e5))
  (while draw_active
    (if (setq add_count
               (getint (strcat "\nTotal # = " (itoa segcount)
                               " Enter additional # of segments <"
                               (itoa (fix (abs divcount))) ">: ")))
      ()
      (setq add_count (fix (abs divcount))))
    (setq current_pts (list (list (+ x0 (* x1 cosangle) (- (* y1 sinangle)))
                                  (+ y0 (* y1 cosangle) (* x1 sinangle)))))
    (repeat add_count
      (setq restartflag nil
            a3 (eval a2))
      (setq x3 (eval x2)
            y3 (eval y2)
            prev_a1 a1
            prev_x1 x1
            prev_y1 y1
            a1 a3
            x1 x3
            y1 y3)
      (setq px (+ x0 (* x3 cosangle) (- (* y3 sinangle)))
            py (+ y0 (* y3 cosangle) (* x3 sinangle))
            p3 (list px py))
      (if (or (> (abs x3) maxdraw) (> (abs y3) maxdraw)
              (> (abs prev_x1) maxdraw) (> (abs prev_y1) maxdraw)
              restartflag)
        (progn
          (if (> (length current_pts) 1)
            (create_lwpolyline current_pts))
          (setq current_pts (list p3)
                restartflag nil))
        (setq current_pts (append current_pts (list p3)))))
    (if (> (length current_pts) 1)
      (create_lwpolyline current_pts))
    (setq divcount 0)
    (if (< add_count 1)
      (setq draw_active nil)
      (setq segcount (+ segcount add_count)))
  )
  (if (and plineents (= (type plineents) 'PICKSET) (> (sslength plineents) 0))
    (progn
      (if (or (not (boundp 'skm)) (not (nth 0 skm)))
        (if (eq "Yes" (get_keyword 0 "Yes No" "Add left side:" "No"))
          (progn
            (setq ent_before (entlast))
            (command "mirror" plineents "" (list x0 y0) (list (- x0 sinangle) (+ y0 cosangle)) "N")
            (setq ent_walk ent_before)
            (while (setq ent_walk (entnext ent_walk))
              (if (and (setq entn (entget ent_walk))
                       (wcmatch (cdr (assoc 0 entn)) "*POLYLINE"))
                (setq plineents (ssadd ent_walk plineents))))
            (setq mirror_flag 1))))
      (if (or (not (boundp 'skm)) (not (nth 1 skm)))
        (if (eq "Yes" (get_keyword 0 "Yes No" "Add bottom side:" "No"))
          (progn
            (setq ent_before (entlast))
            (command "mirror" plineents "" (list x0 y0) (list (+ x0 cosangle) (+ y0 sinangle)) "N")
            (setq ent_walk ent_before)
            (while (setq ent_walk (entnext ent_walk))
              (if (and (setq entn (entget ent_walk))
                       (wcmatch (cdr (assoc 0 entn)) "*POLYLINE"))
                (setq plineents (ssadd ent_walk plineents)))))))
      (if (not (eq mirror_flag 1))
        (if (or (not (boundp 'skm)) (not (nth 2 skm)))
          (if (eq "Yes" (get_keyword 0 "Yes No" "Add opposite side:" "No"))
            (progn
              (setq ent_before (entlast))
              (command "copy" plineents "" (list x0 y0) (list x0 y0))
              (setq ss_copy (ssadd)
                    ent_walk ent_before)
              (while (setq ent_walk (entnext ent_walk))
                (if (and (setq entn (entget ent_walk))
                         (wcmatch (cdr (assoc 0 entn)) "*POLYLINE"))
                  (setq ss_copy (ssadd ent_walk ss_copy)
                        plineents (ssadd ent_walk plineents))))
              (if (> (sslength ss_copy) 0)
                (command "rotate" ss_copy "" (list x0 y0) 180.0))))))
      (setq openent nil i 0)
      (while (and (< i (sslength plineents)) (not openent))
        (setq entn (ssname plineents i)
              ent70 (cdr (assoc 70 (entget entn))))
        (if (and ent70 (= 0 (logand 1 ent70))) (setq openent entn))
        (setq i (1+ i)))
      (if openent
        (progn
          (command "pedit" "m" plineents "" "j" "" "")
          (if (or (not (boundp 'skm)) (not (nth 3 skm)))
            (command "pedit" "m" plineents "" "f" "")))
        (progn
          (if (or (not (boundp 'skm)) (not (nth 3 skm)))
          (command "pedit" "m" plineents "" "f" ""))))))
  (setq maxdraw nil)
  (setvar "osmode" os)
  (setvar "orthomode" om)
  (setvar "snapmode" sm)
  (setvar "snapbase" sb)
  (setvar "snapang" sa)
  (setvar "cmdecho" cd)
  (princ))

; defines drawing loop and mirrored copies for Cartesian or polar curves
; skips drawing of segments where abs(x3) or abs(y3) exceeds maxdraw
; uses shared (from ca): basept, xaxisangle, cd, sa, sb, sm, om, os, divcount, cosangle, sinangle, x0, y0, plineents, segcount, baseinfo, divpt, xstep, paramstep
; uses shared (from main code): eq_display, a1, a2, x1, x2, xc, yc, y1, y2, maxdraw, skm, restartflag (from alt_expt)
; creates shared plineents
; skm is skip-mode set in main code as skm '(T nil T nil) to skip (T) left-right, mirror (nil) top-bottom, skip (T) opposite quadrant, do not skip (nil → pedit f) curving the final curve

(defun CSC (x) (/ 1.0 (avoid_zero (sin x))))
; Returns cosecant of angle (in radians); use (eval a2) for x

(defun COSH (x) (/ (+ (exp x) (exp (- x))) 2.0))
; Returns hyperbolic cosine of angle (in radians); use (eval a2) for x

(defun COT (x) (/ (cos x) (avoid_zero (sin x))))
; Returns cotangent of angle (in radians); use (eval a2) for x

(defun GCD (a b / r)
  (setq a (abs (fix a))
        b (abs (fix b)))
  (while (/= b 0)
    (setq r (rem a b)
          a b
          b r))
  a)
; returns the greatest common divisor of integers a and b
; example: where fc=24 and fd=81, (setq fj (gcd fc fd)) → 3

(defun GET_ANGLE (initgetmode prmpt default basept / pickedang)		
  (initget initgetmode)
  (setq prmpt (strcat "\n" prmpt
                       (if default (strcat " <" (angtos default) ">") "")
                       ": ")
        pickedang (getangle basept prmpt))
  (if pickedang pickedang default))
; refines (getangle) with initget, prmpt, default (or nil), basept (required)
; returns an angle in radians like 1.5708; make initgetmode odd if default is nil to avoid nil
; example: (setq xaxisangle (get_angle 0 "New X axis in degrees" 0.0 basept))

(defun GET_BOUNDI (initgetmode prmpt default int_min int_max eq_min eq_max / pickedval pickedeval msgmin msgmax msg done)
  (initget initgetmode)
  (setq msgmin (if int_min (if eq_min (strcat " >= " (itoa int_min)) (strcat " > " (itoa int_min))) nil)
        msgmax (if int_max (if eq_max (strcat " <= " (itoa int_max)) (strcat " < " (itoa int_max))) nil)
        prmpt (strcat "\n" prmpt
                      (if default (strcat " <" (itoa default) ">") "")
                      ": ")
        pickedeval nil done nil)
  (while (not done)
    (setq pickedval (getint prmpt)
          pickedeval (if pickedval pickedval default))
    (if (not pickedeval)
      (prompt "\nA value is required.")
      (progn
        (if (not (and (numberp pickedeval) (= (fix pickedeval) pickedeval)))
          (prompt "\nAn integer value is required.")
          (progn
            (setq msg nil)
            (if (and int_min (if eq_min (< pickedeval int_min) (<= pickedeval int_min)))
              (setq msg (strcat "Must be" msgmin)))
            (if (and int_max (if eq_max (> pickedeval int_max) (>= pickedeval int_max)))
              (setq msg (if msg
                          (strcat msg " and" msgmax)
                          (strcat "Must be" msgmax))))
            (if msg
              (prompt (strcat "\nValue out of range. " msg "."))
              (setq done T)))))))
  pickedeval)
; refines (getint) with initget, prmpt, default (or nil) and min/max bounds +/- equals
; prints a reason when rejecting input (missing required value, non-integer, below/above bounds)
; returns an integer like 5; make initgetmode odd if default is nil to avoid nil
; initget 1 blocks <Enter>, 2 blocks 0, 4 blocks (-)
; example: (get_boundi 7 "Enter number of sides" 5 3 12 T T) ; 3 ≤ n ≤ 12

(defun GET_BOUNDPT (prmpt deftext defpt basept xlow xhigh xabs yl ylhi yabs / pickpt isvalid useabs xval yval)
  (if defpt
    (setq useabs nil
          prmpt (if deftext
                   (strcat "\n" prmpt " <" deftext ">: ")
                   (strcat "\n" prmpt " <" (rtos (car defpt)) "," (rtos (cadr defpt)) ">: ")))
    (setq useabs T
          prmpt (strcat "\n" prmpt ": ")))
  (setq isvalid nil)
  (while (not isvalid)
    (initget (if useabs 1 0))
    (setq pickpt (getpoint basept prmpt)
          pickpt (if pickpt pickpt defpt)
          xval (get_xspan basept xaxisangle pickpt)
          yval (get_yspan basept xaxisangle pickpt))
    (if xabs                                     ; X validation
      (progn
        (setq isvalid (if (numberp xlow)
                        (if (< (+ (abs xlow) 1e-9) (abs xval)) T
                            (progn
                              (prompt (strcat "\nThis point needs abs x > " (rtos xlow 2 4) "."))
                              nil))
                        T))
        (if isvalid
          (setq isvalid (if (numberp xhigh)
                          (if (> (- (abs xhigh) 1e-9) (abs xval)) T
                              (progn
                                (prompt (strcat "\nThis point needs abs x < " (rtos xhigh 2 4) "."))
                                nil))
                          T))))
      (progn
        (setq isvalid (if (numberp xlow)
                        (if (< (+ xlow 1e-9) xval) T
                            (progn
                              (prompt (strcat "\nThis point needs x > " (rtos xlow 2 4) "."))
                              nil))
                        T))
        (if isvalid
          (setq isvalid (if (numberp xhigh)
                          (if (> (- xhigh 1e-9) xval) T
                              (progn
                                (prompt (strcat "\nThis point needs x < " (rtos xhigh 2 4) "."))
                                nil))
                          T)))))
    (if yabs                                     ; Y validation
      (progn
        (if isvalid (setq isvalid (if (numberp yl)
                                    (if (< (+ (abs yl) 1e-9) (abs yval)) T
                                        (progn
                                          (prompt (strcat "\nThis point needs abs y > " (rtos yl 2 4) "."))
                                          nil))
                                    T)))
        (if isvalid (setq isvalid (if (numberp ylhi)
                                    (if (> (- (abs ylhi) 1e-9) (abs yval)) T
                                        (progn
                                          (prompt (strcat "\nThis point needs abs y < " (rtos ylhi 2 4) "."))
                                          nil))
                                    T))))
      (progn
        (if isvalid (setq isvalid (if (numberp yl)
                                    (if (< (+ yl 1e-9) yval) T
                                        (progn
                                          (prompt (strcat "\nThis point needs y > " (rtos yl 2 4) "."))
                                          nil))
                                    T)))
        (if isvalid (setq isvalid (if (numberp ylhi)
                                    (if (> (- ylhi 1e-9) yval) T
                                        (progn
                                          (prompt (strcat "\nThis point needs y < " (rtos ylhi 2 4) "."))
                                          nil))
                                    T))))))
  pickpt)
; refines (getpoint) with support for default, prmpt, and optional x/y min/max bounds, assumes xaxisangle is set
; xabs/yabs toggle absolute value logic for each axis; default and deftext are optional
; if (-), xlow, xhigh need to be like -10,-2, not the opposite; no automatic swapping
; nil nil nil accepts anything including 0; 0 nil T excludes 0
; use get_point if both x and y are nil nil nil
; 0 nil nil excludes (-)x or (-)y quadrants respectively
; example: (setq p2 (get_boundpt "Point on curve" "Division point" divpt basept (- x1) x1 nil nil nil nil)): -x1<p2<x1

(defun GET_BOUNDR (initgetmode prmpt default real_min real_max eq_min eq_max / pickedval pickedeval msgmin msgmax msg done)
  (initget initgetmode)
  (setq msgmin (if real_min (if eq_min (strcat " >= " (rtos real_min 2 8)) (strcat " > " (rtos real_min 2 8))) nil)
        msgmax (if real_max (if eq_max (strcat " <= " (rtos real_max 2 8)) (strcat " < " (rtos real_max 2 8))) nil)
        prmpt  (strcat "\n" prmpt
                       (if default (strcat " <" (rtos default 2 8) ">") "")
                       ": ")
        pickedeval nil done nil)
  (while (not done)
    (setq pickedval (getreal prmpt)
          pickedeval (if pickedval pickedval default))
    (if (not pickedeval)
      (prompt "\nA value is required.")
      (progn
        (if (not (numberp pickedeval))
          (prompt "\nA numeric value is required.")
          (progn
            (setq msg nil)
            (if (and real_min (if eq_min (< pickedeval real_min) (<= pickedeval real_min)))
              (setq msg (strcat "Must be" msgmin)))
            (if (and real_max (if eq_max (> pickedeval real_max) (>= pickedeval real_max)))
              (setq msg (if msg
                          (strcat msg " and" msgmax)
                          (strcat "Must be" msgmax))))
            (if msg
              (prompt (strcat "\nValue out of range. " msg "."))
              (setq done T)))))))
  pickedeval)
; refines (getreal) with initget, prmpt, default (or nil) and min/max bounds +/- equals
; returns a real number like 1.5708; make initgetmode odd if default is nil to avoid nil
; example: (get_boundr 6 "Enter number of sides" 5.0 3.0 12.0 T T) ; 3.0 ≤ n ≤ 12.0

(defun GET_DIST (initgetmode prmpt default basept / pickeddist) (initget initgetmode)
  (setq prmpt (strcat "\n" prmpt (if default (strcat " <" (rtos default) ">") "") ": ")
        pickeddist (if basept (getdist basept prmpt) (getdist prmpt)))
  (if pickeddist pickeddist default))
; refines (getdist) with initget, prmpt, default (or nil)
; allows user to either pick a distance point or enter a number
; initget 1 blocks <Enter>, 2 blocks 0, 4 blocks (-), 1024 blocks Z coordinate, limiting to 2D distances
; example:  (setq fc (get_dist 6 "2a (major axis)" 1.0 basept))

(defun GET_INTEGER (initgetmode prmpt default / pickedint)
  (initget initgetmode)
  (setq prmpt (strcat "\n" prmpt
                       (if default (strcat " <" (itoa default) ">") "")
                       ": ")
        pickedint (getint prmpt))
  (if pickedint pickedint default))
; refines (getint) with initget, prmpt, default (or nil)
; returns an integer like 360; make initgetmode odd if default is nil to avoid nil
; example: (setq fb (get_integer 6 "n (number of lobes)" 4))

(defun GET_KEYWORD (initgetmode keywords prmpt default / pickedword)
  (initget initgetmode keywords)
  (setq prmpt (strcat "\n" prmpt
                       (if (/= default "") (strcat " <" default ">") "")
                       ": ")
        pickedword (getkword prmpt))
  (if pickedword pickedword default))
; refines (getkword) with initget, keywords, prmpt, default ("" if none)
; returns a keyword string like "Yes"; make initgetmode odd if default is "" to avoid nil
; example: (setq ff (get_keyword 0 "Plus Minus" "Plus or Minus branch?" "Plus"))

(defun GET_POINT (initgetmode prmpt default basept / pickedpt)		
  (initget initgetmode)
  (setq prmpt (strcat "\n" prmpt
                       (if default (strcat " <" (rtos (car default)) "," (rtos (cadr default)) ">") "")
                       ": ")
        pickedpt (if basept (getpoint basept prmpt) (getpoint prmpt)))
  (if pickedpt pickedpt default))
; get_point refines (getpoint) with initget, prmpt, default (or nil), basept (or nil)
; returns a point like (0.0, 1.0); make initgetmode odd if default is nil to avoid nil
; example: (setq p1 (get_point 0 "Pick new peak point (0 wave)" divpt basept))

(defun GET_REAL (initgetmode prmpt default / pickedval)
  (initget initgetmode)
  (setq prmpt (strcat "\n" prmpt
                       (if default (strcat " <" (rtos default) ">") "")
                       ": ")
        pickedval (getreal prmpt))
  (if pickedval pickedval default))
; refines (getreal) with initget, prmpt, default (or nil)
; returns a real number like 1.5708; make initgetmode odd if default is nil to avoid nil
; example: (setq fa (get_real 6 "a (radius)" 1.0))

(defun GET_XSPAN (basept xaxisangle targetpt)
  (if (and basept targetpt xaxisangle)
    (* (distance basept targetpt) (cos (- (angle basept targetpt) xaxisangle))) 0.0))
; returns horizontal span from basept to targetpt based on xaxisangle (user-defined x-axis)
; returns 0.0 if any argument is nil
; example: (setq x1 (get_xspan basept xaxisangle p1))

(defun GET_YSPAN (basept xaxisangle targetpt)
  (if (and basept targetpt xaxisangle)
    (* (distance basept targetpt) (sin (- (angle basept targetpt) xaxisangle))) 0.0))
; returns vertical span from basept to targetpt based on xaxisangle (user-defined x-axis)
; returns 0.0 if any argument is nil
; example: (setq y1 (get_yspan basept xaxisangle p1))

(defun SEC (x) (/ 1.0 (avoid_zero (cos x))))
; Returns secant of angle (in radians); use (eval a2) for x

(defun SINH (x) (/ (- (exp x) (exp (- x))) 2.0))
; Returns hyperbolic sine of angle (in radians); use (eval a2) for x

(defun TAN (x) (/ (sin x) (avoid_zero (cos x))))
; Returns tangent of angle (in radians); use (eval a2) for x

(defun TANH (x) (if (> (abs x) 20.0) (if (minusp x) -1.0 1.0) (/ (- (exp x) (exp (- x))) (+ (exp x) (exp (- x))))))
; Returns hyperbolic tangent of angle (in radians); use (eval a2) for x