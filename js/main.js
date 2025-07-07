document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");
  const menuIcon = menuToggle.querySelector(".material-symbols-outlined");

  let isOpen = false;

  menuToggle.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      navList.classList.add("show");
      menuIcon.textContent = "close";
    } else {
      navList.classList.remove("show");
      menuIcon.textContent = "menu";
    }
  });

  const workElems = document.querySelectorAll('.workElem');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  workElems.forEach(el => observer.observe(el));

  const submitButton = document.getElementById('submit-button');
  const overlay = document.getElementById('overlay');
  const closeButton = document.getElementById('closeButton');

  submitButton.addEventListener('click', () => {
    overlay.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', () => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });
});

function onRecaptchaSuccess() {
  document.getElementById('submit-button').style.display = 'block';
  document.getElementById('recaptcha').style.display = 'none';
  document.getElementById('please').style.display = 'none';
  document.getElementById('thanks').style.display = 'block';
}
