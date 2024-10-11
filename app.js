// Preloader
const preloader = document.querySelector(".preloader");
const mainContent = document.querySelector(".main-content");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
  mainContent.classList.add("show");

  document.body.style.overflow = "auto";
});

// navbar toggle
const navToggle = document.querySelector(".navbar-icon");
const navContainer = document.querySelector(".nav-container");
const links = document.querySelector(".nav-links");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", function () {
  const navHeight = navContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (navHeight === 0) {
    navContainer.style.height = `${linksHeight}px`;
  } else {
    navContainer.style.height = 0;
  }
});

// ******** video background ************

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// ********* about **************
const btns = document.querySelectorAll(".about-btn");
const content = document.querySelectorAll(".content");
const aboutInfo = document.querySelector(".about-info");

aboutInfo.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navbar = document.querySelector(".fixed-nav");
    const linksContainer = document.querySelector(".nav-container");

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

// Back to top
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 500) {
    backToTop.classList.add("show-top-link");
  } else {
    backToTop.classList.remove("show-top-link");
  }
});

// **** faqs ********

const faqs = document.querySelectorAll(".faq");

faqs.forEach((question) => {
  const btns = question.querySelector(".faq-btn");

  btns.addEventListener("click", (e) => {
    e.preventDefault();

    faqs.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// footer date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
