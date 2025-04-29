document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementById("closeProductModal");

  const modalImage = document.getElementById("modalProductImage");
  const modalTitle = document.getElementById("modalProductTitle");
  const modalPrice = document.getElementById("modalProductPrice");
  const modalDesc = document.getElementById("modalProductDesc");
  const modalVolume = document.getElementById("modalProductVolume");
  const modalUsage = document.getElementById("modalProductUsage");

  document.querySelectorAll(".btn-buy").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const card = button.closest(".product-card");

      modalImage.src = card.dataset.image;
      modalTitle.textContent = card.dataset.title;
      modalPrice.textContent = card.dataset.price;
      modalDesc.textContent = card.dataset.description;
      modalVolume.textContent = card.dataset.volume;
      modalUsage.textContent = card.dataset.usage;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
