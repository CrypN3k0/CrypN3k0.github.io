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
});

function onRecaptchaSuccess() {
  document.getElementById('submit-button').style.display = 'block';
}