// _Curve-nav.js

function setupCurveNavigation() {
  // Get current filename (e.g. "Alysoid.html")
  const currentPath = window.location.pathname.split("/").pop();
  const currentFilename = currentPath || "Airy.html"; // fallback

  // Find current curve index
  const currentIndex = curveList.findIndex(curve => curve.filename === currentFilename);

  if (currentIndex === -1) {
    console.warn("Current curve not found in curveList:", currentFilename);
    return;
  }

  // Calculate previous and next with circular wrapping
  const prevIndex = (currentIndex - 1 + curveList.length) % curveList.length;
  const nextIndex = (currentIndex + 1) % curveList.length;

  const prevCurve = curveList[prevIndex];
  const nextCurve = curveList[nextIndex];

  // Update the navigation links
  const prevLink = document.querySelector(".curve-nav .prev-link");
  const nextLink = document.querySelector(".curve-nav .next-link");

  if (prevLink) {
    prevLink.href = prevCurve.filename;
    prevLink.textContent = "Previous curve";
  }

  if (nextLink) {
    nextLink.href = nextCurve.filename;
    nextLink.textContent = "Next curve";
  }
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", setupCurveNavigation);