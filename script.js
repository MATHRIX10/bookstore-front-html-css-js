const searchbtn = document.querySelector("#search-btn");
const searchForm = document.querySelector(".header-1 .search-form");

window.onscroll = () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
    searchForm.classList.remove("active");
  }
};

window.onload = () => {
  document.querySelector(".header .header-2").classList.remove("active");
  window.scrollTo(0, 0);
  searchForm.classList.remove("active");
};

searchbtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

let loginForm = document.querySelector(".login-form-container");
document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active')
}

document.querySelector("#close-login-btn").onclick = () => {
  loginForm.classList.remove("active");
};




  var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });