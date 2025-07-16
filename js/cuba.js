function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
