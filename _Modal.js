// ============================================================
// Shared Modal + Gallery Logic for all curve pages
// Caption: always copy the figure's <figcaption> into the modal.
// External thumbs (class="external" or wrapped in target=_blank) are skipped.
// ============================================================

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  const closeButton = modal.querySelector(".close-button");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  function hideModal() {
    modal.style.display = "none";
    modalImage.src = "";
    modalCaption.innerHTML = "";
  }

  if (closeButton) {
    closeButton.addEventListener("click", hideModal);
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideModal();
  });

  document.querySelectorAll(".image-gallery img").forEach((image) => {
    const parentLink = image.closest('a[target="_blank"], a[rel*="external"]');
    if (image.classList.contains("external") || parentLink) return;

    image.addEventListener("click", () => {
      modalImage.src = image.src.replace("360", "1600");

      const figure = image.closest("figure");
      const figcap = figure ? figure.querySelector("figcaption") : null;

      if (figcap) {
        modalCaption.innerHTML = figcap.innerHTML;
      } else {
        modalCaption.textContent = image.alt || "";
      }

      modal.style.display = "block";
    });
  });
});