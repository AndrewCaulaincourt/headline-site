document.addEventListener("DOMContentLoaded", () => {
    // ===== Общая запись (услуги, главная) =====
    const modal = document.getElementById('bookingModal');
    const successModal = document.getElementById('successModal');
    const form = modal?.querySelector('form');
    const closeBtn = document.getElementById('closeModal');
    const closeSuccess = document.getElementById('closeSuccess');
    const openBtns = document.querySelectorAll('.btn-book, .hero-btn');
  
    if (modal && form) {
        openBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
              e.preventDefault();
              modal.style.display = 'flex';
          
              // Подстановка названия услуги
              const selectedServiceText = document.getElementById("selectedService");
              const serviceCard = btn.closest(".service-item");
              const serviceName = serviceCard?.querySelector("h3")?.innerText;
          
              if (selectedServiceText && serviceName) {
                selectedServiceText.innerText = `Услуга: ${serviceName}`;
              } else if (selectedServiceText) {
                selectedServiceText.innerText = "";
              }
            });
          });
          
  
      closeBtn?.addEventListener('click', () => modal.style.display = 'none');
      closeSuccess?.addEventListener('click', () => successModal.style.display = 'none');
  
      window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
        if (e.target === successModal) successModal.style.display = 'none';
      });
  
      form.addEventListener('submit', function(e) {
        e.preventDefault();
  
        const nameInput = form.querySelector('input[type="text"]');
        const phoneInput = form.querySelector('input[type="tel"]');
        const errorText = form.querySelector('#formError');
  
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
  
        const nameValid = /^[А-Яа-яЁёA-Za-z\s\-]+$/.test(name);
        const phoneValid = /^(\+7|8)\d{10}$/.test(phone);
  
        if (!name || !phone || !nameValid || !phoneValid) {
          if (errorText) errorText.style.display = 'block';
          return;
        }
  
        if (errorText) errorText.style.display = 'none';
        form.reset();
        modal.style.display = 'none';
        successModal.style.display = 'flex';
  
        setTimeout(() => {
          successModal.style.display = 'none';
        }, 3000);
      });
    }
  
    // ===== Обучение =====
    const enrollModal = document.getElementById("enrollModal");
    const enrollForm = document.getElementById("enrollForm");
    const selectedCourse = document.getElementById("selectedCourse");
    const enrollSuccess = document.getElementById("courseSuccess");
    const closeEnroll = document.getElementById("closeEnroll");
    const closeEnrollSuccess = document.getElementById("closeCourseSuccess");
  
    if (enrollModal && enrollForm) {
      document.querySelectorAll(".btn-enroll").forEach(button => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          const card = button.closest(".course-card");
          const courseName = card.querySelector("h3").innerText;
          selectedCourse.innerText = `Курс: ${courseName}`;
          enrollModal.style.display = "flex";
        });
      });
  
      closeEnroll?.addEventListener("click", () => enrollModal.style.display = "none");
      closeEnrollSuccess?.addEventListener("click", () => enrollSuccess.style.display = "none");
  
      window.addEventListener("click", (e) => {
        if (e.target === enrollModal) enrollModal.style.display = "none";
        if (e.target === enrollSuccess) enrollSuccess.style.display = "none";
      });
  
      enrollForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const name = document.getElementById("courseName").value.trim();
        const phone = document.getElementById("coursePhone").value.trim();
  
        if (!name || !phone) {
          alert("Пожалуйста, заполните имя и телефон.");
          return;
        }
  
        enrollModal.style.display = "none";
        enrollForm.reset();
        enrollSuccess.style.display = "flex";
  
        setTimeout(() => {
          enrollSuccess.style.display = "none";
        }, 3000);
      });
    }
  });

  // Только для мобилки (Бургер-меню)
  document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navList = document.querySelector('.nav-list');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navList.classList.toggle('active');
    });
  });

  