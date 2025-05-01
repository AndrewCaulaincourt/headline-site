document.addEventListener("DOMContentLoaded", () => {
  // === Интро ===
  const loader = document.getElementById("intro-loader");
  if (loader) {
    const introWasPlayed = sessionStorage.getItem("intro-played");

    if (!introWasPlayed) {
      setTimeout(() => {
        loader.classList.add("fade-out");
        setTimeout(() => loader.classList.add("intro-hidden"), 1000);
        sessionStorage.setItem("intro-played", "true");
      }, 4000);
    } else {
      loader.classList.add("intro-hidden");
    }
  }

  // === Бургер-меню ===
  const burger = document.getElementById("burger");
  const navList = document.querySelector(".nav-list");

  if (burger && navList) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navList.classList.toggle("active");
    });
  }

  // === Модалка ===
  const modal = document.getElementById("bookingModal");
  const successModal = document.getElementById("successModal");
  const form = modal?.querySelector("form");
  const closeBtn = document.getElementById("closeModal");
  const closeSuccess = document.getElementById("closeSuccess");
  const openBtns = document.querySelectorAll(".btn-book");

  if (modal && form) {
    openBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";

        const selectedServiceText = document.getElementById("selectedService");
        const serviceCard = btn.closest(".service-item");
        const serviceName = serviceCard?.querySelector("h3")?.innerText;

        if (selectedServiceText) {
          selectedServiceText.innerText = serviceName
            ? `Услуга: ${serviceName}`
            : "";
        }
      });
    });

    closeBtn?.addEventListener("click", () => (modal.style.display = "none"));
    closeSuccess?.addEventListener(
      "click",
      () => (successModal.style.display = "none")
    );

    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
      if (e.target === successModal) successModal.style.display = "none";
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector('input[type="text"]').value.trim();
      const phone = form.querySelector('input[type="tel"]').value.trim();
      const errorText = form.querySelector("#formError");

      const nameValid = /^[А-Яа-яA-Za-z\s-]+$/.test(name);
      const phoneValid = /^\+?\d{10,}$/.test(phone);

      if (!name || !phone || !nameValid || !phoneValid) {
        if (errorText) errorText.style.display = "block";
        return;
      }

      if (errorText) errorText.style.display = "none";
      form.reset();
      modal.style.display = "none";

      if (successModal) {
        successModal.style.display = "flex";
      }
    });
  }

  // === Слайдер (если есть) ===
  const slider = document.getElementById("slider");
  if (slider) {
    const slides = slider.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentSlide = 0;

    function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
      });

      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      });
    }

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }, 4000);
  }
});
