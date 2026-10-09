// Expanded from Bibliography.docx — 281 curves total
// Sorted alphabetically by title. filename values are placeholders.
// Update filename when the corresponding .html page is created.
const curveList = [
{
    id: "airy",
    title: "Airy Disk",
    filename: "Airy.html",
    aliases: ["Point Spread Function", "Bessel Function", "Aperture Curve"],
    eqSortKey: "001",
    done: true,
    imgCount: 9,
    equation: "y = y_0 \\cdot \\frac{4 \\left( \\operatorname{J}_1 (a x) \\right)^2 }{(a x)^2}",
    eqFind: ["J1", "J_1", "a x", "y=", "y =", "y_0"],
    imgSortKey: "001",
    images: {
      canonical: "Images/Airy/Airy01-360.avif",
      variant1: "Images/Airy/Airy02-360.avif",
      variant2: "Images/Airy/Airy06-360.avif"
    }
  },
  {
    id: "alain",
    title: "Alain's Curve",
    filename: "Alain.html",
    aliases: [],
    eqSortKey: "002",
    done: true,
    imgCount: 1,
    equation: "r = \\frac{\\sqrt{a^{2} \\cos^{2}(\\theta) - b^{2} \\sin^{2}(\\theta)}}{|\\cos(2\\theta)|}, \\quad(x^{2} - y^{2})^{2} = a^{2} x^{2} - b^{2} y^{2}",
    eqFind: ["r=", "r =", "sqrt", "cos", "cos^2", "sin", "sin^2", "x^2", "y^2", "theta"],
    imgSortKey: "002",
    images: {
      canonical: "Images/Alain/Alain01-360.avif"
    }   
  },
  {
    id: "alysoid",
    title: "Alysoid Curve",
    filename: "Alysoid.html",
    aliases: ["Little Chain Curve"],
    eqSortKey: "003",
    done: true,
    imgCount: 1,
    equation: "\\frac{dx}{dt} = a k^{2} \\frac{\\cos(t)}{\\cos^{2}(k t)}, \\quad \\frac{dy}{dt} = a k^{2} \\frac{\\sin(t)}{\\cos^{2}(k t)}, \\quad t \\in \\left[0, \\frac{\\pi}{2k} - \\epsilon\\right] \\ (k = b/a > 0)",
    eqFind: ["dx/dt", "dy/dt", "cos^2", "sin(t)", "k^2", "kt", "a k", "pi/2k"],
    imgSortKey: "003",
    images: {
      canonical: "Images/Alysoid/Alysoid01-360.avif"
    }
  },
  {
    id: "ampersand",
    title: "Ampersand",
    filename: "Ampersand.html",
    aliases: ["Plucker's Quartic"],
    eqSortKey: "004",
    done: true,
    imgCount: 1,
    equation: "(y^{2} - x^{2})(x - 1)(2x - 3) = 4(x^{2} + y^{2} - 2x)^{2}, \\quad 4y^{4} + y^{2}(6x^{2} - 11x - 3) + 6x^{4} - 21x^{3} + 19x^{2} = 0, \\quad r^{2}(2\\cos^{2}(\\theta) + \\cos^{4}(\\theta) + 9) - r(37\\cos(\\theta) + 5\\cos^{3}(\\theta)) + (22\\cos^{2}(\\theta) + 16) = 0 ",
    eqFind: ["y^2", "x^2", "y^4", "x^4", "x^3", "r^2", "cos^2", "theta"],
    imgSortKey: "004",
    images: {
      canonical: "Images/Ampersand/Ampersand01-360.avif"
    }
  },
  {
    id: "antiparallel-coupler-curve",
    title: "Antiparallel Coupler Curve",
    filename: "Antiparalink.html",
    aliases: [],
    eqSortKey: "005",
    done: true,
    imgCount: 6,
    equation: "x = (1 - c) \\cdot (a + 2b \\cdot \\cos(\\theta)) + c \\cdot (-a + 2b \\cdot \\cos(\\phi)), y = (1 - c) \\cdot (2b \\cdot \\sin(\\theta)) + c \\cdot (2b \\cdot \\sin(\\phi)), \\quad \\cos(\\phi) = \\frac{(a^{2} + b^{2}) \\cdot \\cos(\\theta) + 2ab}{a^{2} + b^{2} + 2ab \\cdot \\cos(\\theta)}, \\sin(\\phi) = \\sin(\\theta) \\cdot \\frac{b^{2} - a^{2}}{a^{2} + b^{2} + 2ab \\cdot \\cos(\\theta)}",
    eqFind: ["cos(theta)", "cos(phi)", "x=", "x =", "y=", "y =", "sin(theta)", "sin(phi)"],
    imgSortKey: "005",
    images: {
      canonical: "Images/Antiparalink/Antiparalink01-360.avif",
      variant1: "Images/Antiparalink/Antiparalink03-360.avif",
      variant2: "Images/Antiparalink/Antiparalink06-360.avif"
    }
  },
  {
    id: "apollonian",
    title: "Apollonian",
    filename: "Apollonian.html",
    aliases: ["Focal Circular Cubic", "Focal of Van Rees", "Isoptic Cubic", "Circular Cubic with an Axis"],
    eqSortKey: "006",
    done: true,
    imgCount: 10,
    equation: "(x - 2a)(x^{2} + y^{2}) + b^{2} (\\cos(2\\alpha) \\, x + \\sin(2\\alpha) \\, y) = 0, \\quad r = \\frac{a}{\\cos\\theta} \\pm \\sqrt{\\frac{a^{2} - b^{2} \\cos\\theta \\cdot \\cos(\\theta - 2\\alpha)}{\\cos\\theta}} \\quad (a \\geq 0,\\, b > 0,\\, 0 \\leq \\alpha \\leq \\pi/2)",
    eqFind: ["cos(theta)", "sqrt", "r=", "r =", "y=", "y =", "alpha", ""],
    imgSortKey: "006",
    images: {
      canonical: "Images/Apollonian/Apollonian01-360.avif",
      variant1: "Images/Apollonian/Apollonian03-360.avif",
      variant2: "Images/Apollonian/Apollonian09-360.avif"
    }
  },
  {
    id: "arbelos",
    title: "Arbelos",
    filename: "Arbelos.html",
    aliases: ["Shoemaker's Knife"],
    eqSortKey: "007",
    done: true,
    imgCount: 5,
    equation: "x(\\theta) = x_c + r \\cos(\\theta), y(\\theta) = y_c + r \\sin(\\theta) \\quad (\\theta \\in [0,\\pi])",
    eqFind: ["sin(theta)", "cos(theta)"],
    imgSortKey: "007",
    images: {
      canonical: "Images/Arbelos/Arbelos01-360.avif",
      variant1: "Images/Arbelos/Arbelos02-360.avif",
      variant2: "Images/Arbelos/Arbelos03-360.avif"
    }
  },
  {
    id: "archimedean-spiral",
    title: "Archimedean Spiral",
    filename: "Archimedean.html",
    aliases: ["Arithmetic Spiral", "Swan-like Curve", "Neoid", "Equilateral Spiral"],
    eqSortKey: "008",
    done: true,
    imgCount: 7,
    equation: "r = a + b \\cdot \\theta",
    eqFind: ["r=", "r =", "b(theta)"],
    imgSortKey: "008",
    images: {
      canonical: "Images/Archimedean/Archimedean01-360.avif",
      variant1: "Images/Archimedean/Archimedean03-360.avif",
      variant2: "Images/Archimedean/Archimedean05-360.avif"
    }
  },
  {
    id: "arcs-of-samothrace",
    title: "Arcs of Samothrace",
    filename: "ArcsOfSamothrace.html",
    aliases: [],
    eqSortKey: "009",
    done: true,
    imgCount: 25,
    equation: "r = \\frac{\\tan \\theta}{1 + 2 \\cos 2\\theta}, \\quad r = \\frac{a \\sin^{b} \\theta}{c \\cos^{d} \\theta \\left( e \\cos^{f} \\theta - g \\sin^{h} \\theta \\right)^{i}}, \\quad r = \\frac{\\tan (a \\theta)}{b + c \\cos (d \\theta)}",
    eqFind: ["r=", "r =", "sin^2(theta)", "cos^2(theta)", "tan^2(theta)"],
    imgSortKey: "009",
    images: {
      canonical: "Images/ArcsofSamothrace/ArcsofSamothrace01-360.avif",
      variant1: "Images/ArcsofSamothrace/ArcsofSamothrace20-360.avif",
      variant2: "Images/ArcsofSamothrace/ArcsofSamothrace22-360.avif"
    }
  },
  {
    id: "astroid",
    title: "Astroid",
    filename: "Astroid.html",
    aliases: ["Tetracuspid", "Cubocycloid", "Four-cusped Hypocycloid", "Hypocycloid of four cusps"],
    eqSortKey: "010",
    done: true,
    imgCount: 3,
    equation: "x^{2/3} + y^{2/3} = a^{2/3}, \\quad r = \\frac{a}{(\\cos^{2/3} \\theta + \\sin^{2/3} \\theta)^{3/2}}, \\quad x = a \\cos^3 t, y = a \\sin^3 t, \\quad x = a \\cos^b t, y = c \\sin^d t",
    eqFind: ["r=", "r =", "sin^", "sin(t)", "cos^", "cos(t)"],
    imgSortKey: "010",
    images: {
      canonical: "Images/Astroid/Astroid01-360.avif",
      variant1: "Images/Astroid/Astroid02-360.avif",
      variant2: "Images/Astroid/Astroid03-360.avif"
    }
  },
  {
    id: "atom-spiral",
    title: "Atom spiral",
    filename: "AtomSpiral.html",
    aliases: ["Atomic Spiral"],
    eqSortKey: "011",
    done: true,
    imgCount: 11,
    equation: "r = \\frac{\\theta}{\\theta - a}, \\quad r = \\frac{a \\theta}{b \\theta - c} ",
    eqFind: ["r=", "r =", "theta"],
    imgSortKey: "011",
    images: {
      canonical: "Images/AtomSpiral/AtomSpiral01-360.avif",
      variant1: "Images/AtomSpiral/AtomSpiral05-360.avif",
      variant2: "Images/AtomSpiral/AtomSpiral11-360.avif"
    }
  },
  {
    id: "atriphtaloid",
    title: "Atriphtaloid",
    filename: "Atriphtaloid.html",
    aliases: ["Atriphtothalassic", "Atriphtothlassic", "Atriphtalassic"],
    eqSortKey: "012",
    done: true,
    imgCount: 6,
    equation: "x^{4}(x^{2} + y^{2}) - (a x^{2} - b)^{2} = 0, y = \\pm \\frac{\\sqrt{(a x^{2} - b)^{2} - x^{6}}}{x^{2}}",
    eqFind: ["x^4", "x^2", "y^2", "sqrt", "y=", "y =", "x^6"],
    imgSortKey: "012",
    images: {
      canonical: "Images/Atriphtaloid/Atriphtaloid01-360.avif",
      variant1: "Images/Atriphtaloid/Atriphtaloid03-360.avif",
      variant2: "Images/Atriphtaloid/Atriphtaloid06-360.avif"
    }
  },
  {
    id: "atzema-spiral",
    title: "Atzema spiral",
    filename: "Atzema.html",
    aliases: ["Pritch-Atzema Spiral", "Spiral of Atzema"],
    eqSortKey: "013",
    done: true,
    imgCount: 9,
    equation: "x = a\\left(\\frac{\\sin\\theta}{\\theta} - 2\\cos\\theta - \\theta\\sin\\theta\\right), y = a\\left(\\frac{\\cos\\theta}{\\theta} - 2\\sin\\theta + \\theta\\cos\\theta\\right), \\quad x = a\\left(\\frac{\\sin\\theta}{\\theta} - b\\cos\\theta - c\\theta\\sin\\theta\\right), y = d\\left(\\frac{\\cos\\theta}{\\theta} - e\\sin\\theta + f\\theta\\cos\\theta\\right)",
    eqFind: ["x=", "x =", "sin(theta)", "cos(theta)", "theta", "y=", "y ="],
    imgSortKey: "013",
    images: {
      canonical: "Images/Atzema/Atzema01-360.avif",
      variant1: "Images/Atzema/Atzema04-360.avif",
      variant2: "Images/Atzema/Atzema09-360.avif"
    }
  },
  {
    id: "avrami-curve",
    title: "Avrami Curve",
    filename: "Avrami.html",
    aliases: ["JMAK equation", "JMAK model", "Johnson–Mehl–Avrami–Kolmogorov equation",
              "Johnson-Mehl-Avrami equation", "JMA equation", "Kolmogorov–Johnson–Mehl–Avrami equation",
              "KJMA equation", "Avrami-Erofeev equation", "Avrami-Weibull function", "Avrami function"],
    eqSortKey: "014",
    done: true,
    imgCount: 5,
    equation: "y = 1 - e^{-k t^n}",
    eqFind: ["y=", "yx =", "e^(-k t", "e^k t"],
    imgSortKey: "014",
    images: {
      canonical: "Images/Avrami/Avrami01-360.avif",
      variant1: "Images/Avrami/Avrami02-360.avif",
      variant2: "Images/Avrami/Avrami04-360.avif"
    }
  },
  {
    id: "ballistic-curve",
    title: "Ballistic Curve",
    filename: "Ballistic.html",
    aliases: ["Stokes Drag Trajectory", "Linear Drag Trajectory"],
    eqSortKey: "015",
    done: true,
    imgCount: 2,
    equation: "y = \\frac{b}{a}x + c \\ln\\left(1 - \\frac{x}{a}\\right), \\quad x = \\frac{v_0 \\cos\\phi_0}{k} (1 - e^{-kt}), y = \\left( \\frac{v_0 \\sin\\phi_0}{k} + \\frac{g}{k^2} \\right) (1 - e^{-kt}) - g t",
    eqFind: ["y=", "y =", "x=", "x =", "cos(phi", "e^-k t", "ln"],
    imgSortKey: "015",
    images: {
      canonical: "Images/Ballistic/Ballistic01-360.avif",
      variant1: "Images/Ballistic/Ballistic02-360.avif"
    }
  },
  {
    id: "base-of-the-slider-crank-mechanism",
    title: "Base of the Slider-Crank Mechanism",
    filename: "BaseSlider.html",
    aliases: ["Slider-Crank Base Curve", "Crank-Slider Locus"],
    eqSortKey: "016",
    done: true,
    imgCount: 2,
    equation: "r = a \\pm \\frac{\\sqrt{b^{2} - a^{2} \\sin^{2} \\theta }}{\\cos \\theta}",
    eqFind: ["r=", "r =", "sqrt", "sin^2", "cos", "theta"],
    imgSortKey: "016",
    images: {
      canonical: "Images/BaseSlider/BaseSlider01-360.avif",
      variant1: "Images/BaseSlider/BaseSlider02-360.avif",
      variant2: {
        thumbnail: "Images/BaseSlider/BaseSlider03-360.gif",
        url: "https://mathcurve.com/courbes2d.gb/base/basebiellemanivelle.shtml",
        external: true
      }
    }
  },
  {
    id: "bean-curve",
    title: "Bean Curve",
    filename: "Bean.html",
    aliases: ["Cundy–Rollett Bean Curve", "Lima Bean Curve", "Wassenaar Bean Curve"],
    eqSortKey: "017",
    done: true,
    imgCount: 18,
    equation: "x^{4} + x^{2} y^{2} + y^{4} = a x (x^{2} + y^{2}), \\quad r = \\frac{a \\cos(\\theta)}{\\cos^{4}(\\theta) + \\sin^{4}(\\theta) + \\cos^{2}(\\theta) \\cdot \\sin^{2}(\\theta)}, \\quad (x^{2} + y^{2})^{2} = a (x^{3} + y^{3}), \\quad r = \\sin^{3}(\\theta) + \\cos^{3}(\\theta), \\quad r = \\sin^{a}(\\theta) + \\cos^{b}(\\theta) ",
    eqFind: ["x^2", "x^3", "x^4", "y^2", "y^3", "y^4", "r=", "r =", "theta"],
    imgSortKey: "017",
    images: {
      canonical: "Images/Bean/Bean01-360.avif",
      variant1: "Images/Bean/Bean02-360.avif",
      variant2: "Images/Bean/Bean17-360.avif"
    }    
  },
  {
    id: "beetle-curve",
    title: "Beetle Curve",
    filename: "Beetle.html",
    aliases: ["Scarabaeus Curve", "Courbe Scarabée", "Scarab Curve", "Negative Pedal Curve of the Astroid", "Astroid Negative Pedal Curve", "Beetle Butterfly Curve", "Butterfly Curve"],
    eqSortKey: "018",
    done: true,
    imgCount: 12,
    equation: "(x^{2} + y^{2})(x^{2} + y^{2} - a x - b y)^{2} = r^{2} x^{2} y^{2}, \\quad \\rho = a \\cos(\\theta) - b \\sin(\\theta) - r \\sin(\\theta)\\cos(\\theta), \\quad \\rho = \\frac{a}{\\sqrt{2}}\\cos(\\theta - \\phi) + \\frac{b}{\\sqrt{2}}\\sin(\\theta - \\phi) - 2r \\sin(\\theta - \\phi)\\cos(\\theta - \\phi)",
    eqFind: ["x^2", "y^2", "rho(theta)", "rho=", "rho =", "cos(theta)", "sin(theta)", "sqrt", "phi"],
    imgSortKey: "018",
    images: {
      canonical: "Images/Beetle/Beetle03-360.avif",
      variant1: "Images/Beetle/Beetle09-360.avif",
      variant2: "Images/Beetle/Beetle12-360.avif"
    }     
  },
  {
    id: "bernoullian-quartic",
    title: "Bernoullian Quartic",
    filename: "BernoulliQ.html",
    aliases: ["Quartic of Bernoulli", "Polyzomal Curve (concentric circles case)", "Median Curve of two concentric circles", "Slider-crank Bernoulli Coupler Curve"],
    eqSortKey: "019",
    done: true,
    imgCount: 3,
    equation: "x^{2} y^{2} = \\left( \\left( \\frac{a + b}{2} \\right)^{2} - y^{2} \\right) \\left( y^{2} - \\left( \\frac{a - b}{2} \\right)^{2} \\right), \\quad x = \\frac{ a \\cos(\\theta) + \\sqrt{ b^{2} - a^{2} \\sin^{2}(\\theta) } }{2} , y = a \\sin(\\theta)",
    eqFind: ["x^2", "y^2", "x=", "x =", "theta", "cos(theta)", "sin(theta)", "y=", "y ="],
    imgSortKey: "019",
    images: {
      canonical: "Images/BernoulliQ/BernoulliQ01-360.avif",
      variant1: "Images/BernoulliQ/BernoulliQ02-360.avif",
      variant2: "Images/BernoulliQ/BernoulliQ03-360.avif"
    } 
  },
  {
    id: "besace",
    title: "Besace",
    filename: "Besace.html",
    aliases: ["Cramer’s curve", "Saddlebag Curve", "Lemniscate of Gerono (b=0)"],
    eqSortKey: "020",
    done: true,
    imgCount: 6,
    equation: "c^{2} y = b x^{2} \\pm a x c^{2} - x^{3} \\quad (c = a^{2} + b^{2}), \\quad x = a \\cos(\\theta) - b \\sin(\\theta), y = -x \\sin(\\theta)",
    eqFind: ["x^2", "y^2", "x=", "x =", "theta", "cos(theta)", "sin(theta)", "y=", "y ="],
    imgSortKey: "020",
    images: {
      canonical: "Images/Besace/Besace01-360.avif",
      variant1: "Images/Besace/Besace03-360.avif",
      variant2: "Images/Besace/Besace06-360.avif"
    } 
  },
  {
    id: "bessel",
    title: "Bessel",
    filename: "Bessel.html",
    aliases: ["Cylinder Function", "Cylindrical Function"],
    eqSortKey: "021",
    done: true,
    imgCount: 5,
    equation: "J_0(x) \\approx \\frac{1}{(1 + \\lambda^4 x^2)^{1/4} (1 + q x^2)} \\left[ (p_0 + p_1 x^2 + p_2 \\sqrt{1 + \\lambda^4 x^2}) \\cos x + \\left( (\\tilde{p}_0 + \\tilde{p}_1 x^2) \\sqrt{1 + \\lambda^4 x^2} + \\tilde{p}_2 x^2 \\right) \\frac{\\sin x}{x} \\right], \\quad J_1(x) \\approx \\frac{(0.1601 x^2 + 0.8660) \\sin x}{(1 + 0.3489 x^2) (1 + 0.4181 x^2)^{1/4}} - \\frac{x (0.1007 x^2 + 0.3718) \\cos x}{(1 + 0.4181 x^2)^{3/4} (1 + 0.3489 x^2)}",
    eqFind: ["J", "J0", "J_0", "J1", "J_1", "lambda", "sqrt", "sin(x)", "cos(x)", "y=", "y ="],
    imgSortKey: "021",
    images: {
      canonical: "Images/Bessel/Bessel01-360.avif",
      variant1: "Images/Bessel/Bessel02-360.avif",
      variant2: "Images/Bessel/Bessel03-360.avif"
    } 
  },
  {
    id: "bicorn",
    title: "Bicorn",
    filename: "Bicorn.html",
    aliases: ["Cocked Hat Curve", "Sylvester's Bicorn Curve"],
    eqSortKey: "022",
    done: true,
    imgCount: 46,
    equation: "y^{2}(a^{2}-x^{2}) = (x^{2}+2ay-a^{2})^{2}, \\quad x=a\\sin(b\\theta), y=a\\frac{\\cos^{c}(d\\theta)\\ (e+\\cos(f\\theta))}{g+h\\sin^{i}(j\\theta)}",
    eqFind: ["y^2", "x^2", "x=", "x =", "y=", "y =", "sin^", "cos^", "theta"],
    imgSortKey: "022",
    images: {
      canonical: "Images/Bicorn/Bicorn01-360.avif",
      variant1: "Images/Bicorn/Bicorn21-360.avif",
      variant2: "Images/Bicorn/Bicorn31-360.avif"
    }
  },
  {
    id: "bicuspid",
    title: "Bicuspid",
    filename: "Bicuspid.html",
    aliases: ["Bicuspidal Quartic"],
    eqSortKey: "023",
    done: true,
    imgCount: 1,
    equation: "(x^{2} - a^{2})(x - a)^{2} + (y^{2} - a^{2})^{2} = 0, \\quad (y^{2} - a^{2})(y + a)^{2} + (x^{2} - a^{2})^{2} = 0",
    eqFind: ["y^2", "x^2"],
    imgSortKey: "023",
    images: {
      canonical: "Images/Bicuspid/Bicuspid01-360.avif"
    }
  },
  {
    id: "bifoliate",
    title: "Bifoliate",
    filename: "Bifoliate.html",
    aliases: ["Double folium", "Bifolium", "Pedal Curve of the Deltoid"],
    eqSortKey: "024",
    done: true,
    imgCount: 1,
    equation: "(x^{2} - a^{2})(x - a)^{2} + (y^{2} - a^{2})^{2} = 0, \\quad (y^{2} - a^{2})(y + a)^{2} + (x^{2} - a^{2})^{2} = 0",
    eqFind: ["y^2", "x^2"],
    imgSortKey: "024",
    images: {
      canonical: "Images/Bifoliate/Bifoliate01-360.avif"
    }
  },
  {
    id: "bifolium",
    title: "Bifolium",
    filename: "Bifolium.html",
    aliases: ["Bifoliate", "Double Folium", "Longchamps Bifolium", "Regular Bifolium", "Rabbit Ear Curve"],
    eqSortKey: "025",
    done: true,
    imgCount: 30,
    equation: "r = a \\cdot \\cos^{2}(\\theta) \\cdot \\sin(\\theta), \\quad (x^{2} + y^{2})^{2} = 4 a x^{2} y, \\quad r = \\cos^{2}(\\theta) \\cdot (a \\cdot \\cos(\\theta) + b \\cdot \\sin(\\theta)), \\quad r = a \\cdot (\\sin^{b}(c\\theta) - d) \\cdot (\\cos^{e}(f\\theta) - g)",
    eqFind: ["r=", "r =", "theta", "cos^2", "sin^", "x^2", "y^2", "cos^", "theta"],
    imgSortKey: "025",
    images: {
      canonical: "Images/Bifolium/Bifolium02-360.avif",
      variant1: "Images/Bifolium/Bifolium15-360.avif",
      variant2: "Images/Bifolium/Bifolium26-360.avif"
    }
  },
  {
    id: "boat-propeller-curve",
    title: "Boat Propeller Curve",
    filename: "Propeller.html",
    aliases: ["Tardy Boat Propeller Curve", "Propeller Curve"],
    eqSortKey: "026",
    done: true,
    imgCount: 9,
    equation: "x^{6} + y^{6} = x y (x^{2} - y^{2}), \\quad r^{2} = \\frac{2 \\sin (n \\theta)}{n + 1 + (n - 1) \\cos (n \\theta)}",
    eqFind: ["x^6", "y^6", "x=", "x =", "y=", "y =", "sin(n theta)", "cos(n theta)"],
    imgSortKey: "026",
    images: {
      canonical: "Images/Propeller/Propeller01-360.avif",
      variant1: "Images/Propeller/Propeller02-360.avif",
      variant2: "Images/Propeller/Propeller03-360.avif"
    }
  },
  {
    id: "booth-curve",
    title: "Booth Curve",
    filename: "Booth.html",
    aliases: ["Booth's Bicircular Quartic"],
    eqSortKey: "027",
    done: true,
    imgCount: 13,
    equation: "r = \\sqrt{\\dfrac{a^{2} \\cos(2\\theta) + \\sqrt{a^{4} \\cos^{2}(2\\theta) + 4 b^{4}}}{2}}, \\quad r = \\sqrt{\\dfrac{a^{2} \\cos(n\\theta) + \\sqrt{a^{4} \\cos^{2}(n\\theta) + 4 b^{4}}}{2}}",
    eqFind: ["r=", "r =", "theta", "cos^2", "sin^", "x^2", "y^2", "cos^", "theta", "sqrt"],
    imgSortKey: "027",
    images: {
      canonical: "Images/Booth/Booth03-360.avif",
      variant1: "Images/Booth/Booth06-360.avif",
      variant2: "Images/Booth/Booth11-360.avif"
    }
  },
  {
    id: "bounce-curve",
    title: "Bounce Curve",
    filename: "Bounce.html",
    aliases: ["Bouncing Ball Curve"],
    eqSortKey: "028",
    done: true,
    imgCount: 6,
    equation: "y_n(x) = \\dfrac{4 H e^{2n}}{S_n^2} \\, x (S_n - x) \\quad (0 \\leq x \\leq S_n), \\quad S_n = S_0 \\, u_n \\, e^n , \\quad u_{n+1} = \\max(0, u_n - d \\cdot e^n) , \\quad u_0 = 1, X_n = \\sum_{k=0}^{n-1} S_k \\quad (X_0 = 0), \\quad x_{\\text{world}} = X_n + x , \\quad y = y_n(x)",
    eqFind: ["y=", "y ="],
    imgSortKey: "028",
    images: {
      canonical: "Images/Bounce/Bounce02-360.avif",
      variant1: "Images/Bounce/Bounce05-360.avif",
      variant2: "Images/Bounce/Bounce06-360.avif"
    }
  },
  {
    id: "bow-curve",
    title: "Bow Curve",
    filename: "BowCurve.html",
    aliases: ["Quartic Bow Curve"],
    eqSortKey: "029",
    done: true,
    imgCount: 1,
    equation: "x^{4} = a (x^{2} y - y^{3}), \\quad x = a (t - t^{3}), y = a (t^{2} - t^{4})",
    eqFind: ["x=", "x =", "y=", "y =", "t^", "x^4", "x^2", "y^3"],
    imgSortKey: "029",
    images: {
      canonical: "Images/BowCurve/BowCurve01-360.avif"
    }
  },
  {
    id: "bowditch",
    title: "Bowditch",
    filename: "Bowditch.html",
    aliases: ["Lissajous Curve"],
    eqSortKey: "030",
    done: true,
    imgCount: 27,
    equation: "x = A \\sin(at + \\delta), y = B \\sin(bt), \\quad x = a \\sin(bt + c), y = d \\sin(et + f) + g \\left[\\sin(ht + i)\\right]^{j}",
    eqFind: ["x=", "x =", "y=", "y =", "delta", "sin(", "t"],
    imgSortKey: "030",
    images: {
      canonical: "Images/Bowditch/Bowditch03-360.avif",
      variant1: "Images/Bowditch/Bowditch12-360.avif",
      variant2: "Images/Bowditch/Bowditch25-360.avif"
    }
  },
  {
    id: "bowtie-curve",
    title: "Bowtie Curve",
    filename: "Bowtie.html",
    aliases: ["Bow Tie Curve"],
    eqSortKey: "031",
    done: true,
    imgCount: 9,
    equation: "r = \\frac{\\cos(2\\theta)}{\\cos^{2}(\\theta)}, \\quad r = s \\cdot \\frac{\\cos^{a}(b\\theta)}{\\cos^{c}(d\\theta)}",
    eqFind: ["r=", "r =", "theta", "cos(", "cos^", "sin("],
    imgSortKey: "031",
    images: {
      canonical: "Images/Bowtie/Bowtie01-360.avif",
      variant1: "Images/Bowtie/Bowtie02-360.avif",
      variant2: "Images/Bowtie/Bowtie09-360.avif"
    }
  },
  {
    id: "brachistochrone",
    title: "Brachistochrone",
    filename: "Brachistochrone.html",
    aliases: ["Curve of Fastest Descent", "Tautochrone Curve", "Curve of Quickest Descent"],
    eqSortKey: "032",
    done: true,
    imgCount: 3,
    equation: "x = r(\\theta - \\sin\\theta), y = -r (1 - \\cos\\theta)",
    eqFind: ["x=", "x =", "theta", "cos", "sin"],
    imgSortKey: "032",
    images: {
      canonical: "Images/Brachistochrone/Brachistochrone01-360.avif",
      variant1: "Images/Brachistochrone/Brachistochrone02-360.avif",
      variant2: "Images/Brachistochrone/Brachistochrone03-360.avif"
    }
  },
  {
    id: "braked-parabola",
    title: "Braked Parabola",
    filename: "Brake.html",
    aliases: ["Ballistic Trajectory with Quadratic Drag"],
    eqSortKey: "033",
    done: true,
    imgCount: 10,
    equation: "\\frac{dx}{dt}=v_x,\\quad \\frac{dy}{dt}=v_y,\\quad \\frac{dv_x}{dt}=-\\frac{g}{V_t^2}v\\cdot v_x,\\quad \\frac{dv_y}{dt}=-g-\\frac{g}{V_t^2}v\\cdot v_y,\\quad v=\\sqrt{v_x^2+v_y^2}, \\quad \\frac{dx}{dt}=V_0\\cos\\theta,\\quad \\frac{dy}{dt}=V_0\\sin\\theta-gt",
    eqFind: ["dx/dt=", "dy/dt=", "dv_x/dt=", "dv_y/dt=", "v=", "sqrt", "cos(theta)", "sin(theta)", "theta"],
    imgSortKey: "033",
    images: {
      canonical: "Images/Brake/Brake01-360.avif",
      variant1: "Images/Brake/Brake02-360.avif",
      variant2: "Images/Brake/Brake03-360.avif"
    }
  },
  {
    id: "bullet-nose-curve",
    title: "Bullet Nose Curve",
    filename: "Bullet.html",
    aliases: ["Puntiforme Curve"],
    eqSortKey: "034",
    done: true,
    imgCount: 14,
    equation: "a^{2} y^{2} - b^{2} x^{2} = x^{2} y^{2}, \\quad x = a \\cos t, y = b \\cot t, \\quad x = a \\left[ \\cos (b t - c) \\right]^{d}, y = e \\left[ \\cot (f t - g) \\right]^{h}",
    eqFind: ["x^2", "y^2", "x=", "x =", "y=", "y =", "cos(t)", "cot(t)", "t"],
    imgSortKey: "034",
    images: {
      canonical: "Images/Bullet/Bullet01-360.avif",
      variant1: "Images/Bullet/Bullet11-360.avif",
      variant2: "Images/Bullet/Bullet13-360.avif"
    }
  },
  {
    id: "burnside-curve",
    title: "Burnside Curve",
    filename: "Burnside.html",
    aliases: ["Burnside Quintic"],
    eqSortKey: "035",
    done: true,
    imgCount: 1,
    equation: "y^{2} - x(x^{4} - 1) = 0, \\quad y = ±\\sqrt{x(x^{4} - 1)}",
    eqFind: ["y=", "y =", "x^4",  "y^2", "sqrt"],
    imgSortKey: "035",
    images: {
      canonical: "Images/Burnside/Burnside01-360.avif"
    }
  },
  {
    id: "butterfly-curve",
    title: "Butterfly Curve",
    filename: "Butterfly.html",
    aliases: ["Temple Fay Butterfly Curve", "Sextic Butterfly Curve", "Sautereau Butterfly Curve"],
    eqSortKey: "036",
    done: true,
    imgCount: 22,
    equation: "r = a\\,e^{\\cos(b\\theta+c)} + d\\,\\cos(e\\theta+f) + g\\,\\sin^{h}(i\\theta+j), \\quad r = \\left( \\frac{\\cos^{c}(a\\theta+b)}{\\sin^{f}(d\\theta+e) + \\cos^{i}(g\\theta+h)} \\right)^{j}, \\quad r = a\\cos(b\\theta) + c\\sin(d\\theta) + e",
    eqFind: ["r=", "r =", "e^sin", "e^cos", "cos^", "sin^", "theta"],
    imgSortKey: "036",
    images: {
      canonical: "Images/Butterfly/Butterfly01-360.avif",
      variant1: "Images/Butterfly/Butterfly13-360.avif",
      variant2: "Images/Butterfly/Butterfly21-360.avif"
    }
  },
  {
    id: "capricornoid",
    title: "Capricornoid",
    filename: "Capricornoid.html",
    aliases: ["Poncelet's Capricornoid"],
    eqSortKey: "037",
    done: true,
    imgCount: 11,
    equation: "a^{2} x^{2} (x^{2} + y^{2}) - b (a y - x^{2} - y^{2})^{2} = 0, \\quad r = \\dfrac{\\sin\\theta}{\\cos\\theta + a} \\quad (a > 1)",
    eqFind: ["r=", "r =", "x^2", "y^2", "cos", "sin", "theta"],
    imgSortKey: "037",
    images: {
      canonical: "Images/Capricornoid/Capricornoid01-360.avif",
      variant1: "Images/Capricornoid/Capricornoid06-360.avif",
      variant2: "Images/Capricornoid/Capricornoid09-360.avif"
    }
  },
  {
    id: "cardioid",
    title: "Cardioid",
    filename: "Cardioid.html",
    aliases: ["Epicycloid of one cusp"],
    eqSortKey: "038",
    done: true,
    imgCount: 38,
    equation: "r = a(1 + \\cos \\theta), \\quad x = \\cos(a\\theta + b)^c \\left( d + e \\cos(f\\theta + g)^h \\right), y = \\sin(i\\theta + j)^k \\left( l + m \\cos(n\\theta + o)^p \\right)",
    eqFind: ["r=", "r =", "x=", "x =", "y=", "y =", "cos^", "sin^", "theta"],
    imgSortKey: "038",
    images: {
      canonical: "Images/Cardioid/Cardioid01-360.avif",
      variant1: "Images/Cardioid/Cardioid21-360.avif",
      variant2: "Images/Cardioid/Cardioid37-360.avif"
    }
  },
  {
    id: "cartesian-oval",
    title: "Cartesian Oval",
    filename: "Cartesian.html",
    aliases: ["Ovals of Descartes", "Aplanatic Curve"],
    eqSortKey: "039",
    done: true,
    imgCount: 7,
    equation: "m\\sqrt{(x + a)^{2} + y^{2}} + n\\sqrt{(x - a)^{2} + y^{2}} = k, \\quad r =\\rho_{1}^{2}\\cos\\theta+\\rho_{2}\\pm\\sqrt{\\rho_{1}^{2}\\Bigl[(\\rho_{2}+\\cos\\theta)^{2}+(1-\\rho_{1}^{2})\\sin^{2}\\theta\\Bigr]}, \\quad x =a_{1}+r(\\theta)\\cos\\theta, y = r(\\theta)\\sin\\theta",
    eqFind: ["r=", "r =", "x=", "x =", "y=", "y =", "cos^", "sin^", "theta", "rho", "sqrt"],
    imgSortKey: "039",
    images: {
      canonical: "Images/Cartesian/Cartesian01-360.avif",
      variant1: "Images/Cartesian/Cartesian02-360.avif",
      variant2: "Images/Cartesian/Cartesian06-360.avif"
    }
  },
  {
    id: "cassinian-curve",
    title: "Cassinian Curve",
    filename: "CassCurve.html",
    aliases: ["Multifocal Cassini Curve", "Generalized Cassinian Curve"],
    eqSortKey: "040",
    done: true,
    imgCount: 2,
    equation: "r = a \\left( \\cos (n \\theta) \\pm \\sqrt{ e^{2 n} - \\sin^{2} (n \\theta) } \\right)^{1/n}",
    eqFind: ["r=", "r =", "sin", "cos", "theta", "sqrt", "e^n", "n theta"],
    imgSortKey: "040",
    images: {
      canonical: "Images/CassCurve/CassCurve01-360.avif",
      variant1: "Images/CassCurve/CassCurve02-360.avif"
    }
  },
  {
    id: "cassinian-oval",
    title: "Cassinian Oval",
    filename: "Cassinian.html",
    aliases: ["Ovals of Cassini"],
    eqSortKey: "041",
    done: true,
    imgCount: 6,
    equation: "[(x - a)^{2} + y^{2}][(x + a)^{2} + y^{2}] = b^{4}, \\quad r^{4} - 2 a^{2} r^{2} \\cos(2\\theta) = b^{4} - a^{4}, \\quad r^{4} - 2 a^{2} r^{2} \\cos(c\\theta) = b^{4} - a^{4}",
    eqFind: ["r^2", "r^4", "x^2", "y^2", "cos", "theta"],
    imgSortKey: "041",
    images: {
      canonical: "Images/Cassinian/Cassinian01-360.avif",
      variant1: "Images/Cassinian/Cassinian04-360.avif",
      variant2: "Images/Cassinian/Cassinian06-360.avif"
    }
  },
  {
    id: "catalan-curve",
    title: "Catalan Curve",
    filename: "Catalan.html",
    aliases: ["Circular Glissette", "Roulette of Catalan"],
    eqSortKey: "042",
    done: true,
    imgCount: 2,
    equation: "r = \\frac{a}{1 - \\theta^{2}}",
    eqFind: ["r=", "r =", "theta^2"],
    imgSortKey: "042",
    images: {
      canonical: "Images/Catalan/Catalan01-360.avif",
      variant1: "Images/Catalan/Catalan02-360.avif"
    }
  },
  {
    id: "catastrophic-sine",
    title: "Catastrophic Sine",
    filename: "CatSine.html",
    aliases: ["Resonant Oscillation"],
    eqSortKey: "043",
    done: true,
    imgCount: 12,
    equation: "y = a x \\sin\\left(\\frac{1}{x}\\right), \\quad y = a \\sin(b x) \\sin\\left(\\frac{1}{c x}\\right), \\quad y = a x^{b} \\sin\\left(\\frac{1}{x}\\right), \\quad y = a (x + b) \\sin(x), \\quad y = a (x + b) \\sin\\left(\\frac{1}{x}\\right), \\quad y = a (b x + c)^{d} \\sin^{g}(e x + f)",
    eqFind: ["y=", "y =", "sin^", "x^"],
    imgSortKey: "043",
    images: {
      canonical: "Images/CatSine/CatSine01-360.avif",
      variant1: "Images/CatSine/CatSine02-360.avif",
      variant2: "Images/CatSine/CatSine03-360.avif"
    }
  },
  {
    id: "catenary",
    title: "Catenary",
    filename: "Catenary.html",
    aliases: ["Chainette", "Alysoid", "Funicular Curve", "Vélaire", "Sail Curve", "Hyperbolic Cosine Curve"],
    eqSortKey: "044",
    done: true,
    imgCount: 4,
    equation: "y = a \\cosh\\left(\\frac{x}{a}\\right), \\quad y = a \\cosh\\left(\\frac{x}{b}\\right), \\quad y = \\frac{a}{2} \\left( e^{x/a} + e^{-x/a} \\right), \\quad y = \\frac{a}{2} \\left( e^{x/b} + e^{-x/c} \\right)",
    eqFind: ["y=", "y =", "cosh^", "e^x", "e^-x"],
    imgSortKey: "044",
    images: {
      canonical: "Images/Catenary/Catenary01-360.avif",
      variant1: "Images/Catenary/Catenary02-360.avif",
      variant2: "Images/Catenary/Catenary03-360.avif"
    }
  },
  {
    id: "catenary-evolute",
    title: "Catenary Evolute",
    filename: "CatEvolute.html",
    aliases: ["Evolute of the Catenary"],
    eqSortKey: "045",
    done: true,
    imgCount: 1,
    equation: "y = a \\cosh\\left(\\frac{x}{a}\\right), \\quad x = t - \\frac{a}{2} \\sinh\\left(\\frac{2t}{a}\\right), y = 2a \\cosh\\left(\\frac{t}{a}\\right)",
    eqFind: ["y=", "y =", "cosh^", "sinh", "t"],
    imgSortKey: "045",
    images: {
      canonical: "Images/CatEvolute/CatEvolute01-360.avif"
    }
  },
  {
    id: "catenary-of-equal-strength",
    title: "Catenary of Equal Strength",
    filename: "CatEqual.html",
    aliases: ["Curve of the Log Cosine", "Coriolis' Catenary"],
    eqSortKey: "046",
    done: true,
    imgCount: 1,
    equation: "y = -\\dfrac{a}{\\pi} \\ln\\left(\\cos\\left(\\dfrac{\\pi x}{a}\\right)\\right), \\quad \\left| x \\right| &lt; \\dfrac{a}{2}",
    eqFind: ["y=", "y =", "cos", "ln"],
    imgSortKey: "046",
    images: {
      canonical: "Images/CatEqual/CatEqual01-360.avif"
    }
  },
  {
    id: "cayley-oval",
    title: "Cayley Oval",
    filename: "CayleyOval.html",
    aliases: ["Equipotential Curve"],
    eqSortKey: "047",
    done: true,
    imgCount: 1,
    equation: "x = \\frac{b^{2} \\cos(2t)}{a \\sin^{4}(2t)}, y = \\pm \\sqrt{ \\frac{b^{2}}{4 \\cos^{4}(t)} - (x - a)^{2} }, \\quad 0 < t < \\frac{\\pi}{2}",
    eqFind: ["x=", "x =", "y=", "y =", "cos^4", "sin^4", "t"],
    imgSortKey: "047",
    images: {
      canonical: "Images/CayleyOval/CayleyOval01-360.avif"
    }
  },
  {
    id: "cayley-s-sextic",
    title: "Cayley's Sextic",
    filename: "CayleySextic.html",
    aliases: ["Sextic of Cayley"],
    eqSortKey: "048",
    done: true,
    imgCount: 16,
    equation: "4(x^{2} + y^{2} - a x)^{3} = 27 a^{2} (x^{2} + y^{2})^{2},\\quad r = 4a \\cos^{3}\\left(\\frac{\\theta}{3}\\right), \\quad r = a \\cdot \\cos^{b}(c \\theta)",
    eqFind: ["x^2", "y^2", "r=", "r =", "cos^3", "theta"],
    imgSortKey: "048",
    images: {
      canonical: "Images/CayleySextic/CayleySextic01-360.avif",
      variant1: "Images/CayleySextic/CayleySextic02-360.avif",
      variant2: "Images/CayleySextic/CayleySextic15-360.avif"
    }
  },
  {
    id: "centered-trochoid",
    title: "Centered Trochoid",
    filename: "CenteredTrochoid.html",
    aliases: ["Meplat Trochoid"],
    eqSortKey: "049",
    done: true,
    imgCount: 17,
    equation: "x = r_1 \\cos(\\omega_1 t) + r_2 \\cos(\\omega_2 t),\quad y = r_1 \\sin(\\omega_1 t) + r_2 \\sin(\\omega_2 t)",
    eqFind: ["x=", "x =", "y=", "y =", "cos", "sin", "omega", "theta"],
    imgSortKey: "049",
    images: {
      canonical: "Images/CenteredTrochoid/CenteredTrochoid01-360.avif",
      variant1: "Images/CenteredTrochoid/CenteredTrochoid08-360.avif",
      variant2: "Images/CenteredTrochoid/CenteredTrochoid15-360.avif"
    }
  },
  {
    id: "ceva-s-sectrix",
    title: "Ceva's Sectrix",
    filename: "CevaSectrix.html",
    aliases: ["Bow Tie", "Double Egg", "Peanut", "Cycloid of Ceva", "Trisectrix of Ceva"],
    eqSortKey: "050",
    done: true,
    imgCount: 16,
    equation: "(x^{2} + y^{2})^{3} = \\left( (b + 1) x^{2} - (b - 1) y^{2} \\right)^{2}, \\quad r = \\frac{\\sin(3\\theta)}{\\sin(\\theta)}, \\quad r = a \\cdot \\frac{\\sin^{b} \\left( (2n+1)\\theta \\right) }{\\sin^{c} (\\theta)}, \\quad r = a \\cdot (1 + k \\cos(2\\theta)), \\quad r = a \\cdot (1 + b \\cdot \\cos^{c}(d \\theta))",
    eqFind: ["x^2", "y^2", "r=", "r =", "sin^", "cos^", "theta"],
    imgSortKey: "050",
    images: {
      canonical: "Images/CevaSectrix/CevaSectrix01-360.avif",
      variant1: "Images/CevaSectrix/CevaSectrix08-360.avif",
      variant2: "Images/CevaSectrix/CevaSectrix24-360.avif"
    }
  },
  {
    id: "chrysanthemum-curve",
    title: "Chrysanthemum Curve",
    filename: "Chrysanthemum.html",
    aliases: ["Temple Fay Chrysanthemum Curve"],
    eqSortKey: "051",
    done: true,
    imgCount: 1,
    equation: "r = 5\\left[1 + \\sin\\left(\\frac{11\\theta}{5}\\right)\\right] - 4\\sin^{4}\\left(\\frac{17\\theta}{3}\\right) \\cdot \\sin^{8}\\left[2\\cos(3\\theta) - 28\\theta\\right]",
    eqFind: ["r=", "r =", "cos", "sin^4", "sin^8", "theta"],
    imgSortKey: "051",
    images: {
      canonical: "Images/Chrysanthemum/Chrysanthemum01-360.avif"
    }
  },
  {
    id: "circular-radial-sextic-curve",
    title: "Circular Radial Sextic Curve",
    filename: "CircRadialSextic.html",
    aliases: ["Radial Curve of the Ellipse", "Tucker's Radial Curve", "Elliptic Radial Sextic"],
    eqSortKey: "052",
    done: true,
    imgCount: 2,
    equation: "(a^{2} y^{2} + b^{2} x^{2})^{3} = a^{4} b^{4} (x^{2} + y^{2})^{2}, \\quad r = \\frac{a^{2} b^{2}}{(a^{2} \\cos^{2} \\theta + b^{2} \\sin^{2} \\theta)^{3/2}}",
    eqFind: ["x^2", "y^2", "r=", "r =", "sin^2", "cos^2", "theta"],
    imgSortKey: "052",
    images: {
      canonical: "Images/CircularRadialSextic/CircularRadialSextic01-360.avif",
      variant1: "Images/CircularRadialSextic/CircularRadialSextic02-360.avif"
    }
  },
  {
    id: "cissoid",
    title: "Cissoid of Diocles",
    filename: "Diocles.html",
    aliases: ["Cissoid", "Diocles' Cissoid", "Ivy-shaped Curve"],
    eqSortKey: "053",
    done: true,
    imgCount: 11,
    equation: "x(x^{2} + y^{2}) = a\\left(\\cos\\frac{\\alpha}{2} y - \\sin\\frac{\\alpha}{2} x\\right)^{2}, \\quad r = a \\frac{\\sin^{2}(\\theta - \\alpha/2)}{\\cos \\theta}, \\quad r = \\frac{a + b \\sin^{c}(d\\theta + e)}{f + g \\cos^{h}(i\\theta + j)}",
    eqFind: ["x^2", "y^2", "r=", "r =", "sin^", "cos^", "theta", "alpha"],
    imgSortKey: "053",
    images: {
      canonical: "Images/Diocles/Diocles01-360.avif",
      variant1: "Images/Diocles/Diocles09-360.avif",
      variant2: "Images/Diocles/Diocles10-360.avif"
    }
  },
  {
    id: "cissoid-of-zahradnik",
    title: "Cissoid of Zahradnik",
    filename: "Zahradnik.html",
    aliases: ["Zahradnik's Cissoid"],
    eqSortKey: "054",
    done: true,
    imgCount: 9,
    equation: "(c x^{2} + 2 e x y + f y^{2}) x = (2 a + c d) x^{2} + 2 e x y + (b + f d) y^{2}, \\quad r = \\frac{d}{\\cos\\theta} + \\frac{2 a \\cos\\theta + 2 b \\sin\\theta}{c \\cos^{2}\\theta + 2 e \\cos\\theta \\sin\\theta + f \\sin^{2}\\theta}",
    eqFind: ["x^2", "y^2", "xy", "r=", "r =", "sin^", "cos^", "theta"],
    imgSortKey: "054",
    images: {
      canonical: "Images/Zahradnik/Zahradnik01-360.avif",
      variant1: "Images/Zahradnik/Zahradnik07-360.avif",
      variant2: "Images/Zahradnik/Zahradnik09-360.avif"
    }
  },
  {
    id: "clairaut-s-curve",
    title: "Clairaut's Curve",
    filename: "Clairaut.html",
    aliases: [],
    eqSortKey: "055",
    done: true,
    imgCount: 3,
    equation: "r = a \\cdot \\sin^{b} (\\theta)",
    eqFind: ["r=", "r =", "sin^", "theta"],
    imgSortKey: "055",
    images: {
      canonical: "Images/Clairaut/Clairaut01-360.avif",
      variant1: "Images/Clairaut/Clairaut02-360.avif",
      variant2: "Images/Clairaut/Clairaut03-360.avif"
    }
  },
  {
    id: "clinoid",
    title: "Clinoid",
    filename: "Clinoid.html",
    aliases: [],
    eqSortKey: "056",
    done: true,
    imgCount: 3,
    equation: "y = b \\cdot e^{(x + x_0)/a} + c \\cdot e^{-(x + x_0)/a} \\quad \\text{where} \\quad x_0 = \\frac{a}{2} \\ln\\left(\\frac{c}{b}\\right)",
    eqFind: ["y=", "y =", "e^x", "e^-x"],
    imgSortKey: "056",
    images: {
      canonical: "Images/Clinoid/Clinoid01-360.avif",
      variant1: "Images/Clinoid/Clinoid02-360.avif",
      variant2: "Images/Clinoid/Clinoid03-360.avif"
    }
  },
  {
    id: "clothoid",
    title: "Clothoid",
    filename: "Clothoid.html",
    aliases: ["Cornu Spiral", "Euler Spiral"],
    eqSortKey: "057",
    done: true,
    imgCount: 1,
    equation: "x = 2a \\int_{0}^{t} \\cos\\left( \\frac{\\pi u^{2}}{2} \\right) \\, du , \\quad y = 2a \\int_{0}^{t} \\sin\\left( \\frac{\\pi u^{2}}{2} \\right) \\, du",
    eqFind: ["x=", "x =", "y=", "y =", "cos", "sin", "int", "du", "t"],
    imgSortKey: "057",
    images: {
      canonical: "Images/Clothoid/Clothoid01-360.avif"
    }
  },
  {
    id: "cochleoid",
    title: "Cochleoid",
    filename: "Cochleoid.html",
    aliases: ["Snail Curve"],
    eqSortKey: "058",
    done: true,
    imgCount: 13,
    equation: "r = \\frac{a \\sin \\theta}{\\theta}, \\quad r = \\frac{a \\sin^{b} (c \\theta)}{\\theta^{d}}",
    eqFind: ["r=", "r =", "sin^", "theta^"],
    imgSortKey: "058",
    images: {
      canonical: "Images/Cochleoid/Cochleoid01-360.avif",
      variant1: "Images/Cochleoid/Cochleoid08-360.avif",
      variant2: "Images/Cochleoid/Cochleoid13-360.avif"
    }
  },
  {
    id: "conchal",
    title: "Conchal",
    filename: "Conchal.html",
    aliases: [],
    eqSortKey: "059",
    done: true,
    imgCount: 1,
    equation: "((x - a)^2 + y^2)(x + a)^2 = c^4, \\quad y = \\pm \\frac{\\sqrt{(c^2 + a^2 - x^2)(c^2 - a^2 + x^2)}}{x + a}",
    eqFind: ["y=", "y =", "x^2", "y^2", "sqrt"],
    imgSortKey: "059",
    images: {
      canonical: "Images/Conchal/Conchal01-360.avif"
    }
  },
  {
    id: "conchoid-of-a-circle",
    title: "Conchoid of a Circle",
    filename: "ConchCircle.html",
    aliases: ["Circular Conchoid"],
    eqSortKey: "060",
    done: true,
    imgCount: 8,
    equation: "r = a \\cdot \\left( \\cos(\\theta) \\pm \\sqrt{k^{2} - \\sin^{2}(\\theta)} \\right) \\pm l, \\quad r = a \\cdot \\left( \\cos(b\\theta) \\pm \\sqrt{k^{2} - \\sin^{2}(b\\theta)} \\right) \\pm l",
    eqFind: ["r=", "r =", "sin^", "theta^"],
    imgSortKey: "060",
    images: {
      canonical: "Images/ConchCircle/ConchCircle01-360.avif",
      variant1: "Images/ConchCircle/ConchCircle02-360.avif",
      variant2: "Images/ConchCircle/ConchCircle03-360.avif"
    }
  },
  {
    id: "conchoid-of-nicomedes",
    title: "Conchoid of Nicomedes",
    filename: "ConchNicomedes.html",
    aliases: ["Shell Curve"],
    eqSortKey: "061",
    done: true,
    imgCount: 14,
    equation: "r = \\frac{a}{\\cos(\\theta)} + b, \\quad r = \\frac{a}{\\cos^{b}(c \\theta)} + d",
    eqFind: ["r=", "r =", "cos^", "theta^"],
    imgSortKey: "061",
    images: {
      canonical: "Images/ConchNicomedes/ConchNicomedes01-360.avif",
      variant1: "Images/ConchNicomedes/ConchNicomedes08-360.avif",
      variant2: "Images/ConchNicomedes/ConchNicomedes13-360.avif"
    }
  },
  { 
    id: "constant-angular-acceleration-curve",
    title: "Constant Angular Acceleration Curve",
    filename: "AngularAccel.html",
    aliases: ["Gaichenkov Curve"],
    eqSortKey: "062",
    done: true,
    imgCount: 2,
    equation: "\\dfrac{d^{2}s}{d\\theta^{2}} = a, \\quad \\left(\\dfrac{dr}{d\\theta}\\right)^{2} + r^{2} = a^{2}\\theta^{2}",
    eqFind: ["ds/d theta", "d s", "d^2 s", "r'", "dr", "theta^2", "d theta", "r^2"],
    imgSortKey: "062",
    images: {
      canonical: "Images/AngularAccel/AngularAccel01-360.avif",
      variant1: "Images/AngularAccel/AngularAccel02-360.avif"
    }
  },
  {
    id: "cornoid",
    title: "Cornoid",
    filename: "Cornoid.html",
    aliases: [],
    eqSortKey: "063",
    done: true,
    imgCount: 1,
    equation: "(x^{2} + y^{2})^{3} + a^{2}(3x^{4} - 6x^{2}y^{2} - 5y^{4}) + 8a^{4}y^{2} - 4a^{6} = 0, \\quad x = a \\cos(t)\\cos(2t), y = a \\sin(t)(2 + \\cos(2t))",
    eqFind: ["x^2", "x^6", "y^2", "y^6", "x^4", "y^4", "x=", "x =", "y=", "y =", "cos(t)", "sin(t)"],
    imgSortKey: "063",
    images: {
      canonical: "Images/Cornoid/Cornoid01-360.avif"
    }
  },
  {
    id: "cosecant",
    title: "Cosecant",
    filename: "Cosecant.html",
    aliases: ["Csc Curve", "Reciprocal Sine Curve"],
    eqSortKey: "064",
    done: true,
    imgCount: 9,
    equation: "y = a \\cdot \\operatorname{csc}(b x) = \\frac{a}{\\sin(b x)}",
    eqFind: ["y=", "y =", "csc", "sin"],
    imgSortKey: "064",
    images: {
      canonical: "Images/Cosecant/Cosecant01-360.avif",
      variant1: "Images/Cosecant/Cosecant04-360.avif",
      variant2: "Images/Cosecant/Cosecant07-360.avif"
    }
  },
  {
    id: "cosh-spiral",
    title: "Cosh Spiral",
    filename: "CoshSpiral.html",
    aliases: ["Rotating Rod Spiral", "Cotes Spiral (cosh case)", "Hyperbolic Cosine Spiral"],
    eqSortKey: "065",
    done: true,
    imgCount: 3,
    equation: "r = a \\cdot \\cosh(b \\theta)",
    eqFind: ["r=", "r =", "cosh", "theta"],
    imgSortKey: "065",
    images: {
      canonical: "Images/CoshSpiral/CoshSpiral01-360.avif",
      variant1: "Images/CoshSpiral/CoshSpiral02-360.avif",
      variant2: "Images/CoshSpiral/CoshSpiral03-360.avif"
    }
  },
  {
    id: "cosine",
    title: "Cosine",
    filename: "Cosine.html",
    aliases: [],
    eqSortKey: "066",
    done: true,
    imgCount: 11,
    equation: "y = a \\cos (b x)",
    eqFind: ["y=", "y =", "cos"],
    imgSortKey: "066",
    images: {
      canonical: "Images/Cosine/Cosine01-360.avif",
      variant1: "Images/Cosine/Cosine07-360.avif",
      variant2: "Images/Cosine/Cosine10-360.avif"
    }
  },
  {
    id: "cotangent",
    title: "Cotangent",
    filename: "Cotangent.html",
    aliases: [],
    eqSortKey: "067",
    done: true,
    imgCount: 10,
    equation: "y = a \\cdot \\cot(b x - c)",
    eqFind: ["y=", "y =", "cot"],
    imgSortKey: "067",
    images: {
      canonical: "Images/Cotangent/Cotangent01-360.avif",
      variant1: "Images/Cotangent/Cotangent07-360.avif",
      variant2: "Images/Cotangent/Cotangent10-360.avif"
    }
  },
  {
    id: "cotes-spirals",
    title: "Cotes' Spirals",
    filename: "CotesSpiral.html",
    aliases: [],
    eqSortKey: "068",
    done: true,
    imgCount: 5,
    equation: "\\frac{1}{r} = a \\cdot \\cosh(k\\theta + \\epsilon), \\quad \\frac{1}{r} = a \\cdot \\cos(k\\theta + \\epsilon), \\quad \\frac{1}{r} = a \\cdot (k\\theta + \\epsilon), \\quad \\frac{1}{r} = a \\cdot e^{k\\theta + \\epsilon}, \\quad \\frac{1}{r} = a \\cdot \\sinh(k\\theta + \\epsilon)",
    eqFind: ["1/r=", "1/r =", "cosh", "cos", "e^", "theta", "sinh"],
    imgSortKey: "068",
    images: {
      canonical: "Images/CotesSpiral/CotesSpiral01-360.avif",
      variant1: "Images/CotesSpiral/CotesSpiral02-360.avif",
      variant2: "Images/CotesSpiral/CotesSpiral05-360.avif"
    }
  },
  {
    id: "cranioid",
    title: "Cranioid",
    filename: "Cranioid.html",
    aliases: ["Eyeball Curve", "Skull Curve"],
    eqSortKey: "069",
    done: true,
    imgCount: 4,
    equation: "r = a \\cdot \\sin(\\theta) + b \\sqrt{1 - p \\cdot \\cos^{2}(\\theta)} + c \\sqrt{1 - q \\cdot \\cos^{2}(\\theta)}, \\quad r = a \\cdot \\sin(\\theta) + b \\sqrt{1 - p \\cdot \\cos^{2}(\\theta)} + c \\sqrt{1 - q \\cdot \\cos^{d}(\\theta)}",
    eqFind: ["r=", "r =", "sin", "cos^2", "sqrt", "theta"],
    imgSortKey: "069",
    images: {
      canonical: "Images/Cranioid/Cranioid01-360.avif",
      variant1: "Images/Cranioid/Cranioid02-360.avif",
      variant2: "Images/Cranioid/Cranioid03-360.avif"
    }
  },
  {
    id: "cross-curve",
    title: "Cross Curve",
    filename: "CrossCurve.html",
    aliases: ["Cruciform Curve","Policeman on Point-Duty Curve", "Stauroid"],
    eqSortKey: "070",
    done: true,
    imgCount: 8,
    equation: "\\frac{a^{2}}{x^{2}} + \\frac{b^{2}}{y^{2}} = 1 \\quad \\text{or equivalently} x^{2} y^{2} - b^{2} x^{2} - a^{2} y^{2} = 0, \\quad r = \\sqrt{a^{2} \\sec^{2} \\theta + b^{2} \\csc^{2} \\theta}, \\quad x = a \\cdot \\sec \\theta, \\quad y = b \\cdot \\csc \\theta, \\quad x = a \\cdot \\sec(c \\theta + d), \\quad y = b \\cdot \\csc(e \\theta + f)",
    eqFind: ["r=", "r =", "sec^2", "csc^2", "sqrt", "theta"],
    imgSortKey: "070",
    images: {
      canonical: "Images/CrossCurve/CrossCurve01-360.avif",
      variant1: "Images/CrossCurve/CrossCurve02-360.avif",
      variant2: "Images/CrossCurve/CrossCurve07-360.avif"
    }
  },
  {
    id: "cubic-egg-curve",
    title: "Cubic Egg Curve",
    filename: "CubicEgg.html",
    aliases: ["Hügelschäffer Egg", "Newton's Egg", "Rationalized Egg"],
    eqSortKey: "071",
    done: true,
    imgCount: 4,
    equation: "y = \\frac{b^{2} (a^{2} - (x - d)^{2}) }{a^{2} - d^{2} + 2 d x}, \\quad y^{2} = b (x^{2} - 1)(x - a), \\quad y^{2} = b \\frac{(1 - x^{2}) }{1 + a x}",
    eqFind: ["y=", "y =", "y^2=", "y^2 =", "x^2"],
    imgSortKey: "071",
    images: {
      canonical: "Images/CubicEgg/CubicEgg01-360.avif",
      variant1: "Images/CubicEgg/CubicEgg02-360.avif",
      variant2: "Images/CubicEgg/CubicEgg04-360.avif"
    }
  },
  {
    id: "cubical-parabola",
    title: "Cubical Parabola",
    filename: "CubicParabola.html",
    aliases: ["Nördling Parabola"],
    eqSortKey: "072",
    done: true,
    imgCount: 2,
    equation: "y = \\dfrac{x^{3} + b x}{a^{2}} \\quad y = a (x - b)^{3}",
    eqFind: ["y=", "y =", "x^3="],
    imgSortKey: "072",
    images: {
      canonical: "Images/CubicParabola/CubicParabola01-360.avif",
      variant1: "Images/CubicParabola/CubicParabola02-360.avif"
    }
  },
  {
    id: "curved-star-curve",
    title: "Curved Star Curve",
    filename: "CurvedStar.html",
    aliases: ["Vesica Piscis", "Reuleaux Triangle", "Reuleaux Polygon", "Triquetra"],
    eqSortKey: "073",
    done: true,
    imgCount: 9,
    equation: "\\text{Circle centers: } C_k = \\left( a \\cos\\left(\\frac{2\\pi k}{n}\\right), a \\sin\\left(\\frac{2\\pi k}{n}\\right) \\right), \\quad k = 0,1,\\dots,n-1, \\quad \\theta = \\operatorname{atan2}(P_y - C_{0y}, P_x - C_{0x})",
    eqFind: ["cos", "sin", "theta", "atan2"],
    imgSortKey: "073",
    images: {
      canonical: "Images/CurvedStar/CurvedStar01-360.avif",
      variant1: "Images/CurvedStar/CurvedStar02-360.avif",
      variant2: "Images/CurvedStar/CurvedStar09-360.avif"
    }
  },
  {
    id: "cyclic-harmonic-curve",
    title: "Cyclic Harmonic Curve",
    filename: "CyclicHarmonic.html",
    aliases: ["Moritz Curve", "Trojan Rose", "Conchoid of a Rose", "Circular Sinusoid"],
    eqSortKey: "074",
    done: true,
    imgCount: 10,
    equation: "r = a + b \\cdot \\cos(n \\theta)",
    eqFind: ["cos", "r=", "r =","theta"],
    imgSortKey: "074",
    images: {
      canonical: "Images/CyclicHarmonic/CyclicHarmonic01-360.avif",
      variant1: "Images/CyclicHarmonic/CyclicHarmonic06-360.avif",
      variant2: "Images/CyclicHarmonic/CyclicHarmonic10-360.avif"
    }
  },
  {
    id: "cycloid",
    title: "Cycloid",
    filename: "Cycloid.html",
    aliases: ["Common Trochoid", "Helen of Geometers", "Tautochrone Curve", "Brachistochrone Curve"],
    eqSortKey: "075",
    done: true,
    imgCount: 11,
    equation: "x = r(t - k \\sin t), y = r(1 - k \\cos t), \\quad x = a(t - b \\sin(c t)), y = d(1 - e \\cos(f t))",
    eqFind: ["x=", "x =", "cos t", "sin t", "t","y=", "y ="],
    imgSortKey: "075",
    images: {
      canonical: "Images/Cycloid/Cycloid01-360.avif",
      variant1: "Images/Cycloid/Cycloid08-360.avif",
      variant2: "Images/Cycloid/Cycloid11-360.avif"
    }
  },
  {
    id: "dahlia",
    title: "Dahlia",
    filename: "Dahlia.html",
    aliases: ["Flower Curve", "Sunflower Curve"],
    eqSortKey: "076",
    done: true,
    imgCount: 2,
    equation: "x = \\left(R + s\\left[r_e^{(w)}(\\theta) - R\\right]\\right) \\dfrac{x_e^{(w)}(\\theta)}{r_e^{(w)}(\\theta)}, \\quad y = \\left(R + s\\left[r_e^{(w)}(\\theta) - R\\right]\\right) \\dfrac{y_e^{(w)}(\\theta)}{r_e^{(w)}(\\theta)}",
    eqFind: ["x=", "x =", "theta", "y=", "y ="],
    imgSortKey: "076",
    images: {
      canonical: "Images/Dahlia/Dahlia01-360.avif",
      variant1: "Images/Dahlia/Dahlia02-360.avif"
    }
  },
  {
    id: "de-sluze-curve",
    title: "De Sluze Curve",
    filename: "DeSluze.html",
    aliases: ["Conchoid of de Sluze", "Sluze Cubic"],
    eqSortKey: "077",
    done: true,
    imgCount: 10,
    equation: "(x - 1) (x^2 + y^2) = a x^2, \\quad r = \\dfrac{1}{\\cos\\theta} + a \\cos\\theta, \\quad r = \\dfrac{1}{\\cos^{b}\\theta} + a \\cos^{c}\\theta",
    eqFind: ["r=", "r =", "x^2", "y^2", "cos^"],
    imgSortKey: "077",
    images: {
      canonical: "Images/DeSluze/DeSluze01-360.avif",
      variant1: "Images/DeSluze/DeSluze05-360.avif",
      variant2: "Images/DeSluze/DeSluze07-360.avif"
    }
  },
  {
    id: "delanges-sectrix",
    title: "Delanges Sectrix",
    filename: "Delanges.html",
    aliases: ["Sectrix of Delanges", "Trisectrix of Delanges"],
    eqSortKey: "078",
    done: true,
    imgCount: 8,
    equation: "(x^{2} + y^{2} - 2a^{2})^{2} = x^{2}(x^{2} + y^{2}), \\quad r = \\dfrac{a}{\\cos(\\theta/2)} \\quad \\text{or} \\quad r = a \\sec(\\theta/2) \\quad r = \\dfrac{a}{\\cos(\\theta/n)} \\quad \\text{or} \\quad r = a \\sec(\\theta/n)",
    eqFind: ["r=", "r =", "x^2", "y^2", "cos"],
    imgSortKey: "078",
    images: {
      canonical: "Images/Delanges/Delanges01-360.avif",
      variant1: "Images/Delanges/Delanges04-360.avif",
      variant2: "Images/Delanges/Delanges07-360.avif"      
    }
  },
  {
    id: "delaunay-roulette",
    title: "Delaunay Roulette",
    filename: "Delaunay.html",
    aliases: ["Undulary", "Nodary"],
    eqSortKey: "079",
    done: true,
    imgCount: 19,
    equation: "\\left( \\dfrac{dy}{dx} \\right)^{2} = \\dfrac{(y+a+c)(y+a-c)(y-a+c)(-y+a+c)}{(y^{2}-b^{2})^{2}}, \\quad c = \\sqrt{a^{2}-b^{2}}, \\quad c = \\sqrt{a^{2}+b^{2}}",
    eqFind: ["dy/dx", "y^2", "sqrt"],
    imgSortKey: "079",
    images: {
      canonical: "Images/Delaunay/Delaunay01-360.avif",
      variant1: "Images/Delaunay/Delaunay04-360.avif",
      variant2: "Images/Delaunay/Delaunay15-360.avif"      
    }
  },
  {
    id: "deltoid",
    title: "Deltoid",
    filename: "Deltoid.html",
    aliases: ["Tricuspoid", "Steiner Hypocycloid"],
    eqSortKey: "080",
    done: true,
    imgCount: 1,
    equation: "(x^{2} + y^{2})^{2} + 18a^{2}(x^{2} + y^{2}) - 27a^{4} = 8a(x^{3} - 3xy^{2}), \\quad r^{4} + 18a^{2}r^{2} - 27a^{4} = 8ar^{3}\\cos(3\\theta)  \\quad x = a(2\\cos(t) + \\cos(2t)), y = a(2\\sin(t) - \\sin(2t))",
    eqFind: ["x^2", "y^2", "r^4", "cos", "sin", "x=", "x =", "y=", "y =", "theta"],
    imgSortKey: "080",
    images: {
      canonical: "Images/Deltoid/Deltoid01-360.avif"
    }
  },
  {
    id: "devils-curve",
    title: "Devil's Curve",
    filename: "Devils.html",
    aliases: ["Electric Motor Curve", "Devil on Two Sticks", "Cramer's Curve"],
    eqSortKey: "081",
    done: true,
    imgCount: 9,
    equation: "y^{4}-a^{2}y^{2}=x^{4}-b^{2}x^{2}, \\quad r^{2}(\\sin^{2}\\theta-\\cos^{2}\\theta)=a^{2}\\sin^{2}\\theta-b^{2}\\cos^{2}\\theta, \\quad x=\\cos\\theta\\sqrt{\\dfrac{a^{2}\\sin^{2}\\theta-b^{2}\\cos^{2}\\theta}{\\sin^{2}\\theta-\\cos^{2}\\theta}}, y=\\sin\\theta\\sqrt{\\dfrac{a^{2}\\sin^{2}\\theta-b^{2}\\cos^{2}\\theta}{\\sin^{2}\\theta-\\cos^{2}\\theta}}",
    eqFind: ["y^4", "y^2", "sqrt", "x^4", "x^2", "theta", "cos^2", "sin^2"],
    imgSortKey: "081",
    images: {
      canonical: "Images/Devils/Devils01-360.avif",
      variant1: "Images/Devils/Devils03-360.avif",
      variant2: "Images/Devils/Devils08-360.avif"      
    }
  },
  {
    id: "dipole-curve",
    title: "Dipole Curve",
    filename: "Dipole.html",
    aliases: ["Playfair Curve", "Curve of Equal Attraction"],
    eqSortKey: "082",
    done: true,
    imgCount: 3,
    equation: "r^{2} = a^{2} \\cos(\\theta), \\quad (x^{2} + y^{2})^{3} = a^{4} x^{2}",
    eqFind: ["r^2=", "r^2 =", "x^2", "y^2", "theta", "cos"],
    imgSortKey: "082",
    images: {
      canonical: "Images/Dipole/Dipole01-360.avif",
      variant1: "Images/Dipole/Dipole02-360.avif",
      variant2: "Images/Dipole/Dipole03-360.avif"      
    }
  },
  {
    id: "diverging-parabola-of-newton",
    title: "Diverging Parabola of Newton",
    filename: "DivergParab.html",
    aliases: ["Newton's Diverging Parabola"],
    eqSortKey: "083",
    done: true,
    imgCount: 17,
    equation: "y^{2} = a \\cdot x^{3} + b \\cdot x^{2} + c \\cdot x + d",
    eqFind: ["y^2=", "y^2 =", "x^3", "x^2"],
    imgSortKey: "083",
    images: {
      canonical: "Images/DivergParab/DivergParab01-360.avif",
      variant1: "Images/DivergParab/DivergParab02-360.avif",
      variant2: "Images/DivergParab/DivergParab03-360.avif"      
    }
  },
  {
    id: "doppler-spiral",
    title: "Doppler Spiral",
    filename: "DopplerSpiral.html",
    aliases: [],
    eqSortKey: "084",
    done: true,
    imgCount: 3,
    equation: "x(t) = a \\cdot t \\cdot (\\cos(t) + k), y(t) = a \\cdot t \\cdot \\sin(t)",
    eqFind: ["x=", "x =", "y=", "y =", "cos(t)", "sin(t)"],
    imgSortKey: "084",
    images: {
      canonical: "Images/DopplerSpiral/DopplerSpiral01-360.avif",
      variant1: "Images/DopplerSpiral/DopplerSpiral02-360.avif",
      variant2: "Images/DopplerSpiral/DopplerSpiral03-360.avif"      
    }
  },
  {
    id: "double-heart-curve",
    title: "Double Heart Curve",
    filename: "DoubleHeart.html",
    aliases: ["Rabbit Ear Curve"],
    eqSortKey: "085",
    done: true,
    imgCount: 14,
    equation: "x = \\frac{1}{2}\\bigl(\\pm\\sqrt{2 a y - y^{2}} \\pm \\sqrt{2 b y - y^{2}}\\bigr), \\quad x = \\frac{1}{2}\\bigl(\\pm\\sqrt[c]{2 a y - d\\cdot y^{2}} \\pm \\sqrt[e]{2 b y - f\\cdot y^{2}}\\bigr), \\quad x = \\sin(t)\\ln(\\sin^{2}(t)), y = -\\cos(4 t)",
    eqFind: ["x=", "x =", "y=", "y =", "sqrt", "y^2 =", "sin^", "cos", "ln"],
    imgSortKey: "085",
    images: {
      canonical: "Images/DoubleHeart/DoubleHeart01-360.avif",
      variant1: "Images/DoubleHeart/DoubleHeart03-360.avif",
      variant2: "Images/DoubleHeart/DoubleHeart14-360.avif"      
    }
  },
  {
    id: "double-u-curve",
    title: "Double U Curve",
    filename: "DoubleU.html",
    aliases: [],
    eqSortKey: "086",
    done: true,
    imgCount: 1,
    equation: "x = a \\cdot \\sin(t), y = a \\cdot \\sec(t), \\quad y = \\dfrac{a^{2}}{\\sqrt{a^{2} - x^{2}}}",
    eqFind: ["x^2", "sqrt", "sec", "sin", "x=", "x =", "y=", "y ="],
    imgSortKey: "086",
    images: {
      canonical: "Images/DoubleU/DoubleU01-360.avif"
    }
  },
  {
    id: "drawbridge-curve",
    title: "Drawbridge Curve",
    filename: "Drawbridge.html",
    aliases: ["Bélidor curve", "Courbe du pont-levis"],
    eqSortKey: "087",
    done: true,
    imgCount: 6,
    equation: "x = \\sqrt{\\bigl(l - \\sqrt{b^{2} + h^{2} - 2bh\\cos\\alpha}\\bigr)^{2} - \\bigl(d + \\tfrac{L\\cos\\alpha}{2q}\\bigr)^{2}},\\quad y = h - d - \\tfrac{L\\cos\\alpha}{2q}",
    eqFind: ["x=", "x =", "y=", "y =", "sqrt", "alpha", "cos"],
    imgSortKey: "087",
    images: {
      canonical: "Images/Drawbridge/Drawbridge01-360.avif",
      variant1: "Images/Drawbridge/Drawbridge04-360.avif",
      variant2: "Images/Drawbridge/Drawbridge06-360.avif"      
    }
  },
  {
    id: "dumbbell-curve",
    title: "Dumbbell Curve",
    filename: "Dumbbell.html",
    aliases: ["Double Teardrop", "Flattened Bowtie", "Double Egg"],
    eqSortKey: "088",
    done: true,
    imgCount: 12,
    equation: "a^{4} y^{2} = x^{4}(a^{2} - x^{2}) \\quad x = a \\sin\\theta, y = a \\sin^{2}\\theta \\cdot \\cos\\theta \\quad x = a \\sin^{b}\\theta, y = a \\sin^{c}\\theta \\cdot \\cos^{d}\\theta",
    eqFind: ["x=", "x =", "y=", "y =", "theta", "x^4", "x^2", "sin^2", "cos^"],
    imgSortKey: "088",
    images: {
      canonical: "Images/Dumbbell/Dumbbell01-360.avif",
      variant1: "Images/Dumbbell/Dumbbell02-360.avif",
      variant2: "Images/Dumbbell/Dumbbell11-360.avif"      
    }
  },
  {
    id: "duplicatrix-cubic",
    title: "Duplicatrix Cubic",
    filename: "Duplicatrix.html",
    aliases: [],
    eqSortKey: "089",
    done: true,
    imgCount: 2,
    equation: "x^{3} = a(x^{2} + y^{2}), \\quad r = \\dfrac{a}{\\cos^{3}(\\theta)}",
    eqFind: ["r=", "r =", "x^3", "x^2", "y^2", "theta", "cos^3"],
    imgSortKey: "089",
    images: {
      canonical: "Images/Duplicatrix/Duplicatrix01-360.avif",
      variant1: "Images/Duplicatrix/Duplicatrix02-360.avif"
    }
  },
  {
    id: "duporcq-curve",
    title: "Duporcq Curve",
    filename: "Duporcq.html",
    aliases: ["Orthogonal pursuit curve", "Crab curve"],
    eqSortKey: "090",
    done: true,
    imgCount: 9,
    equation: "x = \\dfrac{a}{\\sqrt{1-e^{2}}}(e u - \\sin u), y = a(-e + \\cos u), \\quad x = a(u^{3} - 3u), y = 3a(1 - u^{2}), \\quad x = \\dfrac{a}{\\sqrt{e^{2}-1}}(\\sinh u - e u), y = a(\\cosh u - e), \\quad x = \\dfrac{a}{\\sqrt{e^{2}-1}}(\\sinh u + e u), y = a(\\cosh u + e)",
    eqFind: ["x=", "x =", "y=", "y =", "sqrt", "cosh", "sinh", "sin", "cos"],
    imgSortKey: "090",
    images: {
      canonical: "Images/Duporcq/Duporcq03-360.avif",
      variant1: "Images/Duporcq/Duporcq07-360.avif",
      variant2: "Images/Duporcq/Duporcq08-360.avif"      
    }
  },
  {
    id: "durers-shell-curve",
    title: "Durer's Shell Curve",
    filename: "DurerShell.html",
    aliases: ["Conchoid of Dürer"],
    eqSortKey: "091",
    done: true,
    imgCount: 10,
    equation: "2y^{2}(x^{2}+y^{2})-2a y^{2}(x+y)+(a^{2}-3b^{2})y^{2}-b^{2}x^{2}+2ab^{2}(x+y)+b^{2}(b^{2}-a^{2})=0, \\quad x = a \\dfrac{\\cos\\theta}{\\cos\\theta - \\sin\\theta} + b \\cos\\theta, y = b \\sin\\theta",
    eqFind: ["x=", "x =", "y=", "y =", "x^2", "y^2", "theta", "sin", "cos"],
    imgSortKey: "091",
    images: {
      canonical: "Images/DurerShell/DurerShell03-360.avif",
      variant1: "Images/DurerShell/DurerShell07-360.avif",
      variant2: "Images/DurerShell/DurerShell08-360.avif"      
    }
  },
  {
    id: "egg-curve",
    title: "Egg Curve",
    filename: "EggCurve.html",
    aliases: ["Ovoid", "Oval", "Double Egg", "Hortsch egg", "Granvill egg", "Rosillo Egg", "Sillke Egg", "Bastelein Egg", "Jacobs Egg", "Szego Egg", "Descartes Egg", "Maclaurin Egg", "Bernoulli Egg", "deSluze Egg", "Blaschke Egg", "Skovgaard Egg", "Babois Egg", "Bouma Egg", "Neyt Egg", "Yamamoto Egg"],
    eqSortKey: "092",
    done: true,
    imgCount: 24,
    equation: "r = a\\cos^{2}\\theta, \\quad r = a\\,e^{\\cos 2\\theta}\\cos^{2}\\theta, \\quad x = b + r\\cos t, y = \\frac{a r\\sin t}{b + r\\cos t}, \\quad y = \\pm(b-x)\\sqrt{\\frac{a^{2}-x^{2}}{c-x}}, \\quad y = \\pm\\frac{2}{3}\\sqrt{\\frac{1-x^{2}}{1+3ax}}, \\quad y = \\pm\\frac{2}{3}\\sqrt{(1-x^{2})(1-3ax)}, \\quad y = \\pm\\frac{2}{3}\\sqrt{(1-x^{2})e^{-3ax}}, \\quad y = \\pm\\frac{2}{3}\\sqrt{(1-x^{2})\\frac{1-3ax}{1+3ax}}, \\\\ y = \\pm\\sqrt{\\frac{1-x^{2}}{a\\,b^{x}}}, \\quad y = \\pm\\sqrt{e^{2x-2}-x^{2}-0.02}, \\quad x^{3}+y^{3}+0.06=3xy, \\quad y = \\pm\\sqrt{\\frac{x^{2}(3-x)-0.01}{1+x}}, \\quad y = \\pm\\sqrt{\\frac{\\sqrt{8x^{2}+0.96}-(2x^{2}+1)}{2}}, \\quad y = \\pm\\sqrt{\\frac{-x^{3}+1.5x^{2}-0.04}{x+0.5}}, \\quad y = \\pm\\sqrt{\\bigl|\\sin x + 0.1\\sin 2x\\bigr|}, \\\\ y = \\pm\\sqrt{x\\bigl(\\sqrt{a}-\\sqrt{x}\\bigr)}, \\quad y = \\pm\\sqrt{\\dfrac{6.4 - e(x-3)^{2}}{2x}}, \\quad y = \\pm\\sqrt{3\\sqrt{2x+1}-2x-3}, \\quad y = \\pm\\sqrt{\\dfrac{1}{\\varphi}\\bigl(0.1 - \\bigl(\\sqrt{x} - \\dfrac{1}{\\varphi}\\bigr)^{2}\\bigr)},\\quad \\varphi = \\dfrac{1+\\sqrt{5}}{2}, \\quad y = \\pm\\sqrt{2^{x}-x^{2}}, \\quad y = \\pm\\sqrt{x - \\dfrac{\\cosh x}{e}}, \\\\ y = \\pm\\dfrac{1}{2.8}\\sqrt{-\\ln\\bigl(1 + e^{-x} - e^{-4x^{2}}\\bigr)}",
    eqFind: ["x=", "x =", "y=", "y =", "x^2", "y^2", "theta", "sin", "cos^2", "theta", "e^", "sqrt", "x^3", "y^3", "phi", "cosh", "ln"],
    imgSortKey: "092",
    images: {
      canonical: "Images/EggCurve/EggCurve01-360.avif",
      variant1: "Images/EggCurve/EggCurve03-360.avif",
      variant2: "Images/EggCurve/EggCurve22-360.avif"      
    }
  },
  {
    id: "ehrhart-egg",
    title: "Ehrhart Egg",
    filename: "Ehrhart.html",
    aliases: ["Triellipse Egg"],
    eqSortKey: "093",
    done: true,
    imgCount: 3,
    equation: "r + \\sqrt{r^{2}-2\\cdot b\\cdot r\\cdot\\sin(\\theta)+b^{2}} + \\sqrt{r^{2}-2\\cdot c\\cdot r\\cdot\\sin(\\theta)+c^{2}} = k",
    eqFind: ["r^2", "theta", "sin", "sqrt"],
    imgSortKey: "093",
    images: {
      canonical: "Images/Ehrhart/Ehrhart01-360.avif",
      variant1: "Images/Ehrhart/Ehrhart02-360.avif",
      variant2: "Images/Ehrhart/Ehrhart03-360.avif"      
    }
  },
  {
    id: "eight-curve",
    title: "Eight Curve",
    filename: "EightCurve.html",
    aliases: ["Lemniscate of Gerono", "Lemniscate of Huygens", "Figure-eight Curve"],
    eqSortKey: "094",
    done: true,
    imgCount: 1,
    equation: "x^{4} = a^{2}(x^{2} - y^{2}), \\quad x = a \\cdot \\sin(\\theta), y = a \\cdot \\sin(\\theta) \\cdot \\cos(\\theta), \\quad r^{2} = a^{2} \\cdot \\sec^{4}(\\theta)\\cos(2\\theta), \\quad x = a \\cdot \\sin^{b}(\\theta), y = a \\cdot \\sin^{c}(\\theta)\\cos^{d}(\\theta)",
    eqFind: ["r^2=", "theta", "sin^", "cos^", "seec^4", "x^4", "x^2", "y^2"],
    imgSortKey: "094",
    images: {
      canonical: "Images/EightCurve/EightCurve01-360.avif"
    }
  },
  {
    id: "elastic-catenary",
    title: "Elastic Catenary",
    filename: "ElasticCat.html",
    aliases: ["Chaînette élastique", "Elastic Cable"],
    eqSortKey: "095",
    done: true,
    imgCount: 3,
    equation: "\\dfrac{dV}{ds_{0}} = w_{0},\\quad \\dfrac{dx}{ds_{0}} = \\dfrac{H}{\\sqrt{H^{2}+V^{2}}} + \\dfrac{H}{EA},\\quad \\dfrac{dy}{ds_{0}} = \\dfrac{V}{\\sqrt{H^{2}+V^{2}}} + \\dfrac{V}{EA}",
    eqFind: ["ds", "dx/ds", "dy/ds", "sqrt"],
    imgSortKey: "095",
    images: {
      canonical: "Images/ElasticCat/ElasticCat01-360.avif",
      variant1: "Images/ElasticCat/ElasticCat02-360.avif",
      variant2: "Images/ElasticCat/ElasticCat03-360.avif"      
    }
  },
  {
    id: "elastic-curve",
    title: "Elastic Curve",
    filename: "ElasticCurve.html",
    aliases: ["Ribbon Candy", "Lintearia", "Radioid", "Convict Curve (k=-1)"],
    eqSortKey: "096",
    done: true,
    imgCount: 3,
    equation: "x = \\dfrac{a}{2} \\int_{0}^{t} \\dfrac{\\cos(u)}{\\sqrt{\\cos(u)-k}}\\, du,\\quad y = -a\\sqrt{\\cos(t)-k},\\quad -\\arccos(k)\\le t\\le\\arccos(k)",
    eqFind: ["x=", "x =", "y=", "y =", "sqrt", "cos", "arccos", "int"],
    imgSortKey: "096",
    images: {
      canonical: "Images/ElasticCurve/ElasticCurve03-360.avif",
      variant1: "Images/ElasticCurve/ElasticCurve07-360.avif",
      variant2: "Images/ElasticCurve/ElasticCurve10-360.avif"      
    }
  },
  {
    id: "ellipse-evolute",
    title: "Ellipse Evolute",
    filename: "EllipseEvolute.html",
    aliases: ["Evolute of the Ellipse"],
    eqSortKey: "097",
    done: true,
    imgCount: 3,
    equation: "x = \\dfrac{a^{2}-b^{2}}{a}\\cos^{3}(t),\\quad y = \\dfrac{b^{2}-a^{2}}{b}\\sin^{3}(t)",
    eqFind: ["x=", "x =", "y=", "y =", "sin^3", "cos^3"],
    imgSortKey: "097",
    images: {
      canonical: "Images/EllipseEvolute/EllipseEvolute01-360.avif"
    }
  },
  {
    id: "ellipse-glissette",
    title: "Ellipse Glissette",
    filename: "EllipseGlissette.html",
    aliases: ["Glissette of the Ellipse"],
    eqSortKey: "098",
    done: true,
    imgCount: 2,
    equation: "x=\\dfrac{\\cos(t)\\bigl(a^{2}+(b^{2}-a^{2})\\sin(t)\\bigr)}{\\sqrt{b^{2}\\sin^{2}(t)+a^{2}\\cos^{2}(t)}}, y=\\dfrac{ab\\bigl(1-\\sin(t)\\bigr)}{\sqrt{b^{2}\\sin^{2}(t)+a^{2}\\cos^{2}(t)}}, \\quad x=\\dfrac{-\\sin(t)\\bigl(b^{2}(1-\\cos(t))+a^{2}\\cos(t)\\bigr)}{\\sqrt{b^{2}\\sin^{2}(t)+a^{2}\\cos^{2}(t)}}, y=\\dfrac{ab\\bigl(1-\\cos(t)\\bigr)}{\\sqrt{b^{2}\\sin^{2}(t)+a^{2}\\cos^{2}(t)}}",
    eqFind: ["x=", "x =", "y=", "y =", "sin^2", "cos^2", "sqrt"],
    imgSortKey: "098",
    images: {
      canonical: "Images/EllipseGlissette/EllipseGlissette01-360.avif",
      variant1: "Images/EllipseGlissette/EllipseGlissette02-360.avif"
    }
  },
  {
    id: "ellipse-negative-pedal-curve",
    title: "Ellipse Negative Pedal Curve",
    filename: "ENPedal.html",
    aliases: ["Fish Curve", "Ellipse Negative Pedal Egg", "Ellipse Negative Pedal Arrow", "Talbot's Curve", "Burleigh's Oval"],
    eqSortKey: "099",
    done: true,
    imgCount: 19,
    equation: "x=\\dfrac{\\bigl((a^{2}-b^{2})\\sin^{2}t+a^{2}+d^{2}\\bigr)\\cos t-2ad}{a-d\\cos t},\\quad y=\\dfrac{\\bigl((b^{2}-a^{2})\\cos t\\,(a\\cos t-2d)+a(b^{2}-d^{2})\\bigr)\\sin t}{b(a-d\\cos t)}",
    eqFind: ["x=", "x =", "y=", "y =", "sin^2", "cos"],
    imgSortKey: "099",
    images: {
      canonical: "Images/ENPedal/ENPedal13-360.avif",
      variant1: "Images/ENPedal/ENPedal17-360.avif",
      variant2: "Images/ENPedal/ENPedal18-360.avif"      
    }
  },
  {
    id: "epicycloid",
    title: "Epicycloid",
    filename: "Epicycloid.html",
    aliases: ["Hypercycloid", "Roulette"],
    eqSortKey: "100",
    done: true,
    imgCount: 9,
    equation: "x=(R+r)\\cos\\theta - r\\cdot\\cos\\left(\\dfrac{R+r}{r}\\theta\\right), y=(R+r)\\sin\\theta - r\\cdot\\sin\\left(\\dfrac{R+r}{r}\\theta\\right), \\quad x=a\\cos\\theta - b\\cos(c\\theta), y=d\\sin\\theta - e\\sin(f\\theta)",
    eqFind: ["x=", "x =", "y=", "y =", "sin", "cos", "theta"],
    imgSortKey: "100",
    images: {
      canonical: "Images/Epicycloid/Epicycloid05-360.avif",
      variant1: "Images/Epicycloid/Epicycloid06-360.avif",
      variant2: "Images/Epicycloid/Epicycloid09-360.avif"      
    }
  },
  {
    id: "epispiral",
    title: "Epispiral",
    filename: "Epispiral.html",
    aliases: ["Cotes' Spiral"],
    eqSortKey: "101",
    done: true,
    imgCount: 12,
    equation: "r = a \\cdot \\sec(n\\theta)",
    eqFind: ["r=", "r =", "sec", "theta"],
    imgSortKey: "101",
    images: {
      canonical: "Images/Epispiral/Epispiral03-360.avif",
      variant1: "Images/Epispiral/Epispiral08-360.avif",
      variant2: "Images/Epispiral/Epispiral12-360.avif"      
    }
  },
  {
    id: "epitrochoid",
    title: "Epitrochoid",
    filename: "Epitrochoid.html",
    aliases: ["Peritrochoid"],
    eqSortKey: "102",
    done: true,
    imgCount: 12,
    equation: "x=(a+b)\\cos\\theta - c\\cdot b\\cdot\\cos\\left(\\dfrac{a+b}{b}\\theta\\right),\\quad y=(a+b)\\sin\\theta - c\\cdot b\\cdot\\sin\\left(\\dfrac{a+b}{b}\\theta\\right)",
    eqFind: ["x=", "x =", "y=", "y =", "cos", "sin", "theta"],
    imgSortKey: "102",
    images: {
      canonical: "Images/Epitrochoid/Epitrochoid02-360.avif",
      variant1: "Images/Epitrochoid/Epitrochoid05-360.avif",
      variant2: "Images/Epitrochoid/Epitrochoid09-360.avif"      
    }
  },
  {
    id: "epitrochoid-evolute",
    title: "Epitrochoid Evolute",
    filename: "EpitrochoidEvolute.html",
    aliases: ["Evolute of the Epitrochoid"],
    eqSortKey: "103",
    done: true,
    imgCount: 12,
    equation: "x=\\dfrac{a\\cdot c (a+b)\\bigl(c-b\\cos(\\frac{a\\theta}{b})\\bigr)\\cos\\theta+b\\bigl(b-c\\cos(\\frac{a\\theta}{b})\\bigr)\\cos\\bigl(\\frac{(a+b)\\theta}{b}\\bigr)}{b^{3}+(a+b)c^{2}-b(a+2b)c\\cos(\\frac{a\\theta}{b})} \\quad y=\\dfrac{a\\cdot c (a+b)\\bigl(c-b\\cos(\\frac{a\\theta}{b})\\bigr)\\sin\\theta+b\\bigl(b-c\\cos(\\frac{a\\theta}{b})\\bigr)\\sin\\bigl(\\frac{(a+b)\\theta}{b}\\bigr)}{b^{3}+(a+b)c^{2}-b(a+2b)c\\cos(\\frac{a\\theta}{b})}",
    eqFind: ["x=", "x =", "y=", "y =", "cos", "sin", "theta"],
    imgSortKey: "103",
    images: {
      canonical: "Images/EpitrochoidEvolute/EpitrochoidEvolute01-360.avif",
      variant1: "Images/EpitrochoidEvolute/EpitrochoidEvolute05-360.avif",
      variant2: "Images/EpitrochoidEvolute/EpitrochoidEvolute12-360.avif"      
    }
  },
  {
    id: "erythrocyte-curve",
    title: "Erythrocyte Curve",
    filename: "Erythrocyte.html",
    aliases: ["RBC Curve", "Red Blood Cell Curve"],
    eqSortKey: "104",
    done: true,
    imgCount: 2,
    equation: "x = a \\cos(t),\\quad y = \\sin(t) \\bigl( b + \\dfrac{\\frac12 \\cdot (h / \\sqrt{1 - (c/a)^{2}}) \\cdot (4 - 5(c/a)^{2}) - 2b(1 - (c/a)^{2})}{(c/a)^{2} (1 - (c/a)^{2})} \\cos^{2}(t) + \\dfrac{(h / \\sqrt{1 - (c/a)^{2}}) \\cdot (\\frac32 (c/a)^{2} - 1) + b(1 - (c/a)^{2})}{(c/a)^{4} (1 - (c/a)^{2})} \\cos^{4}(t) \\bigr)",
    eqFind: ["x=", "x =", "y=", "y =", "cos^4", "cos^2", "sin", "sqrt"],
    imgSortKey: "104",
    images: {
      canonical: "Images/Erythrocyte/Erythrocyte01-360.avif",
      variant1: "Images/Erythrocyte/Erythrocyte02-360.avif"
    }
  },
  {
    id: "exponential-curve",
    title: "Exponential Curve",
    filename: "Exponential.html",
    aliases: ["Compound Interest Curve", "Gaussian Curve","Population Growth", "Super-Gaussian Curve", "Kohlrausch Function"],
    eqSortKey: "105",
    done: true,
    imgCount: 30,
    equation: "y = a \\cdot e^{b x^{c}}",
    eqFind: ["y=", "y =", "e^", "x^"],
    imgSortKey: "105",
    images: {
      canonical: "Images/Exponential/Exponential01-360.avif",
      variant1: "Images/Exponential/Exponential20-360.avif",
      variant2: "Images/Exponential/Exponential30-360.avif"      
    }
  },
  {
    id: "exponential-decay",
    title: "Exponential Decay",
    filename: "ExponentialDecay.html",
    aliases: ["Decay Curve", "Radioactive Decay", "First-order Kinetics"],
    eqSortKey: "106",
    done: true,
    imgCount: 3,
    equation: "N(t) = N_{0} e^{-\\lambda t}",
    eqFind: ["y=", "y =", "e^", "x^", "lambda"],
    imgSortKey: "106",
    images: {
      canonical: "Images/Exponential/Exponential01-360.avif",
      variant1: "Images/Exponential/Exponential02-360.avif",
      variant2: "Images/Exponential/Exponential03-360.avif"      
    }
  },
  {
    id: "falling-sand-curve",
    title: "Falling Sand Curve",
    filename: "FallingSand.html",
    aliases: [],
    eqSortKey: "107",
    done: true,
    imgCount: 3,
    equation: "y^{2} = \\dfrac{1}{1 - x^{2}}, \\quad y^{2} = \\dfrac{a}{b - c\\, x^{d}}",
    eqFind: ["y=", "y =", "y^2", "x^2"],
    imgSortKey: "107",
    images: {
      canonical: "Images/FallingSand/FallingSand01-360.avif",
      variant1: "Images/FallingSand/FallingSand02-360.avif",
      variant2: "Images/FallingSand/FallingSand03-360.avif"      
    }
  },
  {
    id: "fermat-spiral",
    title: "Fermat Spiral",
    filename: "Fermat.html",
    aliases: ["Parabolic Spiral"],
    eqSortKey: "108",
    done: true,
    imgCount: 2,
    equation: "r = a \\sqrt{\\theta}",
    eqFind: ["r=", "r =", "sqrt", "theta"],
    imgSortKey: "108",
    images: {
      canonical: "Images/Fermat/Fermat01-360.avif",
      variant1: "Images/Fermat/Fermat02-360.avif",
      variant2: "Images/Fermat/Fermat03-360.avif"      
    }
  },
  {
    id: "fish-curve",
    title: "Fish Curve",
    filename: "Fish.html", 
    aliases: ["Burleigh's Oval, e²=1/2"],
    eqSortKey: "109",
    done: true,
    imgCount: 7,
    equation: "x = a(\\cos(t) + 2k \\cdot \\cos(t/2)), y = a \\cdot \\sin(t), \\quad x = a\\bigl(5\\cos(t) - (\\sqrt{2}-1)\\cos(5t)\\bigr), y = a \\cdot \\sin(4t)",
    eqFind: ["x=", "y=", "cos", "sin", "sqrt"],
    imgSortKey: "109",
    images: {
      canonical: "Images/Fish/Fish01-360.avif",
      variant1: "Images/Fish/Fish02-360.avif",
      variant2: "Images/Fish/Fish07-360.avif"      
    }
  },
  {
    id: "focal-circular-cubic-curve",
    title: "Focal Circular Cubic Curve",
    filename: "FocalCirc.html", 
    aliases: ["Focal of Van Rees", "Isoptic Cubic", "Apollonius Cubic"],
    eqSortKey: "110",
    done: true,
    imgCount: 4,
    equation: "(x-2a)(x^{2}+y^{2})+b^{2}(\\cos(2\\alpha)\\,x+\\sin(2\\alpha)\\,y)=0, \\quad r=\\dfrac{a\\pm\\sqrt{a^{2}-b^{2}\\cos\\theta\\cos(\\theta-2\\alpha)}}{\\cos\\theta}",
    eqFind: ["r=", "r =", "cos", "sin", "sqrt", "theta", "alpha"],
    imgSortKey: "110",
    images: {
      canonical: "Images/FocalCirc/FocalCirc02-360.avif",
      variant1: "Images/FocalCirc/FocalCirc03-360.avif",
      variant2: "Images/FocalCirc/FocalCirc04-360.avif"      
    }
  },
  {
    id: "folioid",
    title: "Folioid",
    filename: "Folioid.html", 
    aliases: [],
    eqSortKey: "111",
    done: true,
    imgCount: 35,
    equation: "r = a\\bigl(e\\cdot\\cos(n\\theta)\\pm\\sqrt{1-e^{2}\\sin^{2}(n\\theta)}\\bigr), \\quad r = 2a\\cos(n\\theta)",
    eqFind: ["r=", "r =", "cos", "sin", "sqrt", "theta", "e^2"],
    imgSortKey: "111",
    images: {
      canonical: "Images/Folioid/Folioid03-360.avif",
      variant1: "Images/Folioid/Folioid20-360.avif",
      variant2: "Images/Folioid/Folioid36-360.avif"      
    }
  },
  {
    id: "folium",
    title: "Folium",
    filename: "Folium.html", 
    aliases: ["Descartes Folium", "Kepler Folium", "Simple Folium", "Bifolium", "Trifolium", "Dürer Folium", "Parabolic Folium"],
    eqSortKey: "112",
    done: true,
    imgCount: 35,
    equation: "r = \\dfrac{3a\\sin\\theta\\cos\\theta}{\\cos^{3}\\theta + \\sin^{3}\\theta}, \\quad r = \\dfrac{3a\\sin\\theta\\cos\\theta}{\\cos^{b}\\theta + \\sin^{c}\\theta}, \\quad r = \\cos\\theta\\,(\\sin^{2}\\theta - a), \\quad r = \\cos\\theta\\,(\\sin^{b}\\theta - a), \\quad r = a\\cos(n\\theta), \\quad r = a\\sin(\\theta/2), \\\\ r = \\dfrac{a\\cos(2\\theta) + (b/2)\\sin(2\\theta)}{\\cos^{3}\\theta}, \\quad r = \\dfrac{a\\cos(c\\theta) + (b/2)\\sin(c\\theta)}{\\cos^{d}\\theta}, \\quad r = a\\cos^{3}\\theta",
    eqFind: ["r=", "r =", "cos^3", "sin^3", "sqrt", "theta"],
    imgSortKey: "112",
    images: {
      canonical: "Images/Folium/Folium01-360.avif",
      variant1: "Images/Folium/Folium10-360.avif",
      variant2: "Images/Folium/Folium37-360.avif"      
    }
  },
  {
    id: "freeths-nephroid",
    title: "Freeth's Nephroid",
    filename: "Freeth.html", 
    aliases: ["Spider Curve", "Circle Strophoid"],
    eqSortKey: "113",
    done: true,
    imgCount: 12,
    equation: "r = a\\bigl(1 + 2\\sin(\\theta/2)\\bigr) \\quad r = \\dfrac{a}{n}\\dfrac{\\sin\\bigl(n\\theta/(n-1)\\bigr)}{\\sin\\bigl(\\theta/(n-1)\\bigr)}",
    eqFind: ["r=", "r =", "sin", "theta"],
    imgSortKey: "113",
    images: {
      canonical: "Images/Freeth/Freeth01-360.avif",
      variant1: "Images/Freeth/Freeth07-360.avif",
      variant2: "Images/Freeth/Freeth12-360.avif"      
    }
  },
  {
    id: "galilean-spiral",
    title: "Galilean Spiral",
    filename: "Galilean.html", 
    aliases: ["Parabolic Spiral"],
    eqSortKey: "114",
    done: true,
    imgCount: 7,
    equation: "r = b \\theta^{2} - a",
    eqFind: ["r=", "r =", "theta^2"],
    imgSortKey: "114",
    images: {
      canonical: "Images/Galilean/Galilean01-360.avif",
      variant1: "Images/Galilean/Galilean03-360.avif",
      variant2: "Images/Galilean/Galilean05-360.avif"      
    }
  },
  {
    id: "garfield-curve",
    title: "Garfield Curve",
    filename: "Garfield.html", 
    aliases: [],
    eqSortKey: "115",
    done: true,
    imgCount: 15,
    equation: "r = \\theta \\cos \\theta, \\quad r = a \\cdot (b \\theta)^{c} \\cdot \\cos^{e} (d \\theta)",
    eqFind: ["r=", "r =", "cos^", "theta^"],
    imgSortKey: "115",
    images: {
      canonical: "Images/Garfield/Garfield01-360.avif",
      variant1: "Images/Garfield/Garfield07-360.avif",
      variant2: "Images/Garfield/Garfield12-360.avif"      
    }
  },
  {
    id: "gaussian-bell-curve",
    title: "Gaussian Bell Curve",
    filename: "GaussianBell.html", 
    aliases: ["Bell Curve", "Normal Distribution Curve", "Gaussian Distribution Curve"],
    eqSortKey: "116",
    done: true,
    imgCount: 1,
    equation: "y = A e^{-\\dfrac{(x-\\mu)^{2}}{2\\sigma^{2}}}",
    eqFind: ["y=", "y =", "e^", "sigma^2", "mu"],
    imgSortKey: "116",
    images: {
      canonical: "Images/GaussianBell/GaussianBell01-360.avif"
    }
  },
  {
    id: "gaussian-wave-packet-curve",
    title: "Gaussian Wave Packet Curve",
    filename: "GaussianWave.html", 
    aliases: ["Wave Packet Curve", "Wave Train Curve"],
    eqSortKey: "117",
    done: true,
    imgCount: 3,
    equation: "y = A \\, e^{-\\dfrac{(x-x_{0})^{2}}{2\\sigma^{2}}} \\cos\\bigl(k(x-x_{0})+\\phi\\bigr)",
    eqFind: ["y=", "y =", "e^", "sigma^2", "cos", "phi"],
    imgSortKey: "117",
    images: {
      canonical: "Images/GaussianWave/GaussianWave01-360.avif",
      variant1: "Images/GaussianWave/GaussianWave02-360.avif",
      variant2: "Images/GaussianWave/GaussianWave03-360.avif"      
    }
  },
  {
    id: "gear-curve",
    title: "Gear Curve",
    filename: "Gear.html", 
    aliases: [],
    eqSortKey: "118",
    done: true,
    imgCount: 4,
    equation: "r = a + \\dfrac{1}{b}\\tanh\\bigl(b\\sin(n\\theta)\\bigr)",
    eqFind: ["r=", "r =", "tanh", "theta"],
    imgSortKey: "118",
    images: {
      canonical: "Images/Gear/Gear02-360.avif",
      variant1: "Images/Gear/Gear03-360.avif",
      variant2: "Images/Gear/Gear04-360.avif"      
    }
  },
  {
    id: "generalized-hyperbola",
    title: "Generalized Hyperbola",
    filename: "GenHyperbola.html", 
    aliases: ["Superhyperbola"],
    eqSortKey: "119",
    done: true,
    imgCount: 2,
    equation: "\\left|\\dfrac{x}{a}\\right|^{n} - \\left|\\dfrac{y}{b}\\right|^{n} = 1, \\quad x = a\\,(\\sec\\phi)^{2/n}, y = b\\,(\\tan\\phi)^{2/n}",
    eqFind: ["x=", "x =", "y=", "y =","sec", "tan", "phi"],
    imgSortKey: "119",
    images: {
      canonical: "Images/GenHyperbola/GenHyperbola01-360.avif",
      variant1: "Images/GenHyperbola/GenHyperbola02-360.avif"
    }
  },
  {
    id: "genpolar-curve",
    title: "GenPolar Curve",
    filename: "GenPolar.html", 
    aliases: ["SuperPolar Curve"],
    eqSortKey: "120",
    done: true,
    imgCount: 5,
    equation: "r = \\dfrac{(a_1 + b_1\\sin(c_1\\theta + d_1))^{e_1}}{(a_2 + b_2\\cos(c_2\\theta + d_2))^{e_2}} + \\dfrac{(a_3 + b_3\\sin(c_3\\theta + d_3))^{e_3}}{(a_4 + b_4\\cos(c_4\\theta + d_4))^{e_4}}",
    eqFind: ["r=", "r =", "sin^", "cos^", "theta"],
    imgSortKey: "120",
    images: {
      canonical: "Images/GenPolar/GenPolar01-360.avif",
      variant1: "Images/GenPolar/GenPolar02-360.avif",
      variant2: "Images/GenPolar/GenPolar05-360.avif"      
    }
  },
  {
    id: "gentrig-curve",
    title: "Gentrig Curve",
    filename: "Gentrig.html", 
    aliases: ["SuperTrig Curve", "Madness Curve", "Tractor Tread Curve", "Volcano Curve", "Klein Ball Curve"],
    eqSortKey: "121",
    done: true,
    imgCount: 4,
    equation: "x = \\dfrac{(a_1 + b_1\\sin(c_1\\theta + d_1))^{e_1}\\;\\mathrm{op}_1\\;(a_2 + b_2\\cos(c_2\\theta + d_2))^{e_2}}{(a_3 + b_3\\sin(c_3\\theta + d_3))^{e_3}\\;\\mathrm{op}_3\\;(a_4 + b_4\\cos(c_4\\theta + d_4))^{e_4}}, \\quad y = \\dfrac{(a_5 + b_5\\sin(c_5\\theta + d_5))^{e_5}\\;\\mathrm{op}_4\;(a_6 + b_6\\cos(c_6\\theta + d_6))^{e_6}}{(a_7 + b_7\\sin(c_7\\theta + d_7))^{e_7}\\;\\mathrm{op}_6\\;(a_8 + b_8\\cos(c_8\\theta + d_8))^{e_8}}, \\quad \\mathrm{op}_i \\in \\{+,-,\\times,\\div\\}",
    eqFind: ["x=", "x =", "y=", "y =","sin^", "cos^", "theta^"],
    imgSortKey: "121",
    images: {
      canonical: "Images/Gentrig/Gentrig01-360.avif",
      variant1: "Images/Gentrig/Gentrig02-360.avif",
      variant2: "Images/Gentrig/Gentrig04-360.avif"      
    }
  },
  {
    id: "gielis-curve",
    title: "Gielis Curve",
    filename: "Gielis.html", 
    aliases: ["Superformula", "Gielis Superformula", "Supershape"],
    eqSortKey: "122",
    done: true,
    imgCount: 11,
    equation: "r = \\bigl(|\\cos(d\\theta)|^{a} + |\\sin(d\\theta)|^{b}\\bigr)^{c}",
    eqFind: ["r=", "r =", "sin^", "cos^", "theta"],
    imgSortKey: "122",
    images: {
      canonical: "Images/Gielis/Gielis01-360.avif",
      variant1: "Images/Gielis/Gielis08-360.avif",
      variant2: "Images/Gielis/Gielis10-360.avif"      
    }
  },
  {
    id: "gompertz-curve",
    title: "Gompertz Curve",
    filename: "Gompertz.html", 
    aliases: [],
    eqSortKey: "123",
    done: true,
    imgCount: 3,
    equation: "y = a \\, e^{-b \\, e^{-c x}}",
    eqFind: ["y=", "y =", "e^"],
    imgSortKey: "123",
    images: {
      canonical: "Images/Gompertz/Gompertz01-360.avif",
      variant1: "Images/Gompertz/Gompertz02-360.avif",
      variant2: "Images/Gompertz/Gompertz03-360.avif"      
    }
  },
  {
    id: "gompertz-distribution-function",
    title: "Gompertz Distribution Function",
    filename: "GompDist.html", 
    aliases: [],
    eqSortKey: "124",
    done: true,
    imgCount: 6,
    equation: "y = b \\cdot \\eta \\cdot e^{(\\eta + b x - \\eta e^{b x})} \\quad y = 1 - e^{(-\\eta \\cdot (e^{b x} - 1))}",
    eqFind: ["y=", "y =", "e^", "eta"],
    imgSortKey: "124",
    images: {
      canonical: "Images/GompDist/GompDist01-360.avif",
      variant1: "Images/GompDist/GompDist03-360.avif",
      variant2: "Images/GompDist/GompDist06-360.avif"      
    }
  },
  {
    id: "gompertz-makeham-distribution",
    title: "Gompertz-Makeham Distribution",
    filename: "GompMake.html", 
    aliases: [],
    eqSortKey: "125",
    done: true,
    imgCount: 6,
    equation: "y = (\\alpha e^{\\beta x} + \\lambda)\\, e^{\\bigl(-\\lambda x - \\frac{\\alpha}{\\beta}(e^{\\beta x}-1)\\bigr)} \\quad y = 1 - e^{\\bigl(-\\lambda x - \\frac{\\alpha}{\\beta}(e^{\\beta x}-1)\\bigr)}",
    eqFind: ["y=", "y =", "e^", "alpha", "beta", "lambda"],
    imgSortKey: "125",
    images: {
      canonical: "Images/GompMake/GompMake01-360.avif",
      variant1: "Images/GompMake/GompMake05-360.avif",
      variant2: "Images/GompMake/GompMake06-360.avif"      
    }
  },
  {
    id: "gudermannian",
    title: "Gudermannian",
    filename: "Gudermannian.html", 
    aliases: ["Hyperbolic Amplitude Curve"],
    eqSortKey: "126",
    done: true,
    imgCount: 1,
    equation: "y = 2a \\cdot \\arctan\\bigl(\\tanh(x/2)\\bigr)",
    eqFind: ["y=", "y =", "arctan", "atan", "tanh"],
    imgSortKey: "126",
    images: {
      canonical: "Images/Gudermannian/Gudermannian01-360.avif"
    }
  },
  {
    id: "habenicht-trefoil",
    title: "Habenicht Trefoil",
    filename: "Habenicht.html",
    aliases: ["Kidney Bean Curve", "Bow Tie Curve", "Four-Leaf Clover Curve"],
    eqSortKey: "127",
    done: true,
    imgCount: 11,
    equation: "r = 1 + \\cos(n\\theta) + \\sin^{2}(n\\theta) \\quad r = a \\cdot \\bigl(1 + \\cos(b\\theta) + c \\cdot |\\sin(b\\theta)|^{d} + e \\cdot |\\sin(g\\theta)|^{f}\\bigr)",
    eqFind: ["r=", "r =", "cos", "sin^2", "theta"],
    imgSortKey: "127",
    images: {
      canonical: "Images/Habenicht/Habenicht01-360.avif",
      variant1: "Images/Habenicht/Habenicht03-360.avif",
      variant2: "Images/Habenicht/Habenicht04-360.avif"      
    }
  },
  {
    id: "harmonic-forced-damping-curve",
    title: "Harmonic Forced Damping Curve",
    filename: "HarmForced.html",
    aliases: ["Linearly Damped Harmonic Oscillator"],
    eqSortKey: "128",
    done: true,
    imgCount: 3,
    equation: "y = A \\sin(\\alpha x + \\phi) + B e^{-\\kappa x} \\sin(\\beta x + \\psi)",
    eqFind: ["y=", "y =", "sin", "e^", "alpha", "phi","kappa", "beta", "psi"],
    imgSortKey: "128",
    images: {
      canonical: "Images/HarmForced/HarmForced01-360.avif",
      variant1: "Images/HarmForced/HarmForced02-360.avif",
      variant2: "Images/HarmForced/HarmForced03-360.avif"      
    }
  },
  {
    id: "harmonic-semiweak-damping-curve",
    title: "Harmonic Semiweak Damping Curve",
    filename: "HarmSemi.html",
    aliases: ["Critically Damped Free Harmonic Oscillator"],
    eqSortKey: "129",
    done: true,
    imgCount: 2,
    equation: "y = A (x - x_{0})^{n-1} e^{-\\kappa (x - x_{0})}",
    eqFind: ["y=", "y =", "e^", "kappa"],
    imgSortKey: "129",
    images: {
      canonical: "Images/HarmSemi/HarmSemi01-360.avif",
      variant1: "Images/HarmSemi/HarmSemi02-360.avif"
    }
  },
  {
    id: "harmonic-strong-damping-curve",
    title: "Harmonic Strong Damping Curve",
    filename: "HarmStrong.html",
    aliases: ["Overdamped Harmonic Oscillator"],
    eqSortKey: "130",
    done: true,
    imgCount: 2,
    equation: "y = A \\cdot e^{-\\kappa \\cdot x} \\cdot \\sinh(\\beta \\cdot x)",
    eqFind: ["y=", "y =", "e^", "beta", "sinh", "kappa"],
    imgSortKey: "130",
    images: {
      canonical: "Images/HarmStrong/HarmStrong01-360.avif",
      variant1: "Images/HarmStrong/HarmStrong02-360.avif"
    }
  },  

  {
    id: "harmonically-modulated-spiral",
    title: "Harmonically Modulated Spiral",
    filename: "HarmonicSpiral.html",
    aliases: ["Modulated spiral"],
    eqSortKey: "131",
    done: true,
    imgCount: 13,
    equation: "r = a\\,\\theta^{b}\\,(1 + A\\cdot\\sin(N\\theta + \\varphi)), \\quad r = r_{0} + a\\,\\theta^{b} + A\\cdot\\sin(N\\theta + \\varphi), \\quad r = (r_{0} + a\\cdot e^{k\\theta})\\,(1 + A\\cdot\\sin(N\\theta + \\varphi)) \\quad r = r_{0} + a\\cdot e^{k\\theta} + A\\cdot\\sin(N\\theta + \\varphi)",
    eqFind: ["r=", "r =", "sin", "e^", "theta", "phi"],
    imgSortKey: "131",
    images: {
      canonical: "Images/HarmonicSpiral/HarmonicSpiral01-360.avif",
      variant1: "Images/HarmonicSpiral/HarmonicSpiral04-360.avif",
      variant2: "Images/HarmonicSpiral/HarmonicSpiral06-360.avif"      
    }
  },

  {
    id: "harmonograph",
    title: "Harmonograph",
    filename: "Harmonograph.html",
    aliases: ["Blackburn pendulum curve", "Compound harmonic curve"],
    eqSortKey: "132",
    done: true,
    imgCount: 19,
    equation: "x = A_1 [\\sin(f_1 t + p_1)]^{k_1} e^{-d_1 t} + A_2 [\\sin(f_2 t + p_2)]^{k_2} e^{-d_2 t}, \\, y = A_3 [\\sin(f_3 t + p_3)]^{k_3} e^{-d_3 t} + A_4 [\\sin(f_4 t + p_4)]^{k_4} e^{-d_4 t}",
    eqFind: ["y=", "y =", "sin^", "e^", "x=", "x ="],
    imgSortKey: "132",
    images: {
      canonical: "Images/Harmonograph/Harmonograph02-360.avif",
      variant1: "Images/Harmonograph/Harmonograph09-360.avif",
      variant2: "Images/Harmonograph/Harmonograph11-360.avif"      
    }
  },
  {
    id: "heart-curve",
    title: "Heart Curve",
    filename: "Heart.html",
    aliases: [],
    eqSortKey: "133",
    done: true,
    imgCount: 24,
    equation: "(r^{2}-a^{2})^{3}=a\\cdot r^{5}\\cos^{2}\\theta\\sin^{3}\\theta, \\quad r=a\\cdot|\\tan\\theta|^{|\\cot\\theta|}, \\quad x=\\cos t, y=\\sin t+\\sqrt{|\\cos t|}, \\quad r=a(1-\\sin\\theta), \\quad r=\\Bigl(-\\frac{324}{\\pi^{2}}\\Bigr)\\theta^{2}+\\Bigl(\\frac{396}{\\pi}\\Bigr)\\theta-105, \\quad x=\\sqrt{\\frac{\\cos^{3}(2(\\theta-\\pi/4))}{\\cos^{2}(\\theta-\\pi/4)}}, y=2\\sin(2(\\theta-\\pi/4))-\\tan^{2}(\\theta-\\pi/4), \\\\ x=\\sin t\\cdot\\cos t\\cdot\\ln|t|, y=|t|^{0.3}\\sqrt{\\cos t}, \\quad x=\sin t\\cdot\\cos t\\cdot\\ln|t|, y=\\sqrt{|t|}\\cdot\\cos t, \\quad x=16\\sin^{3}t, y=13\\cos t-5\\cos 2t-2\\cos 3t-\\cos 4t, \\quad x^{2}+\\Biggl[y-\\frac{2(x^{2}+|x|-6)}{3(x^{2}+|x|+2)}\\Biggr]^{2}=36, \\quad x=\\sin^{3}t, y=\\cos t-\\cos^{4}t, \\\\ r=2-2\\sin\\theta+\\frac{\\sin\\theta\\cdot\\sqrt{|\\cos\\theta|}}{\\sin\\theta+1.4}, \\quad x=-\\sqrt{2}\\sin^{3}t, y=2\\cos t-\\cos^{2}t-\\cos^{3}t, \\quad r=\\frac{\\tan(\\theta/2)}{1+0.5\\cos(3\\theta)}, \\quad r=-1-\\cos\\bigl(\\theta/2+\\pi/4\\bigr), \\quad r=\\frac{|\\theta|-\\pi/2}{\\pi}, \\quad r=(1-|\\theta|)(1+3|\\theta|), \\quad x^{2}+4\\bigl(y-0.5\\cdot|x|\\bigr)^{2}=1, \\\\ x^{2}+5\\bigl(y-0.75\\cdot|x|\\bigr)^{2}=1, \\quad x^{2}+4\\bigl(y-0.5\\cdot|x|^{0.5}\\bigr)^{2}=1, \\quad x^{2}+4\\bigl(y-0.5\\cdot|x|^{2/3}\\bigr)^{2}=1, \\\\ x = \\Biggl(\\cos t - \\frac{c\\cos t}{\\sqrt{\\cos^{2}t+(\\sin t-a)^{2}}}\\Biggr) \\Biggl(1 - \\frac{d}{\\sqrt{\\Biggl(\\cos t - \\frac{c\\cos t}{\\sqrt{\\cos^{2}t+(\\sin t-a)^{2}}}\\Biggr)^{2} + \\Biggl(\\sin t - \\frac{c(\\sin t-a)}{\\sqrt{\\cos^{2}t+(\\sin t-a)^{2}}}-b\\Biggr)^{2}}}\\Biggr) \\, y = \\Biggl(\\sin t - \\frac{c(\\sin t-a)}{\\sqrt{\\cos^{2}t+(\\sin t-a)^{2}}}\\Biggr) - \\frac{d}{\\sqrt{\\Biggl(\cos t - \\frac{c\\cos t}{\\sqrt{\\cos^{2}t+(\\sin t-a)^{2}}}\\Biggr)^{2} + \\Biggl(\sin t - \\frac{c(\\sin t-a)}{\\sqrt{\cos^{2}t+(\\sin t-a)^{2}}}-b\\Biggr)^{2}}} \\Biggl(\\sin t - \\frac{c(\\sin t-a)}{\\sqrt{\\cos^{2}t+(\\sin t-a)^{2}}}-b\\Biggr), \\\\ x=-(1+\\cos t)\\sin t, y=a(1+\\cos t)\\sin\\bigl(3t/4-\\pi/4\\bigr), \\quad r=a\\cdot\\sin^{7}t\\cdot e^{|2t|}",
    eqFind: ["r=", "r =", "x=", "x =", "r=", "r =", "sin^3", "e^", "theta", "cos^3", "tan", "sqrt", "ln", "cot", "x^2", "r^2", "r^5", "sin^7"],
    imgSortKey: "133",
    images: {
      canonical: "Images/Heart/Heart02-360.avif",
      variant1: "Images/Heart/Heart03-360.avif",
      variant2: "Images/Heart/Heart04-360.avif"      
    }
  },
  {
    id: "hippopede",
    title: "Hippopede",
    filename: "Hippopede.html",
    aliases: ["Horse Fetter", "Lemniscate of Booth", "Oval of Booth", "Booth's Curve"],
    eqSortKey: "134",
    done: true,
    imgCount: 2,
    equation: "r^{2} = a^{2} \\cos^{2}(\\theta) + \\varepsilon \\cdot b^{2} \\sin^{2}(\\theta), \\quad x^{2} + y^{2})^{2} = a^{2} x^{2} + \\varepsilon \\cdot b^{2} y^{2}",
    eqFind: ["y^2", "x^2", "r^2=", "r^2 =", "r=", "r =", "epsilon", "cos^2", "sin^2", "theta"],
    imgSortKey: "134",
    images: {
      canonical: "Images/Hippopede/Hippopede01-360.avif",
      variant1: "Images/Hippopede/Hippopede02-360.avif"
    }
  },
  {
    id: "hoerl-curve",
    title: "Hoerl Curve",
    filename: "Hoerl.html",
    aliases: [],
    eqSortKey: "135",
    done: true,
    imgCount: 2,
    equation: "y = a \, x^{b} \, e^{-c x}",
    eqFind: ["y=", "y =", "x^", "e^"],
    imgSortKey: "135",
    images: {
      canonical: "Images/Hoerl/Hoerl01-360.avif",
      variant1: "Images/Hoerl/Hoerl02-360.avif"
    }
  },
  {
    id: "holditch-ellipse",
    title: "Holditch Ellipse",
    filename: "HolditchEllipse.html",
    aliases: [],
    eqSortKey: "136",
    done: true,
    imgCount: 1,
    equation: "\\dfrac{r^{2}}{a^{2} b^{2}} = \\dfrac{1}{b^{2}\\cos^{2}(\\theta)+a^{2}\\sin^{2}(\\theta)} - \\dfrac{c^{2}}{b^{4}\\cos^{2}(\\theta)+a^{4}\\sin^{2}(\\theta)}",
    eqFind: ["r=", "r =", "sin^2", "cos^2", "theta", "r^2"],
    imgSortKey: "136",
    images: {
      canonical: "Images/HolditchEllipse/HolditchEllipse01-360.avif"
    }
  },
  {
    id: "holditch-parabola",
    title: "Holditch Parabola",
    filename: "HolditchParabola.html",
    aliases: [],
    eqSortKey: "137",
    done: true,
    imgCount: 2,
    equation: "x = \\dfrac{y^{2}}{4f} + \\dfrac{f\\,c^{2}}{y^{2}+4f^{2}}",
    eqFind: ["x=", "x =", "y^2"],
    imgSortKey: "137",
    images: {
      canonical: "Images/HolditchParabola/HolditchParabola01-360.avif",
      variant1: "Images/HolditchParabola/HolditchParabola02-360.avif"
    }
  },
  {
    id: "hospital-quintic-curve",
    title: "Hospital Quintic Curve",
    filename: "Hospital.html",
    aliases: ["Curve of Constant Reaction", "Curve of Constant Pressure", "L'Hôpital Quintic Curve", "Care Ribbon"],
    eqSortKey: "138",
    done: true,
    imgCount: 7,
    equation: "x=2a\\int_{0}^{\\phi}\\frac{\\cos\\phi_{1}}{(k+\\cos\\phi_{1})^{3}}\\,d\\phi_{1}, y=\\frac{a}{(k+\\cos\\phi)^{2}}, \\quad x=-a\\frac{\\sin\\phi\\,(2k^{3}+k+(k^{2}+2)\\cos\\phi)}{(1-k^{2})^{2}(k+\\cos\\phi)^{2}} -\\frac{6ak}{(1-k^{2})^{2}\\sqrt{1-k^{2}}}\\cdot\\frac12\\ln\\Bigl(\\frac{1+\\tan(\\phi/2)\\sqrt{(1-k)/(1+k)}}{1-\\tan(\\phi/2)\\sqrt{(1-k)/(1+k)}}\\Bigr), y=\\frac{a}{(k+\\cos\\phi)^{2}}, \\quad x=\\frac{a}{2}\\Bigl(\\tan(\\phi/2)-\\frac{\\tan(\\phi/2)^{5}}{5}\\Bigr),\\\\ y=\\frac{a}{4}(1+\\tan(\\phi/2)^{2})^{2}, \\quad x=-a\\frac{\\sin\\phi\\,(2k^{3}+k+(k^{2}+2)\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{2}} -\\frac{6ak}{(k^{2}-1)^{2}\\sqrt{k^{2}-1}}\\,\\Theta(\\phi), y=\\frac{a}{(k+\\cos\\phi)^{2}}",
    eqFind: ["x=", "x =", "y=", "y =", "phi", "sin", "theta", "cos^2", "tan^5", "sqrt"],
    imgSortKey: "138",
    images: {
      canonical: "Images/Hospital/Hospital02-360.avif",
      variant1: "Images/Hospital/Hospital03-360.avif",
      variant2: "Images/Hospital/Hospital06-360.avif"      
    }
  },
  {
    id: "hospital-quintic-evolute-curve",
    title: "Hospital Quintic Evolute Curve",
    filename: "HospEvolute.html",
    aliases: ["Constant-tension pendulum curve"],
    eqSortKey: "139",
    done: true,
    imgCount: 2,
    equation: "x=-\\dfrac{a\\sin\\phi\\,(2k^{3}+k+(k^{2}+2)\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{2}}-\\dfrac{6ak}{(k^{2}-1)^{2}\\sqrt{k^{2}-1}} -\\Biggl[\\dfrac{\\Bigl[-\\dfrac{a(2k^{4}\\cos\\phi+3k^{3}+2k^{2}\\cos\\phi+3k\\cos^{2}\\phi+2\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{3}}-\\dfrac{3ak}{(k^{2}-1)^{2}(k+\\cos\\phi)}\\Bigr]^{2}+\\Bigl[\\dfrac{2a\\sin\\phi}{(k+\\cos\\phi)^{3}}\\Bigr]^{2}}{\\Biggl(\\Bigl[-\\dfrac{a(2k^{4}\\cos\\phi+3k^{3}+2k^{2}\\cos\\phi+3k\\cos^{2}\\phi+2\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{3}}-\\dfrac{3ak}{(k^{2}-1)^{2}(k+\\cos\\phi)}\\Bigr]\\Bigl[-2a\\Bigl(\\dfrac{\\cos\\phi}{(k+\\cos\\phi)^{3}}+\\dfrac{3\\sin^{2}\\phi}{(k+\\cos\\phi)^{4}}\\Bigr)\\Bigr] -\\Bigl[-\\dfrac{2a\\sin\\phi}{(k+\\cos\\phi)^{3}}\\Bigr]\\Bigl[a\\sin\\phi\\,(2k^{5}-4k^{4}\\cos\\phi-7k^{3}+2k^{2}\\cos\\phi+3k\\sin^{2}\\phi-k-4\\cos\\phi) -\\dfrac{3ak\\sin\\phi}{(k^{2}-1)^{2}(k+\\cos\\phi)^{2}}\\Bigr]\\Biggr)}\\Biggr]\\cdot\\Bigl[-\\dfrac{2a\\sin\\phi}{(k+\\cos\\phi)^{3}}\\Bigr], \\\\ y=\\Bigl[-\\dfrac{a}{(k+\\cos\\phi)^{2}}\\Bigr]+\\Biggl[\\dfrac{\\Bigl[-\\dfrac{a(2k^{4}\\cos\\phi+3k^{3}+2k^{2}\\cos\\phi+3k\\cos^{2}\\phi+2\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{3}}-\\dfrac{3ak}{(k^{2}-1)^{2}(k+\\cos\\phi)}\\Bigr]^{2}+\\Bigl[\\dfrac{2a\\sin\\phi}{(k+\\cos\\phi)^{3}}\\Bigr]^{2}}{\\Biggl(\\Bigl[-\\dfrac{a(2k^{4}\\cos\\phi+3k^{3}+2k^{2}\\cos\\phi+3k\\cos^{2}\\phi+2\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{3}}-\\dfrac{3ak}{(k^{2}-1)^{2}(k+\\cos\\phi)}\\Bigr]\\Bigl[-2a\\Bigl(\\dfrac{\\cos\\phi}{(k+\\cos\\phi)^{3}}+\\dfrac{3\\sin^{2}\\phi}{(k+\\cos\\phi)^{4}}\\Bigr)\\Bigr]-\\Bigl[-\\dfrac{2a\\sin\\phi}{(k+\\cos\\phi)^{3}}\\Bigr]\\Bigl[\\dfrac{a\\sin\\phi\\,(2k^{5}-4k^{4}\\cos\\phi-7k^{3}+2k^{2}\\cos\\phi+3k\\sin^{2}\\phi-k-4\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{4}}-\\dfrac{3ak\\sin\\phi}{(k^{2}-1)^{2}(k+\\cos\\phi)^{2}}\\Bigr]\\Biggr)}\\Biggr]\\cdot\\Bigl[-\\dfrac{a(2k^{4}\\cos\\phi+3k^{3}+2k^{2}\\cos\\phi+3k\\cos^{2}\\phi+2\\cos\\phi)}{(k^{2}-1)^{2}(k+\\cos\\phi)^{3}}-\\dfrac{3ak}{(k^{2}-1)^{2}(k+\\cos\\phi)}\\Bigr]",
    eqFind: ["x=", "x =", "y=", "y =", "phi", "sin^", "theta", "cos^"],
    imgSortKey: "139",
    images: {
      canonical: "Images/HospEvolute/HospEvolute01-360.avif",
      variant1: "Images/HospEvolute/HospEvolute02-360.avif"
    }
  },
  {
    id: "hourglass-curve",
    title: "Hourglass Curve",
    filename: "Hourglass.html",
    aliases: [],
    eqSortKey: "140",
    done: true,
    imgCount: 1,
    equation: "x^{4} = a^{2}(y^{2} - x^{2}), \\quad x = a \\cdot \\tan(t), y = \\dfrac{a \\cdot \\tan(t)}{\\cos(t)}, \\quad r^{2} = -a^{2} \\dfrac{\\cos(2\\theta)}{\\cos^{4}(\\theta)}",
    eqFind: ["x=", "x =", "y=", "y =", "r^2", "r=", "r =", "x^2", "x^4", "y^2", "tan", "theta", "cos^4"],
    imgSortKey: "140",
    images: {
      canonical: "Images/Hourglass/Hourglass01-360.avif",
    }
  },
  {
    id: "humbert-cubic",
    title: "Humbert Cubic",
    filename: "HumbertCubic.html",
    aliases: [],
    eqSortKey: "141",
    done: true,
    imgCount: 1,
    equation: "x^{3} - 3xy^{2} = a^{3}, \\quad r = \\dfrac{a}{\\sqrt[3]{\\cos(3\\theta)}}",
    eqFind: ["x^3", "r=", "r =", "sqrt", "cos", "theta"],
    imgSortKey: "141",
    images: {
      canonical: "Images/HumbertCubic/HumbertCubic01-360.avif",
    }
  },
  {
    id: "hydrogen-2p-orbital-contour-curve",
    title: "Hydrogen 2p Orbital Contour Curve",
    filename: "Hydrogen2p.html",
    aliases: ["Atomic 2p Orbital Curve"],
    eqSortKey: "142",
    done: true,
    imgCount: 4,
    equation: "\\psi_{2p} \\propto r \\, e^{-r/(2a_{0})} \\cos\\theta, \\quad |\\psi|^{2} \\propto r^{2} e^{-(Z/a_{0})r} \\cos^{2}\\theta, \\quad y^{2} e^{-({Z/2})\\sqrt{x^{2}+y^{2}}} = C",
    eqFind: ["psi", "r^2", "cos^2", "e^", "y^2", "x^2", "theta"],
    imgSortKey: "142",
    images: {
      canonical: "Images/Hydrogen2P/Hydrogen2P01-360.avif",
      variant1: "Images/Hydrogen2P/Hydrogen2P02-360.avif",
      variant2: "Images/Hydrogen2P/Hydrogen2P03-360.avif"

    }
  },
  {
    id: "hyperbola",
    title: "Hyperbola",
    filename: "Hyperbola.html",
    aliases: [],
    eqSortKey: "143",
    done: true,
    imgCount: 11,
    equation: "\\dfrac{y^{2}}{a^{2}} - \\dfrac{x^{2}}{b^{2}} = 1, \\quad x = t,\\quad y = ±a\\sqrt{1 + \\left(\\dfrac{t}{b}\\right)^{2}}",
    eqFind: ["y=", "y =", "sqrt", "y^2", "x^2"],
    imgSortKey: "143",
    images: {
      canonical: "Images/Hyperbola/Hyperbola01-360.avif",
      variant1: "Images/Hyperbola/Hyperbola10-360.avif",
      variant2: "Images/Hyperbola/Hyperbola11-360.avif"
    }
  },
  {
    id: "hyperbolic-functions",
    title: "Hyperbolic Functions",
    filename: "HyperFun.html",
    aliases: ["Cosh Hyperbolic Function", "Csch Hyperbolic Function", "Coth Hyperbolic Function", "Sech Hyperbolic Function", "Sinh Hyperbolic Function", "Tanh Hyperbolic Function"],
    eqSortKey: "144",
    done: true,
    imgCount: 6,
    equation: "y = a\\,\\mathrm{csch}(x) = \\dfrac{a}{\\sinh(x)}, \\quad y = a\\,\\cosh(x) = a\\dfrac{e^{x}+e^{-x}}{2}, \\quad y = a\\,\\coth(x) = a\\dfrac{\\cosh(x)}{\\sinh(x)}, \\quad y = a\\,\\mathrm{sech}(x) = \\dfrac{a}{\\cosh(x)}, \\quad y = a\\,\\sinh(x) = a\\dfrac{e^{x}-e^{-x}}{2}, \\quad y = a\\,\\tanh(x) = a\\dfrac{\\sinh(x)}{\\cosh(x)}",
    eqFind: ["y=", "y =", "cosh", "csch", "coth", "sech", "sinh", "tanh", "e^x", "e^-x"],
    imgSortKey: "144",
    images: {
      canonical: "Images/HyperFun/HyperFun02-360.avif",
      variant1: "Images/HyperFun/HyperFun04-360.avif",
      variant2: "Images/HyperFun/HyperFun05-360.avif"
    }
  },
  {
    id: "hyperbolic-spiral",
    title: "Hyperbolic Spiral",
    filename: "HyperSpiral.html",
    aliases: ["Reciprocal Spiral", "Inverse Spiral"],
    eqSortKey: "145",
    done: true,
    imgCount: 1,
    equation: "r = \\dfrac{a}{\\theta}",
    eqFind: ["r=", "r =", "theta"],
    imgSortKey: "145",
    images: {
      canonical: "Images/HyperSpiral/HyperSpiral01-360.avif"
    }
  },
  {
    id: "hypocycloid",
    title: "Hypocycloid",
    filename: "Hypocycloid.html",
    aliases: [],
    eqSortKey: "146",
    done: true,
    imgCount: 11,
    equation: "x=(R-r)\\cos\\theta + r\\cdot\\cos\\left(\\dfrac{R-r}{r}\\theta\\right), y=(R-r)\\sin\\theta - r\\cdot\\sin\\left(\\dfrac{R-r}{r}\\theta\\right), \\quad x=a\\cos\\theta + b\\cos(c\\theta), y=d\\sin\\theta - e\\sin(f\\theta)",
    eqFind: ["x=", "x =", "y=", "y =", "theta", "cos", "sin"],
    imgSortKey: "146",
    images: {
      canonical: "Images/Hypocycloid/Hypocycloid04-360.avif",
      variant1: "Images/Hypocycloid/Hypocycloid08-360.avif",
      variant2: "Images/Hypocycloid/Hypocycloid11-360.avif"
    }
  },
  {
    id: "hypotrochoid",
    title: "Hypotrochoid",
    filename: "Hypotrochoid.html",
    aliases: ["Roulette", "Spirograph Curve"],
    eqSortKey: "147",
    done: true,
    imgCount: 18,
    equation: "x=(R-r)\\cos\\theta + d\\cos\\left(\\dfrac{R-r}{r}\\theta\\right), y=(R-r)\\sin\\theta - d\\sin\\left(\\dfrac{R-r}{r}\\theta\\right), \\quad x=a\\cos\\theta + b\\cos^{c}(d\\theta), y=e\\sin\\theta - f\\sin^{g}(h\\theta)",
    eqFind: ["x=", "x =", "y=", "y =", "theta", "cos^", "sin^"],
    imgSortKey: "147",
    images: {
      canonical: "Images/Hypotrochoid/Hypotrochoid08-360.avif",
      variant1: "Images/Hypotrochoid/Hypotrochoid16-360.avif",
      variant2: "Images/Hypotrochoid/Hypotrochoid17-360.avif"
    }
  },
  {
    id: "hypotrochoid-evolute",
    title: "Hypotrochoid Evolute",
    filename: "HypotrEvolute.html",
    aliases: [],
    eqSortKey: "148",
    done: true,
    imgCount: 16,
    equation: "x = (R-r)\\cos\\theta + d\\cos\\left(\\frac{R-r}{r}\\theta\\right) - \\dfrac{r\\bigl(r^{2}-2rd\\cos(\\frac{R}{r}\\theta)+d^{2}\\bigr)}{r^{3}+(r-R)d^{2}+rd(R-2r)\\cos(\\frac{R}{r}\\theta)} \\left[(R-r)\\cos\\theta - \\frac{R-r}{r}\\,d\\cos\\left(\\frac{R-r}{r}\\theta\\right)\\right], \\\\ y = (R-r)\\sin\\theta - d\\sin\\left(\\frac{R-r}{r}\\theta\\right) - \\dfrac{r\\bigl(r^{2}-2rd\\cos(\\frac{R}{r}\\theta)+d^{2}\\bigr)}{r^{3}+(r-R)d^{2}+rd(R-2r)\\cos(\\frac{R}{r}\\theta)} \\left[(R-r)\\sin\\theta + \\frac{R-r}{r}\\,d\\sin\\left(\\frac{R-r}{r}\\theta\\right)\\right]",
    eqFind: ["x=", "x =", "y=", "y =", "theta", "cos^", "sin^"],
    imgSortKey: "148",
    images: {
      canonical: "Images/HypotrEvolute/HypotrEvolute01-360.avif",
      variant1: "Images/HypotrEvolute/HypotrEvolute06-360.avif",
      variant2: "Images/HypotrEvolute/HypotrEvolute10-360.avif"
    }
  },
  {
    id: "inverse-evolutoid-of-circle",
    title: "Inverse Evolutoid of Circle",
    filename: "InvEvolutoidCircle.html",
    aliases: ["Oblique Involute of Circle", "Tanvolute of Circle"],
    eqSortKey: "149",
    done: true,
    imgCount: 12,
    equation: "x = a\\left(\\cos t + \\dfrac{e^{\\cot\\phi \\cdot t}-1}{\\cot\\phi}\\sin t\\right), \\quad y = a\\left(\\sin t + \\dfrac{e^{\\cot\\phi \\cdot t}-1}{\\cot\\phi}\\cos t\\right)",
    eqFind: ["x=", "x =", "y=", "y =", "phi", "cot", "cos^", "sin^"],
    imgSortKey: "149",
    images: {
      canonical: "Images/InvEvolutoidCircle/InvEvolutoidCircle01-360.avif",
      variant1: "Images/InvEvolutoidCircle/InvEvolutoidCircle06-360.avif",
      variant2: "Images/InvEvolutoidCircle/InvEvolutoidCircle10-360.avif"
    }
  },
  {
    id: "involute-of-circle",
    title: "Involute of Circle",
    filename: "InvoluteCircle.html",
    aliases: ["Anti-clothoid", "Circle Involute"],
    eqSortKey: "150",
    done: true,
    imgCount: 2,
    equation: "x = a(\\cos\\phi + \\phi\\sin\\phi),\\quad y = a(\\sin\\phi - \\phi\\cos\\phi)",
    eqFind: ["x=", "x =", "y=", "y =", "phi", "cos", "sin"],
    imgSortKey: "150",
    images: {
      canonical: "Images/InvoluteCircle/InvoluteCircle01-360.avif",
      variant1: "Images/InvoluteCircle/InvoluteCircle02-360.avif",

    }
  },
  
  {
    id: "irradiance-distribution",
    title: "Irradiance Distribution",
    filename: "Irradiance.html",
    aliases: ["Cosine-cubed law", "Illumination Curve"],
    eqSortKey: "151",
    done: true,
    imgCount: 2,
    equation: "y = \\dfrac{I \\cdot h}{(x^{2} + h^{2})^{3/2}}",
    eqFind: ["x^2", "y=", "y ="],
    imgSortKey: "151",
    images: {
      canonical: "Images/Irradiance/Irradiance01-360.avif",
      variant1: "Images/Irradiance/Irradiance02-360.avif"
    }
  },

  {
    id: "jerabek-curve",
    title: "Jerabek Curve",
    filename: "Jerabek.html",
    aliases: [],
    eqSortKey: "152",
    done: true,
    imgCount: 7,
    equation: "r = a \\dfrac{k \\cos\\theta - 1}{k - \\cos\\theta}, \\quad r = a \\dfrac{k \\cos^{p}(m\\theta) - c}{k - \\cos^{p}(m\\theta)}",
    eqFind: ["r=", "r =", "theta", "cos^"],
    imgSortKey: "152",
    images: {
      canonical: "Images/Jerabek/Jerabek01-360.avif",
      variant1: "Images/Jerabek/Jerabek03-360.avif",
      variant2: "Images/Jerabek/Jerabek07-360.avif"
    }
  },
  {
    id: "joukowski-curve",
    title: "Joukowski Curve",
    filename: "Joukowski.html",
    aliases: ["Zhukovsky Airfoil", "Joukowski Airfoil", "WK-27 Airfoil"],
    eqSortKey: "153",
    done: true,
    imgCount: 10,
    equation: "x = \\dfrac{a}{4}\\,(b + \\sqrt{(1 - b)^{2} + c^{2}}\\cos\\theta)\\left(1 + \\dfrac{1}{(b + \\sqrt{(1 - b)^{2} + c^{2}}\\cos\\theta)^{2} + (c + \\sqrt{(1 - b)^{2} + c^{2}}\\sin\\theta)^{2}}\\right), y = \\dfrac{a}{4}\\,(c + \\sqrt{(1 - b)^{2} + c^{2}}\\sin\\theta)\\left(1 - \\dfrac{1}{(b + \\sqrt{(1 - b)^{2} + c^{2}}\\cos\\theta)^{2} + (c + \\sqrt{(1 - b)^{2} + c^{2}}\\sin\\theta)^{2}}\\right), \\\\ r = e^{a\\theta}",
    eqFind: ["r=", "r =", "theta", "cos", "sin", "sqrt", "e^"],
    imgSortKey: "153",
    images: {
      canonical: "Images/Joukowski/Joukowski01-360.avif",
      variant1: "Images/Joukowski/Joukowski03-360.avif",
      variant2: "Images/Joukowski/Joukowski08-360.avif"
    }
  },
  {
    id: "kampyle-of-eudoxus",
    title: "Kampyle of Eudoxus",
    filename: "Kampyle.html",
    aliases: ["Clairaut’s curve", "Campyle of Eudoxus"],
    eqSortKey: "154",
    done: true,
    imgCount: 11,
    equation: "x^{4} = a^{2}(x^{2} + y^{2}), \\quad r = a \\cdot \\sec^{2}(\\theta), \\quad r = a \\cdot \\sec^{b}(c\\theta)",
    eqFind: ["r=", "r =", "theta", "sec^2", "x^4", "x^2", "y^2"],
    imgSortKey: "154",
    images: {
      canonical: "Images/Kampyle/Kampyle01-360.avif",
      variant1: "Images/Kampyle/Kampyle10-360.avif",
      variant2: "Images/Kampyle/Kampyle11-360.avif"
    }
  },
  {
    id: "kappa-curve",
    title: "Kappa Curve",
    filename: "Kappa.html",
    aliases: ["Gutschoven’s Curve", "Windmill Curve", "Tangentoid Spiral"],
    eqSortKey: "155",
    done: true,
    imgCount: 4,
    equation: "(x^{2} + y^{2})y^{2} = a^{2}x^{2}, \\quad r = a \\cdot \\cot(\\theta), \\quad r = a \\cdot \\cot^{b}(c\\theta)",
    eqFind: ["r=", "r =", "theta", "cot^", "x^4", "x^2", "y^2"],
    imgSortKey: "155",
    images: {
      canonical: "Images/Kappa/Kappa01-360.avif",
      variant1: "Images/Kappa/Kappa02-360.avif",
      variant2: "Images/Kappa/Kappa04-360.avif"
    }
  },
  {
    id: "keratoid-cusp",
    title: "Keratoid Cusp",
    filename: "Keratoid.html",
    aliases: ["Cusp of the first kind"],
    eqSortKey: "156",
    done: true,
    imgCount: 3,
    equation: "y^{2} = x^{2} y + x^{5}, \\quad x = t(t-1), y = t^{3}(t-1)^{2}, \\quad x = t(t-1), y = t^{a}(t-1)^{b}",
    eqFind: ["x=", "x =", "y=", "y =", "x^5", "x^2", "y^2"],
    imgSortKey: "156",
    images: {
      canonical: "Images/Keratoid/Keratoid01-360.avif",
      variant1: "Images/Keratoid/Keratoid02-360.avif",
      variant2: "Images/Keratoid/Keratoid03-360.avif"
    }
  },
  {
    id: "kiepert-curve",
    title: "Kiepert Curve",
    filename: "Kiepert.html",
    aliases: [],
    eqSortKey: "157",
    done: true,
    imgCount: 6,
    equation: "r = a \\cdot \\sqrt[3]{\\cos(3\\theta)}, \\quad r = a \\cdot \\cos^{b}(c\\theta), \\quad x^{2} + y^{2})^{3} = a^{3}\\, x(x^{2} - 3y^{2})",
    eqFind: ["r=", "r =", "sqrt", "cos^", "theta", "x^2", "y^2", "x^6", "y^6"],
    imgSortKey: "157",
    images: {
      canonical: "Images/Kiepert/Kiepert01-360.avif",
      variant1: "Images/Kiepert/Kiepert03-360.avif",
      variant2: "Images/Kiepert/Kiepert06-360.avif"
    }
  },
  {
    id: "kieroid",
    title: "Kieroid",
    filename: "Kieroid.html",
    aliases: [],
    eqSortKey: "158",
    done: true,
    imgCount: 6,
    equation: "y^{2}(x-a)^{2} + x^{2}(x-b)^{2} = c^{2}x^{2}, \\quad r = \\dfrac{a}{\\cos t} + (b-a)\\cos t \\pm \\sqrt{c^{2}-(a-b)^{2}\\sin^{2}t}",
    eqFind: ["r=", "r =", "sqrt", "cos", "sin^", "x^2", "y^2"],
    imgSortKey: "158",
    images: {
      canonical: "Images/Kieroid/Kieroid06-360.avif",
      variant1: "Images/Kieroid/Kieroid10-360.avif",
      variant2: "Images/Kieroid/Kieroid12-360.avif"
    }
  },
  {
    id: "kilroy-curve",
    title: "Kilroy Curve",
    filename: "Kilroy.html",
    aliases: [],
    eqSortKey: "159",
    done: true,
    imgCount: 6,
    equation: "y = a \\cdot \\ln\\left|\\dfrac{\\sin x}{x}\\right|",
    eqFind: ["y=", "y =", "ln", "log", "sin^"],
    imgSortKey: "159",
    images: {
      canonical: "Images/Kilroy/Kilroy01-360.avif"
    }
  },
  {
    id: "klein-curve",
    title: "Klein Curve",
    filename: "Klein.html",
    aliases: [],
    eqSortKey: "160",
    done: true,
    imgCount: 12,
    equation: "(r^{2} - b^{2})^{2} = c \\cdot a \\cdot (a^{3} - 2 r^{3} \\sin(3\\theta) - 3 a r^{2})",
    eqFind: ["r^2", "r^4", "r^3", "sin", "theta"],
    imgSortKey: "160",
    images: {
      canonical: "Images/Klein/Klein01-360.avif",
      variant1: "Images/Klein/Klein02-360.avif",
      variant2: "Images/Klein/Klein12-360.avif"
    }
  },
  {
    id: "knot-curve",
    title: "Knot Curve",
    filename: "Knot.html",
    aliases: [],
    eqSortKey: "161",
    done: true,
    imgCount: 1,
    equation: "(x^{2} - 1)^{2} = y^{2}(3 + 2y, \\quad y = t, x = \\pm\\sqrt{1 \\pm t\\sqrt{3 + 2t}}",
    eqFind: ["y=", "y =", "ln", "log", "sin^"],
    imgSortKey: "161",
    images: {
      canonical: "Images/Knot/Knot01-360.avif"
    }
  },
  {
    id: "kulp-quartic-curve",
    title: "Kulp Quartic Curve",
    filename: "Kulp.html",
    aliases: ["Külp conchoid"],
    eqSortKey: "162",
    done: true,
    imgCount: 1,
    equation: "x^{2} y^{2} + y^{2} a^{2} - a^{4} = 0, \\quad y = \\pm \\dfrac{a^{2}}{\\sqrt{x^{2} + a^{2}}}",
    eqFind: ["y=", "y =", "x^2", "y^2", "sqrt^"],
    imgSortKey: "162",
    images: {
      canonical: "Images/Kulp/Kulp01-360.avif"
    }
  },
  {
    id: "laplace-limit-curve",
    title: "LaPlace Limit Curve",
    filename: "LaPlaceLimit.html",
    aliases: [],
    eqSortKey: "163",
    done: true,
    imgCount: 1,
    equation: "x = \\sqrt{t \\bigl(\\coth t - t\\bigr)},\\quad y = \\sqrt{t \\bigl(t - \\tanh t\\bigr)}",
    eqFind: ["x=", "x =", "y=", "y =", "coth", "tanh", "sqrt^"],
    imgSortKey: "163",
    images: {
      canonical: "Images/LaPlaceLimit/LaPlaceLimit01-360.avif"
    }
  },
  {
    id: "lemniscate-of-bernoulli",
    title: "Lemniscate of Bernoulli",
    filename: "LemniscateBernoulli.html",
    aliases: ["Bernoulli’s Lemniscate", "Figure-Eight Curve"],
    eqSortKey: "164",
    done: true,
    imgCount: 1,
    equation: "r = a \\sqrt{\\cos(2\\theta)}",
    eqFind: ["r=", "r =", "cos", "theta", "sqrt^"],
    imgSortKey: "164",
    images: {
      canonical: "Images/LemniscateBernoulli/LemniscateBernoulli01-360.avif"
    }
  },
  {
    id: "limacon",
    title: "Limaçon",
    filename: "Limaçon.html",
    aliases: ["Limaçon of Pascal", "Pascal’s Snail"],
    eqSortKey: "165",
    done: true,
    imgCount: 26,
    equation: "r = a + b \\cos\\theta, \\quad r = a \\cos(c\\theta) + b \\cos^{d}(e\\theta)",
    eqFind: ["r=", "r =", "cos^", "theta"],
    imgSortKey: "165",
    images: {
      canonical: "Images/Limacon/Limacon04-360.avif",
      variant1: "Images/Limacon/Limacon14-360.avif",
      variant2: "Images/Limacon/Limacon21-360.avif"
    }
  },
  {
    id: "limacon-evolute",
    title: "Limaçon Evolute",
    filename: "LimaEvolute.html",
    aliases: ["Caustic of a Circle"],
    eqSortKey: "166",
    done: true,
    imgCount: 10,
    equation: "x=\\dfrac{\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\cos\\theta\\Bigl[\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)^{2}+2b^{2}c^{2}d^{2}\\sin^{2}(d\\theta)\\cos^{2c-2}(d\\theta)-bcd^{2}\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\bigl(c\\sin^{2}(d\\theta)-1\\bigr)\\cos^{c-2}(d\\theta)\\Bigr]\\Bigl[-bcd\\sin(d\\theta)\\cos^{c-1}(d\\theta)\\sin\\theta+\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\cos\\theta\\Bigr]\\Bigl[\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)^{2}+b^{2}c^{2}d^{2}\\sin^{2}(d\\theta)\\cos^{2c-2}(d\\theta)\\Bigr]}{\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)^{2}+2b^{2}c^{2}d^{2}\\sin^{2}(d\\theta)\\cos^{2c-2}(d\\theta)-bcd^{2}\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\bigl(c\\sin^{2}(d\\theta)-1\\bigr)\\cos^{c-2}(d\\theta)}, \\\\ y=\\dfrac{\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\sin\\theta\\Bigl[\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)^{2}+2b^{2}c^{2}d^{2}\\sin^{2}(d\\theta)\\cos^{2c-2}(d\\theta)-bcd^{2}\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\bigl(c\\sin^{2}(d\\theta)-1\\bigr)\\cos^{c-2}(d\\theta)\\Bigr]+\\Bigl[-bcd\\sin(d\\theta)\\cos^{c-1}(d\\theta)\\cos\\theta-\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\sin\\theta\\Bigr]\\Bigl[\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)^{2}+b^{2}c^{2}d^{2}\\sin^{2}(d\\theta)\\cos^{2c-2}(d\\theta)\\Bigr]}{\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)^{2}+2b^{2}c^{2}d^{2}\\sin^{2}(d\\theta)\\cos^{2c-2}(d\\theta)-bcd^{2}\\bigl(a+b\\cos^{c}(d\\theta)\\bigr)\\bigl(c\\sin^{2}(d\\theta)-1\\bigr)\\cos^{c-2}(d\\theta)}",
    eqFind: ["x=", "x =", "y=", "y =", "cos^2", "sin^2", "theta"],
    imgSortKey: "166",
    images: {
      canonical: "Images/LimaEvolute/LimaEvolute06-360.avif",
      variant1: "Images/LimaEvolute/LimaEvolute07-360.avif",
      variant2: "Images/LimaEvolute/LimaEvolute08-360.avif"
    }
  },
  {
    id: "links-curve",
    title: "Links Curve",
    filename: "Links.html",
    aliases: [],
    eqSortKey: "167",
    done: true,
    imgCount: 1,
    equation: "x^{2} + y^{2} - 3x)^{2} = 4x^{2}(2 - x), \\quad r = a \\cdot \\cos(\\theta)\\left(3 - 2\\cos^{2}(\\theta) \\pm 2\\sqrt{(1 - \\cos^{2}(\\theta))(2 - \\cos^{2}(\\theta))}\\right)",
    eqFind: ["r=", "r =", "cos", "theta", "sqrt^"],
    imgSortKey: "167",
    images: {
      canonical: "Images/Links/Links01-360.avif"
    }
  },
  {
    id: "lintearia",
    title: "Lintearia",
    filename: "Lintearia.html",
    aliases: ["Tarpaulin Curve"],
    eqSortKey: "168",
    done: true,
    imgCount: 2,
    equation: "x=\\dfrac{a}{2}\\int_{0}^{t}\\dfrac{\\cos u}{\\sqrt{\\cos u-k}}\\,du,\\qquad y=-a\\sqrt{\\cos t-k}",
    eqFind: ["x=", "x =", "y=", "y =", "int", "du", "sqrt", "cos"],
    imgSortKey: "168",
    images: {
      canonical: "Images/Lintearia/Lintearia01-360.avif",
      variant1: "Images/Lintearia/Lintearia02-360.avif"
    }
  },
  {
    id: "lituus",
    title: "Lituus",
    filename: "Lituus.html",
    aliases: ["Bishop’s crosier", "Crook"],
    eqSortKey: "169",
    done: true,
    imgCount: 2,
    equation: "r = \\dfrac{a}{\\sqrt{\\theta}}",
    eqFind: ["r=", "r =", "theta", "sqrt"],
    imgSortKey: "169",
    images: {
      canonical: "Images/Lituus/Lituus01-360.avif",
      variant1: "Images/Lituus/Lituus02-360.avif",
      variant2: "Images/Lituus/Lituus03-360.avif"
    }
  },
  {
    id: "logarithmic-curve",
    title: "Logarithmic Curve",
    filename: "Logarithm.html",
    aliases: ["Decibel Curve", "Diminishing Returns Curve", "Log-Time Creep Curve"],
    eqSortKey: "170",
    done: true,
    imgCount: 6,
    equation: "y = a \\cdot \\ln(x/b), \\quad y = a \\cdot \\log_{10}(x/b), \\quad y = 20 \\cdot \\log_{10}(x/b), y = 10 \\cdot \\log_{10}(x/b), \\quad y = a \\cdot \\ln\\bigl(1 + x/b\\bigr), \\quad y = a \\cdot \\ln(t/t_{0}) + d, \\quad y = a \\cdot \\ln(bx + c) + d",
    eqFind: ["y=", "y =", "ln", "log"],
    imgSortKey: "170",
    images: {
      canonical: "Images/Logarithm/Logarithm01-360.avif",
      variant1: "Images/Logarithm/Logarithm02-360.avif",
      variant2: "Images/Logarithm/Logarithm06-360.avif"
    }
  },
  {
    id: "logarithmic-spiral",
    title: "Logarithmic Spiral",
    filename: "LogSpiral.html",
    aliases: ["Equiangular Spiral", "Growth Spiral", "Bernoulli Spiral", "Spira Mirabilis", "Logistic Spiral", "Geometrical Spiral", "Proportional Spiral", "Descartes Spiral", "Eternal Line (Dürer)", "Golden Spiral"],
    eqSortKey: "171",
    done: true,
    imgCount: 3,
    equation: "r = a \\cdot e^{b\\theta}",
    eqFind: ["r=", "r =", "theta", "e^"],
    imgSortKey: "171",
    images: {
      canonical: "Images/LogSpiral/LogSpiral01-360.avif",
      variant1: "Images/LogSpiral/LogSpiral02-360.avif",
      variant2: "Images/LogSpiral/LogSpiral03-360.avif"
    }
  },
  {
    id: "logistic-growth-curve",
    title: "Logistic Growth Curve",
    filename: "Logistic.html",
    aliases: ["Sigmoid Curve", "S-Shaped Curve", "Verhulst Curve", "Pearl-Reed Curve"],
    eqSortKey: "172",
    done: true,
    imgCount: 6,
    equation: "y = \\frac{L}{1 + e^{-k(x-x_0)}}",
    eqFind: ["y=", "y =", "e^"],
    imgSortKey: "172",
    images: {
      canonical: "Images/Logistic/Logistic01-360.avif",
      variant1: "Images/Logistic/Logistic02-360.avif",
      variant2: "Images/Logistic/Logistic05-360.avif"
    }
  },
  {
    id: "loriga-curve",
    title: "Loriga Curve",
    filename: "Loriga.html",
    aliases: [],
    eqSortKey: "173",
    done: true,
    imgCount: 9,
    equation: "\\dfrac{n}{r^{2}} = \\sum_{k=0}^{n-1}\\dfrac{1}{r^{2}+a^{2}-2ar\\cos(\\theta-2\\pi k/n)}",
    eqFind: ["r^2=", "r^2 =", "theta", "cos"],
    imgSortKey: "173",
    images: {
      canonical: "Images/Loriga/Loriga01-360.avif",
      variant1: "Images/Loriga/Loriga02-360.avif",
      variant2: "Images/Loriga/Loriga05-360.avif"
    }
  },
  {
    id: "maltese-cross-curve",
    title: "Maltese Cross Curve",
    filename: "Maltese.html",
    aliases: ["Bow Tie Curve"],
    eqSortKey: "174",
    done: true,
    imgCount: 5,
    equation: "x = a\\cos(t)\\,(\\cos^{2}(t)-2), y = a\\sin(t)\\,\\cos^{2}(t), \\quad x = -a\\sin(t)\\,\\cos^{2}(t), y = a\\cos(t)\\,(\\cos^{2}(t)-2), \\quad xy(x^{2}-y^{2}) = a^{3}(x^{2}+y^{2}), \\quad r = \\dfrac{2a}{\\sqrt{\\sin(4\\theta)}}, \\quad r = \\dfrac{2a}{\\sqrt{-\\cos(4\\theta)}}",
    eqFind: ["r=", "r =", "theta", "cos^2", "sin", "sqrt", "x=", "x =", "y=", "y =", "x^2", "y^2"],
    imgSortKey: "174",
    images: {
      canonical: "Images/Maltese/Maltese01-360.avif",
      variant1: "Images/Maltese/Maltese03-360.avif",
      variant2: "Images/Maltese/Maltese05-360.avif"
    }
  },
  {
    id: "mascot-curve",
    title: "Mascot Curve",
    filename: "Mascot.html",
    aliases: [],
    eqSortKey: "175",
    done: true,
    imgCount: 4,
    equation: "x = R\\left(\\cos\\theta + \\int_{0}^{\\theta}\\dfrac{1}{\\sin u+\\sqrt{k^{2}-\\cos^{2}u}}\\,du\\right), y = R\\sin\\theta",
    eqFind: ["x=", "x =", "y=", "y =", "theta", "cos^2", "sin", "sqrt", "int", "du"],
    imgSortKey: "175",
    images: {
      canonical: "Images/Mascot/Mascot02-360.avif",
      variant1: "Images/Mascot/Mascot03-360.avif",
      variant2: "Images/Mascot/Mascot04-360.avif"
    }
  },
  {
    id: "meander-curve",
    title: "Meander Curve",
    filename: "Meander.html",
    aliases: ["Sine-generated Curve"],
    eqSortKey: "176",
    done: true,
    imgCount: 9,
    equation: "\\dfrac{d\\phi}{ds}=a\\sin\\left(\\dfrac{2\\pi s}{L}\\right),\\qquad \\dfrac{dx}{ds}=\\cos\\phi,\\qquad \\dfrac{dy}{ds}=\\sin\\phi",
    eqFind: ["int", "ds", "dx", "dy", "phi", "cos", "sin"],
    imgSortKey: "176",
    images: {
      canonical: "Images/Meander/Meander03-360.avif",
      variant1: "Images/Meander/Meander04-360.avif",
      variant2: "Images/Meander/Meander09-360.avif"
    }
  },
  {
    id: "michaelis-menten-curve",
    title: "Michaelis-Menten Curve",
    filename: "Michaelis.html",
    aliases: ["Lineweaver-Burk", "Saturation Kinetics Curve"],
    eqSortKey: "177",
    done: true,
    imgCount: 3,
    equation: "v = \\dfrac{V_{\\max}\\, S}{K_{m}+S}, \\quad \\dfrac{1}{v} = \\dfrac{K_{m}}{V_{\\max}}\\,\\dfrac{1}{S} + \\dfrac{1}{V_{\\max}}",
    eqFind: ["v=", "v =", "S=", "S ="],
    imgSortKey: "177",
    images: {
      canonical: "Images/Michaelis/Michaelis01-360.avif",
      variant1: "Images/Michaelis/Michaelis02-360.avif",
      variant2: "Images/Michaelis/Michaelis03-360.avif"
    }
  },
  {
    id: "mie-potential",
    title: "Mie Potential",
    filename: "Mie.html",
    aliases: ["Lennard-Jones Potential", "Mie Force", "Lennard-Jones Force"],
    eqSortKey: "178",
    done: true,
    imgCount: 2,
    equation: "V=C\\varepsilon\\left[\\left(\\dfrac{\\sigma}{r}\\right)^{n}-\\left(\\dfrac{\\sigma}{r}\\right)^{m}\\right], C=\\dfrac{n}{n-m}\\left(\\dfrac{n}{m}\\right)^{\\frac{m}{n-m}}, V_{\\min}=-\\varepsilon, \\quad V=4\\varepsilon\\left[\\left(\\dfrac{\\sigma}{r}\\right)^{12}-\\left(\\dfrac{\\sigma}{r}\\right)^6\\right], \\quad F=\\dfrac{C\\varepsilon}{r}\\left[n\\left(\\dfrac{\\sigma}{r}\\right)^{n}-m\\left(\\dfrac{\\sigma}{r}\\right)^{m}\\right], \\quad F=\\dfrac{24\\varepsilon}{r}\\left[2\\left(\\dfrac{\\sigma}{r}\\right)^{12}-\\left(\\dfrac{\\sigma}{r}\\right)^{6}\\right]",
    eqFind: ["V=", "V =", "F=", "F =", "sigma^", "epsilon"],
    imgSortKey: "178",
    images: {
      canonical: "Images/Mie/Mie01-360.avif",
      variant1: "Images/Mie/Mie02-360.avif"
    }
  },
  {
    id: "mixed-cubic-curve",
    title: "Mixed Cubic Curve",
    filename: "MixedCubic.html",
    aliases: ["Longchamps Curve"],
    eqSortKey: "179",
    done: true,
    imgCount: 1,
    equation: "(x - a)y^{2} = b x^{2}, \\quad r = \\dfrac{a}{\\cos(\\theta)} + \\dfrac{b\\cdot\\cos(\\theta)}{\\sin^{2}(\\theta)}",
    eqFind: ["r=", "r =", "cos", "theta", "sin^2", "x^2", "y^2"],
    imgSortKey: "179",
    images: {
      canonical: "Images/MixedCubic/MixedCubic01-360.avif"
    }
  },
  {
    id: "monomolecular-curve",
    title: "Monomolecular Curve",
    filename: "Monomolecular.html",
    aliases: ["Mitscherlich equation", "Brody Function"],
    eqSortKey: "180",
    done: true,
    imgCount: 3,
    equation: "y = A \\cdot \\left(1 - e^{-k(t-t_{0})}\\right)",
    eqFind: ["y=", "y =", "e^"],
    imgSortKey: "180",
    images: {
      canonical: "Images/Monomolecular/Monomolecular01-360.avif",
      variant1: "Images/Monomolecular/Monomolecular02-360.avif",
      variant2: "Images/Monomolecular/Monomolecular03-360.avif"
    }
  },
  {
    id: "nephroid",
    title: "Nephroid",
    filename: "Nephroid.html",
    aliases: ["Bicuspid epicycloid"],
    eqSortKey: "181",
    done: true,
    imgCount: 1,
    equation: "x = 3r\\cos\\theta - r\\cos(3\\theta),\\quad y = 3r\\sin\\theta - r\\sin(3\\theta)",
    eqFind: ["x=", "x =", "cos", "theta", "sin", "y=", "y ="],
    imgSortKey: "181",
    images: {
      canonical: "Images/Nephroid/Nephroid01-360.avif"
    }
  },
  {
    id: "newtons-trident",
    title: "Newton's Trident",
    filename: "NewtonTrident.html",
    aliases: ["Trident curve", "Parabola of Descartes", "Cartesian parabola"],
    eqSortKey: "182",
    done: true,
    imgCount: 4,
    equation: "xy = a x^{3} + b x^{2} + c x + d, \\quad y = a x^{2} + b x + c + \\dfrac{d}{x}",
    eqFind: ["y=", "y =", "x^3", "x^2"],
    imgSortKey: "182",
    images: {
      canonical: "Images/NewtonTrident/NewtonTrident01-360.avif",
      variant1: "Images/NewtonTrident/NewtonTrident02-360.avif",
      variant2: "Images/NewtonTrident/NewtonTrident04-360.avif"
    }
  },
  {
    id: "nickalls-pulfrich-curve",
    title: "Nickalls-Pulfrich Curve",
    filename: "Nickalls.html",
    aliases: ["Rotating Pulfrich illusion"],
    eqSortKey: "183",
    done: true,
    imgCount: 2,
    equation: "x=\\dfrac{2b\\cos^{2}(t-a)+2c(b\\cos a-c\\sin a)\\cos(t-a)+(b\\cos 2a-c\\sin 2a-b)}{2(b\\cos a+c\\sin a)\\cos(t-a)+\\sin a\\cos a+b\\cdot c}, \\quad y=\\dfrac{b\\sin(t-a)\\cos(t-a)+(b\\cdot c\\cos a+b^{2}\\sin a)\\sin(t-a)}{(b\\cos a+c\\sin a)\\cos(t-a)+\\sin a\\cos a+b\\cdot c}",
    eqFind: ["y=", "y =", "x=", "x =", "cos^2", "sin"],
    imgSortKey: "183",
    images: {
      canonical: "Images/Nickalls/Nickalls01-360.avif",
      variant1: "Images/Nickalls/Nickalls02-360.avif"
    }
  },
  {
    id: "nielsons-spiral",
    title: "Nielson's Spiral",
    filename: "NielsonSpiral.html",
    aliases: ["Sici spiral"],
    eqSortKey: "184",
    done: true,
    imgCount: 1,
    equation: "x = a\\cdot\\operatorname{ci}(t)=\\gamma+\\ln t+\\int_{0}^{t}\\frac{\\cos u-1}{u}\\,du, \\quad y = a\\cdot\\operatorname{si}(t)=\\int_{0}^{t}\\frac{\\sin u}{u}\\,du-\\frac{\\pi}{2}",
    eqFind: ["y=", "y =", "x=", "x =", "cos", "sin", "int", "du"],
    imgSortKey: "184",
    images: {
      canonical: "Images/NielsonSpiral/NielsonSpiral01-360.avif"
    }
  },
  {
    id: "nodal-curve",
    title: "Nodal Curve",
    filename: "NodalCurve.html",
    aliases: ["Kappa Curve", "Windmill Curve", "Right Strophoid"],
    eqSortKey: "185",
    done: true,
    imgCount: 1,
    equation: "r = a \\cdot \\tan(n\\theta), \\quad r = a \\cdot \\tan^{b}(c\\theta)",
    eqFind: ["r=", "r =", "tan^", "theta"],
    imgSortKey: "185",
    images: {
      canonical: "Images/NodalCurve/NodalCurve03-360.avif",
      variant1: "Images/NodalCurve/NodalCurve08-360.avif",
      variant2: "Images/NodalCurve/NodalCurve15-360.avif"
    }
  },
  {
    id: "ochoa-curve",
    title: "Ochoa Curve",
    filename: "Ochoa.html",
    aliases: [],
    eqSortKey: "186",
    done: true,
    imgCount: 2,
    equation: "3y^{2} = 2x^{3} + 386x^{2} + 256x - 58195",
    eqFind: ["y^2", "x^3", "x^2"],
    imgSortKey: "186",
    images: {
      canonical: "Images/Ochoa/Ochoa01-360.avif",
      variant1: "Images/Ochoa/Ochoa02-360.avif"
    }
  },
  {
    id: "ophiuride",
    title: "Ophiuride",
    filename: "Ophiuride.html",
    aliases: [],
    eqSortKey: "187",
    done: true,
    imgCount: 12,
    equation: "r = (b\\sin\\theta - a\\cos\\theta)\\tan\\theta, \\quad r = \\bigl(b\\sin(m\\theta) - a\\cos(n\\theta)\\bigr)\\tan(o\\theta)",
    eqFind: ["r=", "r =", "tan^", "theta", "sin", "cos"],
    imgSortKey: "187",
    images: {
      canonical: "Images/Ophiuride/Ophiuride01-360.avif",
      variant1: "Images/Ophiuride/Ophiuride02-360.avif",
      variant2: "Images/Ophiuride/Ophiuride09-360.avif"
    }
  },
  {
    id: "oxyhemoglobin-dissociation-curve",
    title: "Oxyhemoglobin Dissociation Curve",
    filename: "OxyHb.html",
    aliases: ["Hemoglobin Dissociation Curve", "Oxygen-Hemoglobin Dissociation Curve"],
    eqSortKey: "188",
    done: true,
    imgCount: 1,
    equation: "s{O_2} = \\dfrac{100 \\times (p{O_2})^{n}}{(P_{50})^{n} + (p{O_2})^{n}}",
    eqFind: ["pO2", "sO2"],
    imgSortKey: "188",
    images: {
      canonical: "Images/OxyHb/OxyHb01-360.avif"
    }
  },
  {
    id: "parabola",
    title: "Parabola",
    filename: "Parabola.html",
    aliases: [],
    eqSortKey: "189",
    done: true,
    imgCount: 7,
    equation: "y = a \cdot x^{2}",
    eqFind: ["y=", "y =", "x^2"],
    imgSortKey: "189",
    images: {
      canonical: "Images/Parabola/Parabola01-360.avif",
      variant1: "Images/Parabola/Parabola02-360.avif",
      variant2: "Images/Parabola/Parabola07-360.avif"
    }
  },
  {
    id: "parabola-glissette",
    title: "Parabola Glissette",
    filename: "ParabGlissette.html",
    aliases: [],
    eqSortKey: "190",
    done: true,
    imgCount: 1,
    equation: "(x^{2} + y^{2} + 3a^{2})x^{2}y^{2} = a^{6}, \\quad x = a\\dfrac{\\cos^{2}(t)}{\\sin(t)}, y = a\\dfrac{\\sin^{2}(t)}{\\cos(t)}",
    eqFind: ["x^2", "y^2", "cos^2", "sin^2", "x=", "x =", "y=", "y ="],
    imgSortKey: "190",
    images: {
      canonical: "Images/ParabGlissette/ParabGlissette01-360.avif"
    }
  },
  {
    id: "parabola-inverse-curve",
    title: "Parabola Inverse Curve",
    filename: "ParaInverse.html",
    aliases: ["Paisley-like Curve"],
    eqSortKey: "191",
    done: true,
    imgCount: 3,
    equation: "x = x_{0} + \\dfrac{k(a t^{2}-x_{0})}{(a t^{2}-x_{0})^{2}+(2 a t-y_{0})^{2}},\\quad y = y_{0} + \\dfrac{k(2 a t-y_{0})}{(a t^{2}-x_{0})^{2}+(2 a t-y_{0})^{2}}",
    eqFind: ["y=", "y =", "x=", "x ="],
    imgSortKey: "191",
    images: {
      canonical: "Images/ParaInverse/ParaInverse01-360.avif",
      variant1: "Images/ParaInverse/ParaInverse02-360.avif",
      variant2: "Images/ParaInverse/ParaInverse03-360.avif"
    }
  },
  {
    id: "parabola-involute",
    title: "Parabola Involute",
    filename: "ParabInvolute.html",
    aliases: ["Involute of the Parabola"],
    eqSortKey: "192",
    done: true,
    imgCount: 1,
    equation: "x = -\\dfrac{1}{a}\\left(\\dfrac{t}{2}-\\dfrac{\\ln\\bigl(2t+\\sqrt{1+4t^{2}}\\bigr)}{4\\sqrt{1+4t^{2}}}\\right),\\quad y = -\\dfrac{1}{a}\\dfrac{t\\,\\ln\\bigl(2t+\\sqrt{1+4t^{2}}\\bigr)}{2\\sqrt{1+4t^{2}}}",
    eqFind: ["x^2", "y^2", "cos^2", "sin^2", "x=", "x =", "y=", "y ="],
    imgSortKey: "192",
    images: {
      canonical: "Images/ParabInvolute/ParabInvolute01-360.avif"
    }
  },
  {
    id: "parabola-negative-pedal-curve",
    title: "Parabola Negative Pedal Curve",
    filename: "ParaNegPedal.html",
    aliases: ["Antipedal of a Parabola", "Orthocaustic of a Parabola"],
    eqSortKey: "193",
    done: true,
    imgCount: 2,
    equation: "x = \\dfrac{3a^{2}t^{4}+4a^{2}t^{2}-2a\\,y_{0}\\,t^{3}-a\\,x_{0}\\,t^{2}-4a\\,y_{0}\\,t+x_{0}y_{0}\\,t+y_{0}^{2}}{a t^{2}-y_{0}t+x_{0}},\\quad y = -\\dfrac{a^{2}t^{5}-2a\\,x_{0}\\,t^{3}+a\\,y_{0}\\,t^{2}-4a\\,x_{0}\\,t+x_{0}^{2}t+x_{0}y_{0}}{a t^{2}-y_{0}t+x_{0}}",
    eqFind: ["y=", "y =", "x=", "x ="],
    imgSortKey: "193",
    images: {
      canonical: "Images/ParaNegPedal/ParaNegPedal01-360.avif",
      variant1: "Images/ParaNegPedal/ParaNegPedal02-360.avif"
    }
  },
  {
    id: "parabola-pedal-curve",
    title: "Parabola Pedal Curve",
    filename: "ParaPedal.html",
    aliases: ["Pedal of the Parabola"],
    eqSortKey: "194",
    done: true,
    imgCount: 3,
    equation: "x = \\dfrac{(x_{0}-a)\\,t^{2}+y_{0}\\,t}{t^{2}+1},\\quad y = \\dfrac{a\\,t^{3}+x_{0}\\,t+y_{0}}{t^{2}+1}",
    eqFind: ["y=", "y =", "x=", "x ="],
    imgSortKey: "194",
    images: {
      canonical: "Images/ParaPedal/ParaPedal01-360.avif",
      variant1: "Images/ParaPedal/ParaPedal02-360.avif",
      variant2: "Images/ParaPedal/ParaPedal03-360.avif"
    }
  },
  {
    id: "parabolic-spiral",
    title: "Parabolic spiral",
    filename: "ParaSpiral.html",
    aliases: [],
    eqSortKey: "195",
    done: true,
    imgCount: 3,
    equation: "r = a + b\\sqrt{\\theta}",
    eqFind: ["r=", "r =", "sqrt", "theta"],
    imgSortKey: "195",
    images: {
      canonical: "Images/ParaSpiral/ParaSpiral01-360.avif",
      variant1: "Images/ParaSpiral/ParaSpiral02-360.avif",
      variant2: "Images/ParaSpiral/ParaSpiral03-360.avif"
    }
  },
  {
    id: "paracycloid",
    title: "Paracycloid",
    filename: "Paracycloid.html",
    aliases: ["Hypercycloid", "Pseudocycloidal Curve"],
    eqSortKey: "196",
    done: true,
    imgCount: 10,
    equation: "x = a\\bigl(\\omega\\cosh(\\omega t)\\cos t + \\sinh(\\omega t)\\sin t\\bigr), y = a\\bigl(\\omega\\cosh(\\omega t)\\sin t - \\sinh(\\omega t)\\cos t\\bigr), \\quad x = a\\bigl(\\omega\\sinh(\\omega t)\\cos t + \\cosh(\\omega t)\\sin t\\bigr), y = a\\bigl(\\omega\\sinh(\\omega t)\\sin t - \\cosh(\\omega t)\\cos t\\bigr)",
    eqFind: ["x=", "x =", "cosh", "sinh", "sin", "y=", "y =", "cos", "omega"],
    imgSortKey: "196",
    images: {
      canonical: "Images/Paracycloid/Paracycloid01-360.avif",
      variant1: "Images/Paracycloid/Paracycloid05-360.avif",
      variant2: "Images/Paracycloid/Paracycloid10-360.avif"
    }
  },
  {
    id: "paschen-curve",
    title: "Paschen Curve",
    filename: "Paschen.html",
    aliases: ["Breakdown Voltage-pd Curve"],
    eqSortKey: "197",
    done: true,
    imgCount: 2,
    equation: "V_{B} = \\dfrac{B \\cdot pd}{\\ln(A \\cdot pd)-\\ln\\bigl[\\ln\\bigl(1+\\frac{1}{\\gamma}\\bigr)\\bigr]}, \\quad pd_{\\min} = \\dfrac{e \\cdot \\ln\\bigl(1+\\frac{1}{\\gamma}\\bigr)}{A}",
    eqFind: ["ln", "gamma"],
    imgSortKey: "197",
    images: {
      canonical: "Images/Paschen/Paschen01-360.avif",
      variant1: "Images/Paschen/Paschen02-360.avif"
    }
  },
  {
    id: "pearls-of-sluze",
    title: "Pearls of Sluze",
    filename: "PearlsOfSluze.html",
    aliases: ["Pearls of Sluse"],
    eqSortKey: "198",
    done: true,
    imgCount: 6,
    equation: "y^{m} = k\\, x^{n} (a-x)^{b}, \\quad r = a\\,\\dfrac{\\cos(\\theta)}{\\sin^{n}(\\theta)}",
    eqFind: ["y^", "x^", "cos", "sin", "theta", "r=", "r ="],
    imgSortKey: "198",
    images: {
      canonical: "Images/PearlsOfSluze/PearlsOfSluze01-360.avif",
      variant1: "Images/PearlsOfSluze/PearlsOfSluze03-360.avif",
      variant2: "Images/PearlsOfSluze/PearlsOfSluze06-360.avif"
    }
  },
  {
    id: "pendulum-isoenergy-curve",
    title: "Pendulum Isoenergy Curve",
    filename: "PendulumEnergy.html",
    aliases: ["Isoenergy Curve of the Pendulum", "Horus Eyes", "Almond Eyes", "Cat Eyes"],
    eqSortKey: "199",
    done: true,
    imgCount: 2,
    equation: "y^{2}-b^{2}\\cos\\!\\left(\\frac{x}{a}\\right)=k\\,b^{2}, \\quad y=\\pm b\\sqrt{k+\\cos\\!\\left(\\frac{x}{a}\\right)}",
    eqFind: ["y=", "y =", "y^2", "sqrt", "cos"],
    imgSortKey: "199",
    images: {
      canonical: "Images/PendulumEnergy/PendulumEnergy01-360.avif",
      variant1: "Images/PendulumEnergy/PendulumEnergy02-360.avif"
    }
  },
  {
    id: "periapsis-precession-curve",
    title: "Periapsis Precession Curve",
    filename: "Periapsis.html",
    aliases: ["Precessing Ellipse", "Orbital Precession Curve"],
    eqSortKey: "200",
    done: true,
    imgCount: 4,
    equation: "r = \\dfrac{p}{1+e\\cdot\\cos\\left(\\dfrac{\\theta-\\omega_{0}}{1+\\Delta\\omega/360}\\right)}, \\quad r = \\dfrac{p}{1+e\\cdot\\cos\\bigl(k(\\theta-\\omega_{0})\\bigr)}",
    eqFind: ["r=", "r =", "cos", "sin", "theta", "omega"],
    imgSortKey: "200",
    images: {
      canonical: "Images/Periapsis/Periapsis01-360.avif",
      variant1: "Images/Periapsis/Periapsis03-360.avif",
      variant2: "Images/Periapsis/Periapsis04-360.avif"
    }
  },
  {
    id: "pericycloid-curve",
    title: "Pericycloid Curve",
    filename: "Pericycloid.html",
    aliases: ["Epicycloid"],
    eqSortKey: "201",
    done: true,
    imgCount: 7,
    equation: "x=(R+r)\\cos(t)-r\\cos\\Bigl(\\dfrac{R+r}{r}t\\Bigr),\\quad y=(R+r)\\sin(t)-r\\sin\\Bigl(\\dfrac{R+r}{r}t\\Bigr)",
    eqFind: ["x=", "x =", "cos", "sin", "y=", "y ="],
    imgSortKey: "201",
    images: {
      canonical: "Images/Pericycloid/Pericycloid01-360.avif",
      variant1: "Images/Pericycloid/Pericycloid05-360.avif",
      variant2: "Images/Pericycloid/Pericycloid06-360.avif"
    }
  },
  {
    id: "piriform-curve",
    title: "Piriform Curve",
    filename: "Piriform.html",
    aliases: ["Pear-shaped Curve","Peg-top Curve"],
    eqSortKey: "202",
    done: true,
    imgCount: 4,
    equation: "a^{4} y^{2} = b^{2} x^{3} (2a - x), \\quad x = a\\bigl(1 + \\sin(t)\\bigr),\\quad y = b \\cdot \\cos(t) \\cdot \\bigl(1 + \\sin(t)\\bigr)",
    eqFind: ["x=", "x =", "cos", "sin", "y=", "y =", "y^2", "x^3"],
    imgSortKey: "202",
    images: {
      canonical: "Images/Piriform/Piriform01-360.avif",
      variant1: "Images/Piriform/Piriform02-360.avif",
      variant2: "Images/Piriform/Piriform04-360.avif"
    }
  },
  {
    id: "planck-distribution-curves",
    title: "Planck Distribution Curves",
    filename: "Planck.html",
    aliases: ["Planck spectrum", "Blackbody Radiation Curve", "Stefan–Boltzmann law", "Quantum Oscillator"],
    eqSortKey: "203",
    done: true,
    imgCount: 5,
    equation: "y = a \\cdot \\coth(b \\cdot x), \\quad y = a \\cdot \\dfrac{x^{3}}{e^{b \\cdot x}-1}, \\quad y = a \\cdot x^{4}",
    eqFind: ["y=", "y =", "coth", "e^", "x^3", "x^4"],
    imgSortKey: "203",
    images: {
      canonical: "Images/Planck/Planck01-360.avif",
      variant1: "Images/Planck/Planck03-360.avif",
      variant2: "Images/Planck/Planck05-360.avif"
    }
  },
  {
    id: "plateau-curve",
    title: "Plateau Curve",
    filename: "Plateau.html",
    aliases: ["Spider Curve"],
    eqSortKey: "204",
    done: true,
    imgCount: 12,
    equation: "x = a\\dfrac{\\sin((m+n)t)}{\\sin((m-n)t)},\\quad y = 2a\\dfrac{\\sin(mt)\\sin(nt)}{\\sin((m-n)t)}",
    eqFind: ["y=", "y =", "x=", "x =", "sin"],
    imgSortKey: "204",
    images: {
      canonical: "Images/Plateau/Plateau06-360.avif",
      variant1: "Images/Plateau/Plateau11-360.avif",
      variant2: "Images/Plateau/Plateau12-360.avif"
    }
  },
  {
    id: "poinsot-spiral-curve",
    title: "Poinsot Spiral",
    filename: "Poinsot.html",
    aliases: ["Cotes’ Spiral,"],
    eqSortKey: "205",
    done: true,
    imgCount: 9,
    equation: "r = \\dfrac{a}{\\alpha\\cdot\\cosh(j\\theta)+\\beta\\cdot\\sinh(k\\theta)}, \\quad r = \\dfrac{a}{\\cosh(k\\theta)}, \\quad r = \\dfrac{a}{\\sinh(k\\theta)}, \\quad r = \\dfrac{a\\cdot e^{\\pm k\\theta}}{\\alpha}",
    eqFind: ["r=", "r =", "cosh", "sinh", "e^", "alpha", "beta", "theta"],
    imgSortKey: "205",
    images: {
      canonical: "Images/Poinsot/Poinsot02-360.avif",
      variant1: "Images/Poinsot/Poinsot03-360.avif",
      variant2: "Images/Poinsot/Poinsot05-360.avif"
    }
  },
  {
    id: "poisson-distribution",
    title: "Poisson Distribution",
    filename: "Poisson.html",
    aliases: ["Poisson Probability Mass Function", "Poisson PMF", "Poisson CDF", "Poisson Cumulative Distribution Function"],
    eqSortKey: "206",
    done: true,
    imgCount: 6,
    equation: "y = a \\cdot \\dfrac{\\lambda^{x}\\, e^{-\\lambda}}{x!}, x=0,1,2,\\ldots, \\quad y \\approx \\dfrac{a}{\\sqrt{2\\pi\\lambda}}\\, e^{-\\frac{(x-\\lambda)^{2}}{2\\lambda}}, \\mu=\\lambda,\\; \\sigma^{2}=\\lambda, \\quad y = a \\cdot e^{-\\lambda} \\sum_{i=0}^{\\lfloor x \\rfloor} \\dfrac{\\lambda^{i}}{i!}, \\quad y = a \\cdot \\Phi\\!\\left(\\dfrac{x+0.5-\\lambda}{\\sqrt{\\lambda}}\\right), \\Phi(x)=\\int_{-\\infty}^{x} \\dfrac{1}{\\sqrt{2\\pi}}\\, e^{-\\frac{t^{2}}{2}}\\, dt",
    eqFind: ["y=", "y =", "lambda", "x!", "sqrt", "e^", "int", "dt", "mu", "sigma^2", "phi"],
    imgSortKey: "206",
    images: {
      canonical: "Images/Poisson/Poisson01-360.avif",
      variant1: "Images/Poisson/Poisson02-360.avif",
      variant2: "Images/Poisson/Poisson03-360.avif"
    }
  },
  {
    id: "polygasteroid",
    title: "Polygasteroid",
    filename: "Polygasteroid.html",
    aliases: [],
    eqSortKey: "207",
    done: true,
    imgCount: 6,
    equation: "r = \\dfrac{a}{1 + e \\cdot \\cos(n\\theta)}",
    eqFind: ["r=", "r =", "theta"],
    imgSortKey: "207",
    images: {
      canonical: "Images/Polygasteroid/Polygasteroid01-360.avif",
      variant1: "Images/Polygasteroid/Polygasteroid03-360.avif",
      variant2: "Images/Polygasteroid/Polygasteroid06-360.avif"
    }
  },
  {
    id: "power-function-curve",
    title: "Power Function Curve",
    filename: "PowerFunc.html",
    aliases: ["Power-law Curve"],
    eqSortKey: "208",
    done: true,
    imgCount: 1,
    equation: "y = k \\cdot x^{a}",
    eqFind: ["y=", "y =", "x^"],
    imgSortKey: "208",
    images: {
      canonical: "Images/PowerFunc/PowerFunc01-360.avif"
    }
  },
  {
    id: "pursuit-curve",
    title: "Pursuit Curve",
    filename: "Pursuit.html",
    aliases: ["Dog Curve", "Pursuit-Evasion Curve", "Radiodrome"],
    eqSortKey: "209",
    done: true,
    imgCount: 4,
    equation: "x_{t} = x_{t0} + s_{t}\\, t, y_{t} = 0, \\quad \\dfrac{dx}{dt} = \\dfrac{s_{d}(x_{t}-x)}{\sqrt{(x_{t}-x)^{2}+y^{2}}}, \\dfrac{dy}{dt} = \\dfrac{-s_{d}\, y}{\sqrt{(x_{t}-x)^{2}+y^{2}}}",
    eqFind: ["dx/dt", "dy/dt", "sqrt", "x^2", "y^2"],
    imgSortKey: "209",
    images: {
      canonical: "Images/Pursuit/Pursuit01-360.avif",
      variant1: "Images/Pursuit/Pursuit03-360.avif",
      variant2: "Images/Pursuit/Pursuit04-360.avif"
    }
  },
  {
    id: "quadratrix-of-abdank-abramowicz",
    title: "Quadratrix of Abdank-Abramowicz",
    filename: "Abdank.html",
    aliases: ["Circular Integral Curve"],
    eqSortKey: "210",
    done: true,
    imgCount: 4,
    equation: "x = R\\sin(t), y = \\dfrac{R^{2}}{2}\\bigl(t + \\sin(t)\\cos(t)\\bigr), \\quad y = \\dfrac{R^{2}}{2}\\arcsin\\dfrac{x}{R} + \\dfrac{x}{2}\\sqrt{R^{2}-x^{2}}",
    eqFind: ["y=", "y =", "x=", "x =", "sin", "cos", "arcsin", "sqrt"],
    imgSortKey: "210",
    images: {
      canonical: "Images/Abdank/Abdank01-360.avif",
      variant1: "Images/Abdank/Abdank03-360.avif",
      variant2: "Images/Abdank/Abdank04-360.avif"
    }
  },
  {
    id: "quadratrix-of-hippias",
    title: "Quadratrix of Hippias",
    filename: "Hippias.html",
    aliases: ["Trisectrix of Hippias", "Quadratrix of Dinostratus", "Sectrix of Hippias"],
    eqSortKey: "211",
    done: true,
    imgCount: 1,
    equation: "x = y \\cdot \\cot\\left(\\dfrac{\\pi y}{2a}\\right), \\quad r = \\dfrac{2a\\theta}{\\pi\\sin\\theta}, \\quad x = \\dfrac{2a\\cdot t\\cdot\\cot(t)}{\\pi}, y = \\dfrac{2a\\cdot t}{\\pi}",
    eqFind: ["x=", "x =", "cot", "sin", "theta"],
    imgSortKey: "211",
    images: {
      canonical: "Images/Hippias/Hippias01-360.avif"
    }
  },
  {
    id: "quartic-egg-curve",
    title: "Quartic Egg Curve",
    filename: "QuartEgg.html",
    aliases: ["Wassenaar Egg Curve"],
    eqSortKey: "212",
    done: true,
    imgCount: 7,
    equation: "\\bigl(y^{2}(1-2a)-x^{2}+(a^{2}b^{2}-1)\\bigr)^{2} = 4x^{2}\\bigl(1-(1-b)^{2}y^{2}\\bigr), \\quad x = s\\bigl(b\\cos t - \\sqrt{1-a^{2}\sin^{2}t}\\bigr), y = s(a+b)\\sin t, \\quad x = b\\cos a_{1} - \\cos a_{2}, y = b\\sin a_{1} + \\sin a_{2}",
    eqFind: ["y=", "y =", "x=", "x =", "sin^2", "cos", "theta", "y^2", "x^2"],
    imgSortKey: "212",
    images: {
      canonical: "Images/QuartEgg/QuartEgg02-360.avif",
      variant1: "Images/QuartEgg/QuartEgg06-360.avif",
      variant2: "Images/QuartEgg/QuartEgg07-360.avif"
    }
  },
  {
    id: "quatrefoil",
    title: "Quatrefoil",
    filename: "Quatrefoil.html",
    aliases: ["Quadrifolium", "Four-Leaved Rose", "Four-Leaved Clover"],
    eqSortKey: "213",
    done: true,
    imgCount: 6,
    equation: "r = a \\cdot \\sin(2\\theta), \\quad r = a \\cdot \\sqrt{\\lvert\\sin(2\\theta)\\rvert}, \\quad r = a \\cdot \\bigl(\\sin(2\\theta) + \\tfrac{\\sin(6\\theta)}{4}\\bigr), \\quad r = a \\cdot \\bigl(\\lvert\\sin(2\\theta)\\rvert + \\tfrac{\\sin^{2}(4\\theta)}{4}\\bigr), \\quad r = a \\cdot \\bigl(\\sqrt{\\lvert\\sin(2\\theta)\\rvert} + \\tfrac{\\sin^{2}(4\\theta)}{4}\\bigr), \\quad r = a \\cdot \\bigl(\\sin^{2}(2\\theta) + \\tfrac{\\sin^{2}(4\\theta)}{2}\\bigr)",
    eqFind: ["r=", "r =", "sin^2", "theta"],
    imgSortKey: "213",
    images: {
      canonical: "Images/Quatrefoil/Quatrefoil01-360.avif",
      variant1: "Images/Quatrefoil/Quatrefoil04-360.avif",
      variant2: "Images/Quatrefoil/Quatrefoil06-360.avif"
    }
  },
  {
    id: "quinticheart",
    title: "Quintic Heart",
    filename: "QuinticHeart.html",
    aliases: [],
    eqSortKey: "214",
    done: true,
    imgCount: 1,
    equation: "r = \\dfrac{a \\cdot \\sin(\\theta)}{1 + \\cos(\\theta)\\cos(2\\theta)}, \\quad y^{5} + 2x^{2}y^{3} + 5x^{4}y - 2a(x^{2}+y^{2})^{2} + a^{2}y(x^{2}+y^{2}) = 0",
    eqFind: ["r=", "r =", "sin", "theta", "cos", "y^5", "x^4", "x^2", "y^2"],
    imgSortKey: "214",
    images: {
      canonical: "Images/QuinticHeart/QuinticHeart01-360.avif"
    }
  },
  {
    id: "quinticserpentine",
    title: "Quintic Serpentine",
    filename: "QuinticSerpentine.html",
    aliases: ["Right Serpentine 2 Curve"],
    eqSortKey: "215",
    done: true,
    imgCount: 2,
    equation: "r^{2} = a^{2}\\cot\\!\\left(\\dfrac{\\theta}{2}\\right), \\quad y(x^{2}+y^{2})^{2} - 2a^{2}x(x^{2}+y^{2}) - a^{4}y = 0",
    eqFind: ["r=", "r =", "cot", "theta", "x^2", "y^2"],
    imgSortKey: "215",
    images: {
      canonical: "Images/QuinticSerpentine/QuinticSerpentine01-360.avif",
      variant1: "Images/QuinticSerpentine/QuinticSerpentine02-360.avif"
    }
  },
  {
    id: "raindrop-curve",
    title: "Raindrop Curve",
    filename: "Raindrop.html",
    aliases: ["Artist’s Raindrop Curve"],
    eqSortKey: "216",
    done: true,
    imgCount: 1,
    equation: "x = a\\cdot\\dfrac{3(\\cos t + 1)\\sin t}{4\\cos t + 5},\\qquad y = -a\\cdot\\dfrac{6\\cos^{2}t + 14\\cos t + 7}{2(4\\cos t + 5)}",
    eqFind: ["x=", "y=", "x =", "y =", "cos^2", "sin"],
    imgSortKey: "216",
    images: {
      canonical: "Images/Raindrop/Raindrop01-360.avif"
    }
  },
  {
    id: "ramphoid-curve",
    title: "Ramphoid Curve",
    filename: "Ramphoid.html",
    aliases: ["Ramphoid Cusp"],
    eqSortKey: "217",
    done: true,
    imgCount: 5,
    equation: "x = a\\cdot t^{4}, y = a(t^{2}+t^{3}), \\quad x = a\\cdot t^{b}, y = a(t^{c}+t^{d})",
    eqFind: ["x=", "y=", "x =", "y =", "t^4", "t^3"],
    imgSortKey: "217",
    images: {
      canonical: "Images/Ramphoid/Ramphoid03-360.avif",
      variant1: "Images/Ramphoid/Ramphoid01-360.avif",
      variant2: "Images/Ramphoid/Ramphoid02-360.avif"
    }
  },
  {
    id: "rational-bicircular-quartic-curve",
    title: "Rational Bicircular Quartic Curve",
    filename: "RatBicircular.html",
    aliases: ["Bicircular Rational Quartic Curve"],
    eqSortKey: "218",
    done: true,
    imgCount: 13,
    equation: "(x^{2} + y^{2} - c x - d y)^{2} = a^{2} x^{2} + e b^{2} y^{2}, \\quad r = c \\cdot \\cos(\\theta) + d \\cdot \\sin(\\theta) \\pm \\sqrt{a^{2}\\cos^{2}(\\theta) + e \\cdot b^{2}\\sin^{2}(\\theta)}",
    eqFind: ["x^2", "y^2", "r=", "r =", "sin^2", "cos^2", "theta"],
    imgSortKey: "218",
    images: {
      canonical: "Images/RatBicircular/RatBicircular01-360.avif",
      variant1: "Images/RatBicircular/RatBicircular02-360.avif",
      variant2: "Images/RatBicircular/RatBicircular03-360.avif"
    }
  },
  {
    id: "rational-circular-cubic-curve",
    title: "Rational Circular Cubic Curve",
    filename: "RatCircCubic.html",
    aliases: ["Circular Rational Cubic Curve"],
    eqSortKey: "219",
    done: true,
    imgCount: 3,
    equation: "r = \\dfrac{d}{\\cos\\theta} + 2a\\cos\\theta + 2b\\sin\\theta, \\quad r = \\dfrac{a\\cos(2\\theta)+b\\sin(2\\theta)+a+d}{\\cos\\theta}, \\quad x(x^{2}+y^{2})-(d+2a)x^{2}-2bxy-dy^{2}=0",
    eqFind: ["x^2", "y^2", "r=", "r =", "sin", "cos", "theta"],
    imgSortKey: "219",
    images: {
      canonical: "Images/RatCircCubic/RatCircCubic01-360.avif",
      variant1: "Images/RatCircCubic/RatCircCubic02-360.avif",
      variant2: "Images/RatCircCubic/RatCircCubic03-360.avif"
    }
  },
  {
    id: "reciprocal-exponential-curve",
    title: "Reciprocal Exponential Curve",
    filename: "RecipExp.html",
    aliases: [],
    eqSortKey: "220",
    done: true,
    imgCount: 2,
    equation: "y = a \\cdot e^{b/x}",
    eqFind: ["y=", "y =", "e^"],
    imgSortKey: "220",
    images: {
      canonical: "Images/RecipExp/RecipExp01-360.avif",
      variant1: "Images/RecipExp/RecipExp02-360.avif"
    }
  },
  {
    id: "reciprocal-power-exponential-curve",
    title: "Reciprocal Power Exponential Curve",
    filename: "RecipPowerExp.html",
    aliases: ["Steiner's Problem Curve"],
    eqSortKey: "221",
    done: true,
    imgCount: 2,
    equation: "y = a \\cdot x^{b/x}",
    eqFind: ["y=", "y =", "e^"],
    imgSortKey: "221",
    images: {
      canonical: "Images/RecipPowerExp/RecipPowerExp01-360.avif",
      variant1: "Images/RecipPowerExp/RecipPowerExp02-360.avif"
    }
  },
  {
    id: "rectangular-hyperbola",
    title: "Rectangular Hyperbola",
    filename: "RectHyperbola.html",
    aliases: ["Right Hyperbola", "Equilateral Hyperbola"],
    eqSortKey: "222",
    done: true,
    imgCount: 3,
    equation: "y^{2} - x^{2} = a^{2}, \\quad x^{2} - y^{2} = a^{2}, \\quad x \\cdot y = a",
    eqFind: ["x^2", "y^2"],
    imgSortKey: "222",
    images: {
      canonical: "Images/RectHyperbola/RectHyperbola01-360.avif",
      variant1: "Images/RectHyperbola/RectHyperbola02-360.avif",
      variant2: "Images/RectHyperbola/RectHyperbola03-360.avif"
    }
  },
  {
    id: "rectellipse",
    title: "Rectellipse",
    filename: "RectEllipse.html",
    aliases: [],
    eqSortKey: "223",
    done: true,
    imgCount: 2,
    equation: "\\left(\\dfrac{x}{a}\\right)^{4} + \\left(\\dfrac{y}{b}\\right)^{4} = 1, \\quad s^{2}\\cdot\\dfrac{x^{2}}{a^{2}}\\cdot\\dfrac{y^{2}}{b^{2}} - \\left(\\dfrac{x^{2}}{a^{2}} + \\dfrac{y^{2}}{b^{2}}\\right) + 1 = 0",
    eqFind: ["x^4", "y^4", "x^2", "y^2"],
    imgSortKey: "223",
    images: {
      canonical: "Images/RectEllipse/RectEllipse01-360.avif",
      variant1: "Images/RectEllipse/RectEllipse02-360.avif"
    }
  },
  {
    id: "ribaucour-curve",
    title: "Ribaucour Curve",
    filename: "Ribaucour.html",
    aliases: ["Football Curve"],
    eqSortKey: "224",
    done: true,
    imgCount: 6,
    equation: "x = k\\,a\\int \\cos^{k}(u)\\,du, y = a\\cos^{k}(t), \\quad R_{c} = -k\\,N",
    eqFind: ["int", "du", "x=", "x =", "y=", "y =", "cos^"],
    imgSortKey: "224",
    images: {
      canonical: "Images/Ribaucour/Ribaucour01-360.avif",
      variant1: "Images/Ribaucour/Ribaucour02-360.avif",
      variant2: "Images/Ribaucour/Ribaucour05-360.avif"
    }
  },
  {
    id: "richards-curve",
    title: "Richards Curve",
    filename: "Richards.html",
    aliases: ["Generalized Logistic Function"],
    eqSortKey: "225",
    done: true,
    imgCount: 2,
    equation: "y = A + \\dfrac{K-A}{\\bigl(C + Q\\, e^{-B t}\\bigr)^{1/\\nu}}",
    eqFind: ["y=", "y =", "e^"],
    imgSortKey: "225",
    images: {
      canonical: "Images/Richards/Richards01-360.avif",
      variant1: "Images/Richards/Richards02-360.avif"
    }
  },
  {
    id: "rose-curve",
    title: "Rose Curve",
    filename: "Rose.html",
    aliases: ["Quadrifolium", "Rhodonea Curve", "Grandi's Rose Curve"],
    eqSortKey: "226",
    done: true,
    imgCount: 15,
    equation: "r = a \\cdot \\cos\\Bigl(\\frac{p}{q}\\theta\\Bigr), \\quad r = a \\cdot \\cos^{c}\\Bigl(\\frac{p}{q}\\theta\\Bigr)",
    eqFind: ["theta", "r=", "r =", "cos^"],
    imgSortKey: "226",
    images: {
      canonical: "Images/Rose/Rose01-360.avif",
      variant1: "Images/Rose/Rose06-360.avif",
      variant2: "Images/Rose/Rose15-360.avif"
    }
  },
  {
    id: "rosillo-curve",
    title: "Rosillo Curve",
    filename: "Rosillo.html",
    aliases: [],
    eqSortKey: "227",
    done: true,
    imgCount: 12,
    equation: "x = a\\cos(t), y = \\dfrac{(b-a\\cos(t))\\,a\\sin(t)}{c-a\\cos(t)}, \\quad y^{2}(c-x)^{2} = (b-x)^{2}(a^{2}-x^{2})",
    eqFind: ["x=", "x =", "y=", "y =", "cos", "sin", "x^2", "y^2"],
    imgSortKey: "227",
    images: {
      canonical: "Images/Rosillo/Rosillo01-360.avif",
      variant1: "Images/Rosillo/Rosillo02-360.avif",
      variant2: "Images/Rosillo/Rosillo04-360.avif"
    }
  },
  {
    id: "sacre-biquartic-curve",
    title: "Sacré Biquartic Curve",
    filename: "Sacre.html",
    aliases: [],
    eqSortKey: "228",
    done: true,
    imgCount: 1,
    equation: "x^{8} + 4x^{6}y + y^{3}(y - 1) + 3x^{4}(2y - 3) + 2x^{2}y^{2}(2y + 3) = 0, \\quad x = a \\cdot \\sin(3t)\\cos(t), y = a \\cdot \\sin^{2}(3t)\\sin^{2}(t)",
    eqFind: ["x=", "y=", "x =", "y =", "cos", "sin^2", "x^8", "x^6", "x^4", "x^2", "y^2", "y^3"],
    imgSortKey: "228",
    images: {
      canonical: "Images/Sacre/Sacre01-360.avif"
    }
  },
  {
    id: "salmon-curve",
    title: "Salmon Quartic Curve",
    filename: "SalmonQ.html",
    aliases: [],
    eqSortKey: "229",
    done: true,
    imgCount: 3,
    equation: "(x^{2}-a^{2})^{2}+(y^{2}-a^{2})^{2}=b^{4}, \\quad x=\\pm\\sqrt{a^{2}+b^{2}\\cos t}, y=\\pm\\sqrt{a^{2}+b^{2}\\sin t}, \\quad (x^{2}-a_{1}^{2})^{2}+(y^{2}-a_{2}^{2})^{2}=b^{4}, \\quad x=\\sqrt{a_{2}^{2}+b^{2}\\cos t}, y=\\sqrt{a_{1}^{2}+b^{2}\\sin t}",
    eqFind: ["x=", "x =", "y=", "y =", "cos", "sin", "x^2", "y^2", "x^4", "y^4", "sqrt"],
    imgSortKey: "229",
    images: {
      canonical: "Images/SalmonQ/SalmonQ01-360.avif",
      variant1: "Images/SalmonQ/SalmonQ02-360.avif",
      variant2: "Images/SalmonQ/SalmonQ03-360.avif"
    }
  },
  {
    id: "sawblade-curve",
    title: "Sawblade Curve",
    filename: "Sawblade.html",
    aliases: [],
    eqSortKey: "230",
    done: true,
    imgCount: 3,
    equation: "x = \\sqrt{R^{2}-d\\,\\lvert\\sin(n\\theta)\\rvert^{2}}\\,\\cos(\\theta)-\\alpha\\cdot d\\,\\lvert\\sin(n\\theta)\\rvert\\,\\sin(\\theta), y = \\sqrt{R^{2}-d\\,\\lvert\\sin(n\\theta)\\rvert^{2}}\\,\\sin(\\theta)+\\alpha\\cdot d\\,\\lvert\\sin(n\\theta)\\rvert\\,\\cos(\\theta)",
    eqFind: ["y=", "y =", "cos", "sec"],
    imgSortKey: "230",
    images: {
      canonical: "Images/Sawblade/Sawblade01-360.avif",
      variant1: "Images/Sawblade/Sawblade02-360.avif",
      variant2: "Images/Sawblade/Sawblade03-360.avif"
    }
  },
  {
    id: "secant-curve",
    title: "Secant Curve",
    filename: "Secant.html",
    aliases: [],
    eqSortKey: "231",
    done: true,
    imgCount: 9,
    equation: "y = a \\cdot \\sec(bx) = \\dfrac{a}{\\cos(bx)}",
    eqFind: ["y=", "y =", "cos", "sec"],
    imgSortKey: "231",
    images: {
      canonical: "Images/Secant/Secant06-360.avif",
      variant1: "Images/Secant/Secant07-360.avif",
      variant2: "Images/Secant/Secant09-360.avif"
    }
  },
  {
    id: "sectrix-of-maclaurin",
    title: "Sectrix of MacLaurin",
    filename: "SectrixM.html",
    aliases: [],
    eqSortKey: "232",
    done: true,
    imgCount: 15,
    equation: "r = a \\cdot \\dfrac{\\sin(\\theta_{0}+k\\theta)}{\\sin(\\theta_{0}+(k-1)\\theta)}",
    eqFind: ["r=", "r =", "sin", "theta"],
    imgSortKey: "232",
    images: {
      canonical: "Images/SectrixM/SectrixM02-360.avif",
      variant1: "Images/SectrixM/SectrixM11-360.avif",
      variant2: "Images/SectrixM/SectrixM12-360.avif"
    }
  },
  {
    id: "semicubical-parabola",
    title: "Semicubical Parabola",
    filename: "SemicubParab.html",
    aliases: ["Neile’s Parabola", "Cuspidal Cubic Curve"],
    eqSortKey: "233",
    done: true,
    imgCount: 1,
    equation: "a \\cdot y^{2} = x^{3}, \\quad x = a \\cdot t^{2}, y = \\pm a \\cdot t^{3}",
    eqFind: ["x=", "y=", "x =", "y =", "x^2", "y^2", "x^3"],
    imgSortKey: "233",
    images: {
      canonical: "Images/SemicubParab/SemicubParab01-360.avif"
    }
  },
  {
    id: "serpentine-curve",
    title: "Serpentine Curve",
    filename: "Serpentine.html",
    aliases: ["Anguinea"],
    eqSortKey: "234",
    done: true,
    imgCount: 1,
    equation: "y = \\dfrac{a \\cdot d \\cdot x}{x^{2}+d^{2}}, \\quad x = d \\cdot \\tan\\!\\left(\\dfrac{t}{2}\\right), y = \\dfrac{a}{2}\\sin(t), \\quad r^{2} = \\dfrac{d}{\\cos(\\theta)}\\left(\\dfrac{a}{\\sin(\\theta)}-\\dfrac{d}{\\cos(\\theta)}\\right)",
    eqFind: ["x=", "y=", "x =", "y =", "x^2", "tan", "sin", "r^2", "theta", "cos"],
    imgSortKey: "234",
    images: {
      canonical: "Images/Serpentine/Serpentine01-360.avif"
    }
  },
  {
    id: "sine-curve",
    title: "Sine Curve",
    filename: "Sine.html",
    aliases: ["Sinusoid"],
    eqSortKey: "235",
    done: true,
    imgCount: 11,
    equation: "y = a \\cdot \\sin(bx)",
    eqFind: ["y=", "y =", "sin"],
    imgSortKey: "235",
    images: {
      canonical: "Images/Sine/Sine07-360.avif",
      variant1: "Images/Sine/Sine09-360.avif",
      variant2: "Images/Sine/Sine11-360.avif"
    }
  },
  {
    id: "sine-summation-curve",
    title: "Sine Summation Curve",
    filename: "SineSum.html",
    aliases: ["Sum of Sines Curve"],
    eqSortKey: "236",
    done: true,
    imgCount: 19,
    equation: "y = a \\cdot \\sin(x) + b \\cdot \\sin(c \\cdot x)",
    eqFind: ["y=", "y =", "sin"],
    imgSortKey: "236",
    images: {
      canonical: "Images/SineSum/SineSum03-360.avif",
      variant1: "Images/SineSum/SineSum07-360.avif",
      variant2: "Images/SineSum/SineSum11-360.avif"
    }
  },
  {
    id: "sine-trochoid-curve",
    title: "Sine Trochoid Curve",
    filename: "SineTrochoid.html",
    aliases: [],
    eqSortKey: "237",
    done: true,
    imgCount: 26,
    equation: "\\mathbf{r}(t)=\\begin{pmatrix}t\\\\ \\sin t\\end{pmatrix}+a'\\,\\mathbf{N}(t)+d'\\,\\mathbf{U}(t)",
    eqFind: ["sin"],
    imgSortKey: "237",
    images: {
      canonical: "Images/SineTrochoid/SineTrochoid01-360.avif",
      variant1: "Images/SineTrochoid/SineTrochoid14-360.avif",
      variant2: "Images/SineTrochoid/SineTrochoid18-360.avif"
    }
  },
  {
    id: "sinh-spiral",
    title: "Sinh Spiral",
    filename: "SinhSpiral.html",
    aliases: ["Spiral of the hyperbolic sine"],
    eqSortKey: "238",
    done: true,
    imgCount: 26,
    equation: "r = a \\cdot \\sinh(b\\theta)",
    eqFind: ["r=", "r =","sinh", "theta"],
    imgSortKey: "238",
    images: {
      canonical: "Images/SinhSpiral/SinhSpiral01-360.avif",
      variant1: "Images/SinhSpiral/SinhSpiral02-360.avif",
      variant2: "Images/SinhSpiral/SinhSpiral03-360.avif"
    }
  },
  {
    id: "sinusoidal-radius-curve",
    title: "Sinusoidal Radius Curve",
    filename: "SinusoidalRadius.html",
    aliases: ["Guitar Pick Curve"],
    eqSortKey: "239",
    done: true,
    imgCount: 51,
    equation: "x = a(1-\\lambda^2)\\int_{0}^{t}\\frac{\\cos u}{\\cosh(\\sqrt{1-\\lambda^2}\\,u)-\\lambda}\\,du, y = a(1-\\lambda^2)\\int_{0}^{t}\\frac{\\sin u}{\\cosh(\\sqrt{1-\\lambda^2}\\,u)-\\lambda}\\,du, \\quad x = 2a\\int_{0}^{t}\\frac{\\cos u}{1+u^2}\\,du, y = 2a\\int_{0}^{t}\\frac{\\sin u}{1+u^2}\\,du, \\quad x = an^2\\int_{0}^{t}\\frac{\\cos u}{\\lambda-\\cos(nu)}\\,du, y = an^2\\int_{0}^{t}\\frac{\\sin u}{\\lambda-\\cos(nu)}\\,du, \\\\ x = a\\int\\cos\\bigl(k\\ln\\lvert\\tan(u/2)\\rvert\\bigr)\\,du, y = a\\int\\sin\\bigl(k\\ln\\lvert\\tan(u/2)\\rvert\\bigr)\\,du",
    eqFind: ["x=", "x =", "y=", "y =", "lambda", "int", "cos", "cosh", "sqrt", "du", "sin", "ln", "tan"],
    imgSortKey: "239",
    images: {
      canonical: "Images/SinusoidalRadius/SinusoidalRadius14-360.avif",
      variant1: "Images/SinusoidalRadius/SinusoidalRadius32-360.avif",
      variant2: "Images/SinusoidalRadius/SinusoidalRadius49-360.avif"
    }
  },
  {
    id: "sinusoidal-spiral",
    title: "Sinusoidal Spiral",
    filename: "SinSpiral.html",
    aliases: ["Maclaurin Spiral", "Sine Spiral"],
    eqSortKey: "240",
    done: true,
    imgCount: 39,
    equation: "r^{n} = a^{n}\\cos(n\\theta), \\quad r = a\\bigl[\\cos(n\\theta)\\bigr]^{1/n}",
    eqFind: ["r=", "r =","r^", "cos", "theta"],
    imgSortKey: "240",
    images: {
      canonical: "Images/SinSpiral/SinSpiral04-360.avif",
      variant1: "Images/SinSpiral/SinSpiral18-360.avif",
      variant2: "Images/SinSpiral/SinSpiral30-360.avif"
    }
  },
  {
    id: "slider-crank-mechanism-curve",
    title: "Slider-Crank Mechanism Curve",
    filename: "SliderCrank.html",
    aliases: ["Bérard Curve", "Ruiz-Castizo’s Quartic", "Coupler-point Curve"],
    eqSortKey: "241",
    done: true,
    imgCount: 4,
    equation: "x = b\\cos(t)+k\\bigl(a-b\\cos(t)\\bigr)-l\\cdot e\\cdot\\sqrt{c^{2}-\\bigl(a-b\\cos(t)\\bigr)^{2}}, \\quad y = b\\sin(t)+k\\cdot e\\cdot\\sqrt{c^{2}-\\bigl(a-b\\cos(t)\\bigr)^{2}}+l\\bigl(a-b\\cos(t)\\bigr)",
    eqFind: ["x=", "x =","y=", "y =", "cos^2", "sqrt", "sin"],
    imgSortKey: "241",
    images: {
      canonical: "Images/SliderCrank/SliderCrank02-360.avif",
      variant1: "Images/SliderCrank/SliderCrank04-360.avif",
      variant2: "Images/SliderCrank/SliderCrank05-360.avif"
    }
  },
  {
    id: "sluze-cubic-curve",
    title: "Sluze Cubic Curve",
    filename: "Sluze.html",
    aliases: ["Conchoid of de Sluze"],
    eqSortKey: "242",
    done: true,
    imgCount: 15,
    equation: "a(x-a)(x^{2}+y^{2})=b^{2}x^{2}, \\quad r = \\dfrac{a}{\\cos(\\theta)} + \\left(\\dfrac{b^{2}}{a}\\right)\\cos(\\theta), \\quad r = \\dfrac{a}{\\cos(n\\theta)} ± \\left(\\dfrac{b^{2}}{a}\\right)\\cos(n\\theta)",
    eqFind: ["r=", "r =","y^2", "x^2", "cos", "theta"],
    imgSortKey: "242",
    images: {
      canonical: "Images/Sluze/Sluze01-360.avif",
      variant1: "Images/Sluze/Sluze03-360.avif",
      variant2: "Images/Sluze/Sluze15-360.avif"
    }
  },
  {
    id: "spiral",
    title: "Spiral",
    filename: "Spiral.html",
    aliases: [],
    eqSortKey: "243",
    done: true,
    imgCount: 3,
    equation: "r = a + b\\theta^{c}\\bigl(1 + d(\\cos(f\\theta))^{1/g}\\bigr) + h\\,e^{i\\theta^{j}}",
    eqFind: ["r=", "r =","y^2", "x^2", "cos", "theta"],
    imgSortKey: "243",
    images: {
      canonical: "Images/Spiral/Spiral01-360.avif",
      variant1: "Images/Spiral/Spiral02-360.avif",
      variant2: "Images/Spiral/Spiral03-360.avif"
    }
  },
  {
    id: "spiral-of-theodorus",
    title: "Spiral of Theodorus",
    filename: "Theodorus.html",
    aliases: ["Square Root Spiral", "Pythagorean Spiral"],
    eqSortKey: "244",
    done: true,
    imgCount: 3,
    equation: "r(n) = a\\sqrt{n+1},\\quad \\theta(n) = \\sum_{k=1}^{n}\\arctan\\bigl(\\tfrac{1}{\\sqrt{k}}\\bigr)",
    eqFind: ["r=", "r =","sqrt", "arctan", "atan", "theta"],
    imgSortKey: "244",
    images: {
      canonical: "Images/Theodorus/Theodorus01-360.avif",
      variant1: "Images/Theodorus/Theodorus02-360.avif",
      variant2: "Images/Theodorus/Theodorus03-360.avif"
    }
  },
  {
    id: "spiric-section",
    title: "Spiric Section",
    filename: "SpiricSection.html",
    aliases: ["Spiric of Perseus"],
    eqSortKey: "245",
    done: true,
    imgCount: 3,
    equation: "(x^{2}+y^{2}+r^{2}+c^{2}-a^{2})^{2}=4c^{2}(x^{2}+r^{2}), \\quad x=\\sqrt{(c+a\\cos t)^{2}-r^{2}}, y=a\\sin t",
    eqFind: ["x=", "x =","sqrt", "y=", "y =", "x^2", "y^2", "r^2", "sin", "cos^2"],
    imgSortKey: "245",
    images: {
      canonical: "Images/SpiricSection/SpiricSection01-360.avif",
      variant1: "Images/SpiricSection/SpiricSection02-360.avif",
      variant2: "Images/SpiricSection/SpiricSection03-360.avif"
    }
  },
  {
    id: "spirograph",
    title: "Spirograph",
    filename: "Spirograph.html",
    aliases: ["3-Wheel Spirograph"],
    eqSortKey: "246",
    done: true,
    imgCount: 3,
    equation: "x = (r_1-r_2)\\cos\\theta + (r_2-r_3)\\cos\\Bigl(\\tfrac{r_1-r_2}{r_2}\\theta\\Bigr) + d\\cdot\\cos\\Bigl(\\bigl(\\tfrac{r_1-r_2}{r_2}+\\tfrac{r_2-r_3}{r_3}\\bigr)\\theta\\Bigr), \\quad y = (r_1-r_2)\\sin\\theta - (r_2-r_3)\\sin\\Bigl(\\tfrac{r_1-r_2}{r_2}\\theta\\Bigr) - d\\cdot\\sin\\Bigl(\\bigl(\\tfrac{r_1-r_2}{r_2}+\\tfrac{r_2-r_3}{r_3}\\bigr)\\theta\\Bigr)",
    eqFind: ["x=", "x =", "y=", "y =", "sin", "cos", "theta"],
    imgSortKey: "246",
    images: {
      canonical: "Images/Spirograph/Spirograph01-360.avif",
      variant1: "Images/Spirograph/Spirograph02-360.avif",
      variant2: "Images/Spirograph/Spirograph03-360.avif"
    }
  },
  {
    id: "squircle",
    title: "Squircle",
    filename: "Squircle.html",
    aliases: [],
    eqSortKey: "247",
    done: true,
    imgCount: 2,
    equation: "x^{4} + y^{4} = a^{4}, \\quad x = a\\,\\mathrm{sgn}(\\cos t)\\,|\\cos t|^{1/2}, y = a\\,\\mathrm{sgn}(\\sin t)\\,|\\sin t|^{1/2}, \\quad s^{2}\\left(\\dfrac{x^{2}}{k^{2}}\\right)\\left(\\dfrac{y^{2}}{k^{2}}\\right) - \\left(\\dfrac{x^{2}}{k^{2}} + \\dfrac{y^{2}}{k^{2}}\\right) + 1 = 0, \\quad x = t, y = k\\sqrt{\\dfrac{k^{2}-t^{2}}{k^{2}-s^{2}t^{2}}}",
    eqFind: ["x=", "x =", "y=", "y =", "sin", "cos", "theta"],
    imgSortKey: "247",
    images: {
      canonical: "Images/Squircle/Squircle01-360.avif",
      variant1: "Images/Squircle/Squircle02-360.avif"
    }
  },
  {
    id: "stirling-curve",
    title: "Stirling Curve",
    filename: "Stirling.html",
    aliases: [],
    eqSortKey: "248",
    done: true,
    imgCount: 1,
    equation: "y \\approx \\sqrt{2\\pi x}\\cdot\\left(\\dfrac{x}{e}\\right)^{x}",
    eqFind: ["sqrt", "e^x", "x^"],
    imgSortKey: "248",
    images: {
      canonical: "Images/Stirling/Stirling01-360.avif",
      variant1: {
        thumbnail: "Images/Stirling/Stirling02-360.avif",
        url: "https://en.wikipedia.org/wiki/Stirling%27s_approximation",
        external: true
    }
  }  
  },
  {
    id: "stirrup-curve",
    title: "Stirrup Curve",
    filename: "Stirrup.html",
    aliases: [],
    eqSortKey: "249",
    done: true,
    imgCount: 1,
    equation: "(x^{2} - 1)^{2} = y^{2}(y - 1)(y - 2)(y + 5), \\quad x = \\pm\\sqrt{1 \\pm \\sqrt{y^{2}(y - 1)(y - 2)(y + 5)}}",
    eqFind: ["x=", "x =", "x^4", "x^2", "y^2", "sqrt"],
    imgSortKey: "249",
    images: {
      canonical: "Images/Stirrup/Stirrup01-360.avif"
    }
  },
  {
    id: "strophoid",
    title: "Strophoid",
    filename: "Strophoid.html",
    aliases: ["Logocyclic Curve", "Foliate"],
    eqSortKey: "250",
    done: true,
    imgCount: 5,
    equation: "r = -a \\cdot \\dfrac{\\cos(2\\theta - \\alpha)}{\\cos\\theta}, \\quad r = -a \\cdot \\dfrac{\\cos\\bigl(2\\tfrac{m}{n}\\theta - \\alpha\\bigr)}{\\cos\\bigl(\\tfrac{m}{n}\\theta\\bigr)}",
    eqFind: ["r=", "r =", "alpha", "cos", "theta"],
    imgSortKey: "250",
    images: {
      canonical: "Images/Strophoid/Strophoid01-360.avif",
      variant1: "Images/Strophoid/Strophoid02-360.avif",
      variant2: "Images/Strophoid/Strophoid03-360.avif"
    }
  },
  {
    id: "sturm-spiral",
    title: "Sturm Spiral",
    filename: "SturmSpiral.html",
    aliases: ["Sturmian Spiral", "Norwich Spiral"],
    eqSortKey: "251",
    done: true,
    imgCount: 22,
    equation: "x = a\\Bigl(\\cos\\bigl(\\tfrac{m}{n}t-\\sqrt{1-(\\tfrac{m}{n})^{2}}\\bigr)\\cos t+\\tfrac{m}{n}\\sin\\bigl(\\tfrac{m}{n}t\\bigr)\\sin t\\Bigr), y = a\\Bigl(\\cos\\bigl(\\tfrac{m}{n}t-\\sqrt{1-(\tfrac{m}{n})^{2}}\\bigr)\\sin t-\\tfrac{m}{n}\\sin\\bigl(\\tfrac{m}{n}t\\bigr)\\cos t\\Bigr), \\quad r=\\dfrac{a}{\\cos^{2}t},\\quad \\theta=\\tan t-2t, \\\\ x = a\\bigl(\\cosh(t\\sqrt{e^{2}-1}+e)\\cos t-\\sqrt{e^{2}-1}\\sin(t\\sqrt{e^{2}-1})\\sin t\\bigr), y = a\\bigl(\\cosh(t\\sqrt{e^{2}-1}+e)\\sin t+\\sqrt{e^{2}-1}\\sin(t\\sqrt{e^{2}-1})\\cos t\\bigr)",
    eqFind: ["x=", "x =", "y=", "y =", "r=", "r =", "cos^2", "sqrt", "sin", "theta", "tan", "cosh", "e^2",
    ],
    imgSortKey: "251",
    images: {
      canonical: "Images/SturmSpiral/SturmSpiral01-360.avif",
      variant1: "Images/SturmSpiral/SturmSpiral02-360.avif",
      variant2: "Images/SturmSpiral/SturmSpiral03-360.avif"
    }
  },

  {
    id: "super-rose-curve",
    title: "Super Rose Curve",
    filename: "SuperRose.html",
    aliases: ["Superflower Curve"],
    eqSortKey: "252",
    done: true,
    imgCount: 12,
    equation: "r = a \\cdot \\sin(b \\cdot \\theta)\\,\\bigl(\\lvert\\cos(c \\cdot \\theta)\\rvert^{d} + \\lvert\\sin(c \\cdot \\theta)\\rvert^{e}\\bigr)^{f}",
    eqFind: ["r=", "r =", "cos^", "sin^", "theta",
    ],
    imgSortKey: "252",
    images: {
      canonical: "Images/SuperRose/SuperRose01-360.avif",
      variant1: "Images/SuperRose/SuperRose06-360.avif",
      variant2: "Images/SuperRose/SuperRose12-360.avif"
    }
  },
  {
    id: "super-spiral",
    title: "Super Spiral",
    filename: "SuperSpiral.html",
    aliases: [],
    eqSortKey: "253",
    done: true,
    imgCount: 10,
    equation: "r = e^{a\\theta}\\bigl(\\lvert\\cos(b\\theta)\\rvert^{c} + \\lvert\\sin(b\\theta)\\rvert^{d}\\bigr)^{f}",
    eqFind: ["r=", "r =", "cos^", "sin^", "theta", "e^",
    ],
    imgSortKey: "253",
    images: {
      canonical: "Images/SuperSpiral/SuperSpiral06-360.avif",
      variant1: "Images/SuperSpiral/SuperSpiral08-360.avif",
      variant2: "Images/SuperSpiral/SuperSpiral10-360.avif"
    }
  },
  {
    id: "superellipse",
    title: "Superellipse",
    filename: "Superellipse.html",
    aliases: ["Lamé Curve"],
    eqSortKey: "254",
    done: true,
    imgCount: 2,
    equation: "\\left\\lvert\\dfrac{x}{a}\\right\\rvert^{n} + \\left\\lvert\\dfrac{y}{b}\\right\\rvert^{n} = 1, \\quad x = \\pm a\\,\\lvert\\cos t\\rvert^{2/n}, y = \\pm b\\,\\lvert\\sin t\\rvert^{2/n}",
    eqFind: ["x=", "x =", "y=", "y =", "x^", "cos^2", "y^", "sin^2"],
    imgSortKey: "254",
    images: {
      canonical: "Images/Superellipse/Superellipse01-360.avif",
      variant1: "Images/Superellipse/Superellipse02-360.avif",
      variant2: {
        thumbnail: "Images/Superellipse/Superellipse03-360.avif",
        url: "https://en.wikipedia.org/wiki/Pittsburgh_Steelers",
        external: true
    }
  }
  },

  {
    id: "swastika-curve",
    title: "Swastika Curve",
    filename: "Swastika.html",
    aliases: ["Galaxy Curve"],
    eqSortKey: "255",
    done: true,
    imgCount: 13,
    equation: "r^{2} = \\tan\\left(\\frac{p}{2q}\\,\\theta\\right)",
    eqFind: ["r=", "r =", "cos^", "sin^", "theta", "e^",
    ],
    imgSortKey: "255",
    images: {
      canonical: "Images/Swastika/Swastika01-360.avif",
      variant1: "Images/Swastika/Swastika09-360.avif",
      variant2: "Images/Swastika/Swastika12-360.avif"
    }
  },
  {
    id: "swimming-dog-curve",
    title: "Swimming Dog Curve",
    filename: "SwimmingDog.html",
    aliases: ["Pointing-method Path", "Pursuit Curve of Boat in River"],
    eqSortKey: "256",
    done: true,
    imgCount: 1,
    equation: "r = c\\,\\dfrac{\\cos^{k-1}(t)}{(1+\\sin(t))^{k}}",
    eqFind: ["r=", "r =", "cos^", "sin^"],
    imgSortKey: "256",
    images: {
      canonical: "Images/SwimmingDog/SwimmingDog01-360.avif"
    }  
  },
  {
    id: "syntractrix",
    title: "Syntractrix",
    filename: "Syntractrix.html",
    aliases: ["Convict's Curve", "Poleni's Curve"],
    eqSortKey: "257",
    done: true,
    imgCount: 1,
    equation: "x = a\\bigl(t - k\\tanh(t)\\bigr),\\qquad y = a\\cdot k\\cdot\\operatorname{sech}(t)",
    eqFind: ["x=", "x =", "y=", "y =", "tanh^", "sech"],
    imgSortKey: "257",
    images: {
      canonical: "Images/Syntractrix/Syntractrix01-360.avif"
    } 
  },
  {
    id: "syntrepent-curve",
    title: "Syntrepent Curve",
    filename: "Syntrepent.html",
    aliases: ["Mating Gear Curve"],
    eqSortKey: "258",
    done: true,
    imgCount: 5,
    equation: "r = a\\bigl(k - \\cos t\\bigr),\\qquad \\theta(t) = \\int \\frac{\\cos t}{\\cos t - k}\\, dt",
    eqFind: ["r=", "r =", "cos^", "theta", "int", "dt",
    ],
    imgSortKey: "258",
    images: {
      canonical: "Images/Syntrepent/Syntrepent01-360.avif",
      variant1: "Images/Syntrepent/Syntrepent03-360.avif",
      variant2: "Images/Syntrepent/Syntrepent05-360.avif"
    }
  },
  {
    id: "tangent-curve",
    title: "Tangent Curve",
    filename: "Tangent.html",
    aliases: [],
    eqSortKey: "259",
    done: true,
    imgCount: 10,
    equation: "y = a \\cdot \\tan(bx - c) = \\dfrac{a \\cdot \\sin(bx - c)}{\\cos(bx - c)}",
    eqFind: ["y=", "y =", "cos", "tan", "sin",
    ],
    imgSortKey: "259",
    images: {
      canonical: "Images/Tangent/Tangent02-360.avif",
      variant1: "Images/Tangent/Tangent08-360.avif",
      variant2: "Images/Tangent/Tangent10-360.avif"
    }
  },
  {
    id: "tanh-spiral",
    title: "Tanh Spiral",
    filename: "TanhSpiral.html",
    aliases: ["Spiral of the Hyperbolic Tangent", "Yin Yang Curve"],
    eqSortKey: "260",
    done: true,
    imgCount: 16,
    equation: "r = a \\cdot \\tanh(b\\theta)",
    eqFind: ["r=", "r =", "tanh", "theta",
    ],
    imgSortKey: "260",
    images: {
      canonical: "Images/TanhSpiral/TanhSpiral01-360.avif",
      variant1: "Images/TanhSpiral/TanhSpiral07-360.avif",
      variant2: "Images/TanhSpiral/TanhSpiral12-360.avif"
    }
  },
  {
    id: "tanhc-function-curve",
    title: "Tanhc Function Curve",
    filename: "Tanhc.html",
    aliases: [],
    eqSortKey: "261",
    done: true,
    imgCount: 1,
    equation: "y = a \\cdot \\frac{\\tanh(x)}{x}",
    eqFind: ["x=", "x =", "y=", "y =", "tanh^", "sech"],
    imgSortKey: "261",
    images: {
      canonical: "Images/Tanhc/Tanhc01-360.avif"
    }
  },
  {
    id: "teardrop-curve",
    title: "Teardrop Curve",
    filename: "Teardrop.html",
    aliases: ["Larme Curve"],
    eqSortKey: "262",
    done: true,
    imgCount: 8,
    equation: "(2a)^{n} y^{2} = (a + x)(a - x)^{n+1}, \\quad x = a \\cdot \\cos(t), y = a \\cdot \\sin(t) \\cdot \\sin^{n}\\!\\left(\\frac{t}{2}\\right), \\quad x = a \\cdot \\cosh(t), y = \\pm a \\cdot \\sinh(t) \\cdot \\sinh^{n}\\!\\left(\\frac{t}{2}\\right)",
    eqFind: ["x=", "x =", "y=", "y =", "y^2", "x^n", "cos", "sin^n", "cosh", "sinh^n"],
    imgSortKey: "262",
    images: {
      canonical: "Images/Teardrop/Teardrop01-360.avif",
      variant1: "Images/Teardrop/Teardrop06-360.avif",
      variant2: "Images/Teardrop/Teardrop08-360.avif"
    }
  },
  {
    id: "tetrachoric-function-curve",
    title: "Tetrachoric Function Curve",
    filename: "Tetrachoric.html",
    aliases: [],
    eqSortKey: "263",
    done: true,
    imgCount: 1,
    equation: "y = a \\cdot \\frac{(-1)^{n-1}}{\\sqrt{n!}} \\, Z^{(n-1)}(x), \\quad \\text{where} \\quad Z(x) = \\frac{1}{\\sqrt{2\\pi}} \\, e^{-x^{2}/2}",
    eqFind: ["y=", "y =", "n!", "sqrt", "e^x"],
    imgSortKey: "263",
    images: {
      canonical: "Images/Tetrachoric/Tetrachoric01-360.avif"
    }
  },
  {
    id: "tightrope-walker-curve",
    title: "Tightrope Walker Curve",
    filename: "Tightrope.html",
    aliases: [],
    eqSortKey: "264",
    done: true,
    imgCount: 1,
    equation: "y = -\\frac{x(a-x)}{\\sqrt{b^{2}-x^{2}}}",
    eqFind: ["y=", "y =", "y^2", "x^2", "sqrt"],
    imgSortKey: "264",
    images: {
      canonical: "Images/Tightrope/Tightrope01-360.avif",
      variant1: {
        thumbnail: "Images/Tightrope/Tightrope02-360.avif",
        url: "https://mathcurve.com/courbes2d.gb/danseur/danseur.shtml",
        external: true
    }
    }
  },
  {
    id: "tractrix",
    title: "Tractrix",
    filename: "Tractrix.html",
    aliases: ["Drag Curve"],
    eqSortKey: "265",
    done: true,
    imgCount: 4,
    equation: "x = a(\\theta - \\tanh(\\theta)), y = \\frac{a}{\\operatorname{sech}(\\theta)}, \\quad x = a(b\\theta - \\tanh(c\\theta)), y = \\frac{a}{\\operatorname{sech}(\\theta)}",
    eqFind: ["x=", "x =", "y=", "y =", "tanh", "sech", "theta"],
    imgSortKey: "265",
    images: {
      canonical: "Images/Tractrix/Tractrix01-360.avif",
      variant1: "Images/Tractrix/Tractrix03-360.avif",
      variant2: "Images/Tractrix/Tractrix04-360.avif"
    }
  },
  {
    id: "tractrix-of-a-circle",
    title: "Tractrix of a Circle",
    filename: "TractCirc.html",
    aliases: [],
    eqSortKey: "266",
    done: true,
    imgCount: 16,
    equation: "\\frac{d\\theta}{dr} = \\frac{\\sqrt{4R^{2}r^{2} - (r^{2} + R^{2} - a^{2})^{2}}}{r(r^{2} - R^{2} + a^{2})}",
    eqFind: ["dtheta", "theta", "r^2", "sqrt", "r^4"],
    imgSortKey: "266",
    images: {
      canonical: "Images/TractCirc/TractCirc06-360.avif",
      variant1: "Images/TractCirc/TractCirc12-360.avif",
      variant2: "Images/TractCirc/TractCirc13-360.avif"
    }
  },
  {
    id: "tractrix-spiral",
    title: "Tractrix Spiral",
    filename: "TractrixSpiral.html",
    aliases: ["Polar Tractrix", "Complicated Tractrix"],
    eqSortKey: "267",
    done: true,
    imgCount: 1,
    equation: "r = a\\cos(t),\\quad \\theta = \\tan(t) - t",
    eqFind: ["r=", "r =", "theta=", "cos", "tan"],
    imgSortKey: "267",
    images: {
      canonical: "Images/TractrixSpiral/TractrixSpiral01-360.avif"
    }
  },
  {
    id: "trident-of-descartes",
    title: "Trident of Descartes",
    filename: "TridentDescartes.html",
    aliases: ["Cartesian Parabola", "Parabola of Descartes", "Parabola of the Second Class"],
    eqSortKey: "268",
    done: true,
    imgCount: 1,
    equation: "a \\cdot xy = (a+x)(a-x)(2a-x), \\quad x = a \\cdot t, y = a \\cdot \\frac{(1-t^{2})(2-t)}{t}",
    eqFind: ["xy=", "x=", "x =", "y=", "y =", "x^3"],
    imgSortKey: "268",
    images: {
      canonical: "Images/TridentDescartes/TridentDescartes01-360.avif"
    }
  },
  {
    id: "trifolium",
    title: "Trifolium",
    filename: "Trifolium.html",
    aliases: ["Trefoil Curve"],
    eqSortKey: "269",
    done: true,
    imgCount: 9,
    equation: "(x^{2}+y^{2})^{2} = (x^{2}+y^{2})(ax+by) + rx(x^{2}-3y^{2}), \\quad \\rho = r \\cdot \\cos(3\\theta) + a \\cdot \\cos(\\theta) + b \\cdot \\sin(\\theta)",
    eqFind: ["theta", "rho", "x^2", "y^2", "x^4", "y^4", "rho=", "cos", "sin"],
    imgSortKey: "269",
    images: {
      canonical: "Images/Trifolium/Trifolium01-360.avif",
      variant1: "Images/Trifolium/Trifolium02-360.avif",
      variant2: "Images/Trifolium/Trifolium04-360.avif"
    }
  },
  {
    id: "trig",
    title: "Trig",
    filename: "Trig.html",
    aliases: [],
    eqSortKey: "270",
    done: true,
    imgCount: 3,
    equation: "r = a + b \\cdot \\theta^{c} \\cdot [\\sin(d \\cdot \\theta)]^{e} \\cdot [\\cos(f \\cdot \\theta)]^{g}",
    eqFind: ["theta^", "r=", "r =", "cos", "sin"],
    imgSortKey: "270",
    images: {
      canonical: "Images/Trig/Trig01-360.avif",
      variant1: "Images/Trig/Trig02-360.avif",
      variant2: "Images/Trig/Trig03-360.avif"
    }
  },
  {
    id: "trisectrix-of-maclaurin",
    title: "Trisectrix of Maclaurin",
    filename: "Maclaurin.html",
    aliases: ["Maclaurin Trisectrix", "Maclaurin Sectrix,"],
    eqSortKey: "271",
    done: true,
    imgCount: 19,
    equation: "2x(x^{2}+y^{2}) = a(3x^{2}-y^{2}), \\quad r = 2a\\,\\dfrac{\\sin(3\\theta)}{\\sin(2\\theta)}, \\quad r = 2a\\,\\dfrac{\\sin(b\\theta)}{\\sin(c\\theta)}",
    eqFind: ["theta^", "r=", "r =", "cos", "sin", "x^2", "y^2"],
    imgSortKey: "271",
    images: {
      canonical: "Images/Maclaurin/Maclaurin01-360.avif",
      variant1: "Images/Maclaurin/Maclaurin10-360.avif",
      variant2: "Images/Maclaurin/Maclaurin18-360.avif"
    }
  },
  {
    id: "trochoid",
    title: "Trochoid",
    filename: "Trochoid.html",
    aliases: [],
    eqSortKey: "272",
    done: true,
    imgCount: 11,
    equation: "x = R \\cdot t - d \\cdot \\sin(t),\\quad y = R - d \\cdot \\cos(t)",
    eqFind: ["x=", "x =", "y=", "y =", "cos", "sin"],
    imgSortKey: "272",
    images: {
      canonical: "Images/Trochoid/Trochoid01-360.avif",
      variant1: "Images/Trochoid/Trochoid02-360.avif",
      variant2: "Images/Trochoid/Trochoid07-360.avif"
    }
  },
  {
    id: "troposkein",
    title: "Troposkein",
    filename: "Troposkein.html",
    aliases: ["Skipping Rope Curve", "Eggbeater Curve"],
    eqSortKey: "273",
    done: true,
    imgCount: 1,
    equation: "x=\\dfrac{a^{2}}{c}\\int_{0}^{t}\\dfrac{du}{\\sqrt{1-k^{2}\\sin^{2}u}},\\quad y=\\pm h\\cdot\\sin(t)",
    eqFind: ["x=", "x =", "y=", "y =", "int", "du", "sin^2"],
    imgSortKey: "273",
    images: {
      canonical: "Images/Troposkein/Troposkein01-360.avif"
    }
  },
  {
    id: "trott-curve",
    title: "Trott Curve",
    filename: "Trott.html",
    aliases: ["Trott Quartic Curve"],
    eqSortKey: "274",
    done: true,
    imgCount: 1,
    equation: "144(x^{4} + y^{4}) - 225(x^{2} + y^{2}) + 350x^{2}y^{2} + 81 = 0",
    eqFind: ["x^4", "x^2", "y^4", "y^2"],
    imgSortKey: "274",
    images: {
      canonical: "Images/Trott/Trott01-360.avif"
    }
  },
  {
    id: "tschirnhausen-cubic",
    title: "Tschirnhausen Cubic",
    filename: "Tschirnhaus.html",
    aliases: ["Catalan's Trisectrix", "l'Hôpital's Cubic"],
    eqSortKey: "275",
    done: true,
    imgCount: 20,
    equation: "r = \\cos^{-3}\\!\\left(\\dfrac{\\theta}{3}\\right), \\quad r = a \\cdot \\cos^{-p/q}\\!\\left(\\dfrac{q\\theta}{p}\\right)",
    eqFind: ["r=", "r =", "cos^-3", "theta"],
    imgSortKey: "275",
    images: {
      canonical: "Images/Tschirnhaus/Tschirnhaus01-360.avif",
      variant1: "Images/Tschirnhaus/Tschirnhaus11-360.avif",
      variant2: "Images/Tschirnhaus/Tschirnhaus19-360.avif"
    }
  },
  {
    id: "tukeys-biweight-curve",
    title: "Tukey's Biweight Curve",
    filename: "Tukey.html",
    aliases: ["Bisquare Psi Function"],
    eqSortKey: "276",
    done: true,
    imgCount: 1,
    equation: "y = x\\left(1-\\left(\\dfrac{x}{c}\\right)^{2}\\right)^{2} \\text{ for } |x| \\lt c,\\quad y = 0 \\text{ for } |x| \\ge c",
    eqFind: ["x^4", "x^2", "y=", "y ="],
    imgSortKey: "276",
    images: {
      canonical: "Images/Tukey/Tukey01-360.avif"
    }
  },
  {
    id: "wagner-vapor-pressure-curve",
    title: "Wagner Vapor Pressure Curve",
    filename: "Wagner.html",
    aliases: [],
    eqSortKey: "277",
    done: true,
    imgCount: 2,
    equation: "P = P_{c}\\exp\\!\\left[\\dfrac{T_{c}}{T}\\left(a_{1}\\tau + a_{2}\\tau^{1.5} + a_{3}\\tau^{3} + a_{4}\\tau^{3.5} + a_{5}\\tau^{4} + a_{6}\\tau^{7.5}\\right)\\right]",
    eqFind: ["e^"],
    imgSortKey: "277",
    images: {
      canonical: "Images/Wagner/Wagner01-360.avif",
      variant1: "Images/Wagner/Wagner02-360.avif"
    }
  },
  {
    id: "watts-curve",
    title: "Watt's Curve",
    filename: "Watts.html",
    aliases: ["Lemniscoid"],
    eqSortKey: "278",
    done: true,
    imgCount: 14,
    equation: "r^{2} = b^{2} - \\left(a \\cdot \\sin\\theta \\pm \\sqrt{c^{2} - a^{2}\\cos^{2}\\theta}\\right)^{2}, \\quad r^{2} = b^{2} - \\left(a \\cdot \\sin\\left(\\dfrac{p}{q}\\theta\\right) \\pm \\sqrt{c^{2} - a^{2}\\cos^{2}\\left(\\dfrac{p}{q}\\theta\\right)}\\right)^{2}",
    eqFind: ["r=", "r =", "sin", "sqrt", "cos^2", "theta", "r^2"],
    imgSortKey: "278",
    images: {
      canonical: "Images/Watts/Watts01-360.avif",
      variant1: "Images/Watts/Watts02-360.avif",
      variant2: "Images/Watts/Watts14-360.avif"
    }
  },
  {
    id: "weibull-distribution",
    title: "Weibull Distribution",
    filename: "Weibull.html",
    aliases: ["Rosin–Rammler Distribution", "RRSB Distribution"],
    eqSortKey: "279",
    done: true,
    imgCount: 3,
    equation: "y = \\dfrac{k}{\\lambda}\\left(\\dfrac{x}{\\lambda}\\right)^{k-1} e^{-(x/\\lambda)^{k}}, \\quad y = 1 - e^{-(x/\\lambda)^{k}}, \\quad y = \\lambda\\left(-\\ln(1 - p)\\right)^{1/k}, \\quad y = \\dfrac{k}{\\lambda}\\left(\\dfrac{x}{\\lambda}\\right)^{k-1}",
    eqFind: ["y=", "y =", "lambda", "e^", "ln"],
    imgSortKey: "279",
    images: {
      canonical: "Images/Weibull/Weibull01-360.avif",
      variant1: "Images/Weibull/Weibull02-360.avif",
      variant2: "Images/Weibull/Weibull03-360.avif"
    }
  },
  {
    id: "whirl-curve",
    title: "Whirl Curve",
    filename: "Whirl.html",
    aliases: [],
    eqSortKey: "280",
    done: true,
    imgCount: 12,
    equation: "\\theta = \\dfrac{\\pi}{n} - \\arccos\\left(\\dfrac{\\cos(\\pi/n)}{s}\\right)",
    eqFind: ["theta", "arccos", "acos", "cos"],
    imgSortKey: "280",
    images: {
      canonical: "Images/Whirl/Whirl01-360.avif",
      variant1: "Images/Whirl/Whirl02-360.avif",
      variant2: "Images/Whirl/Whirl09-360.avif"
    }
  },
  {
    id: "witch-of-agnesi-curve",
    title: "Witch of Agnesi Curve",
    filename: "Witch.html",
    aliases: ["Versiera", "Lorentzian Function", "Cauchy Distribution"],
    eqSortKey: "281",
    done: true,
    imgCount: 6,
    equation: "y = \\dfrac{b \\, a^{2}}{a^{2} + x^{2}}, \\quad y = \\dfrac{b \\, a^{c}}{(a^{2} + x^{2})^{c/2}}, \\quad x = a \\cdot \\tan(t), y = b \\cdot \\cos(t)^{2}, \\quad x = a \\cdot \\tan(t), y = b \\cdot \\cos(t)^{c}",
    eqFind: ["theta", "arccos", "acos", "cos"],
    imgSortKey: "281",
    images: {
      canonical: "Images/Witch/Witch01-360.avif",
      variant1: "Images/Witch/Witch03-360.avif",
      variant2: "Images/Witch/Witch04-360.avif"
    }
  },
  {
    id: "yinyang-curve",
    title: "YinYang Curve",
    filename: "Yinyang.html",
    aliases: [],
    eqSortKey: "282",
    done: true,
    imgCount: 1,
    equation: "r^{2} = \\dfrac{\\theta}{a+\\theta}",
    eqFind: ["r^2=", "r^2 =", "theta"],
    imgSortKey: "282",
    images: {
      canonical: "Images/Yinyang/Yinyang01-360.avif"
    }
  }
];