document.addEventListener("DOMContentLoaded", () => {
    const buyModal = document.getElementById("buyModal");
    const buyForm = document.getElementById("buyForm");
    const selectedProductText = document.getElementById("selectedProduct");
    const successModal = document.getElementById("buySuccess");
    const closeBuy = document.getElementById("closeBuy");
    const closeSuccess = document.getElementById("closeBuySuccess");
  
    if (!buyModal || !buyForm) return;
  
    // Открытие модалки с нужным товаром
    document.querySelectorAll(".btn-buy").forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").innerText;
        selectedProductText.innerText = `Товар: ${productName}`;
        buyModal.style.display = "flex";
      });
    });
  
    // Закрытие модалок
    closeBuy?.addEventListener("click", () => buyModal.style.display = "none");
    closeSuccess?.addEventListener("click", () => successModal.style.display = "none");
  
    window.addEventListener("click", (e) => {
      if (e.target === buyModal) buyModal.style.display = "none";
      if (e.target === successModal) successModal.style.display = "none";
    });
  
    // Отправка формы
    buyForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("userName").value.trim();
      const phone = document.getElementById("userPhone").value.trim();
      const quantity = document.getElementById("userQty").value;
      const product = selectedProductText.innerText;
  
      if (!name || !phone || quantity < 1) {
        alert("Пожалуйста, заполните все поля корректно.");
        return;
      }
  
      const message = `Здравствуйте! Хочу оформить заказ:\n\n${product}\n\nИмя: ${name}\nТелефон: ${phone}\nКоличество: ${quantity}`;
  
      // WhatsApp-интеграция отключена — можно раскомментировать и заменить номер
      // const whatsappNumber = "79995343879";
      // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      // window.open(whatsappLink, "_blank");
  
      buyModal.style.display = "none";
      buyForm.reset();
      successModal.style.display = "flex";
  
      setTimeout(() => {
        successModal.style.display = "none";
      }, 3000);
    });
  });
  