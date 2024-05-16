const swiper = new Swiper(".hero-banner-main-wrapper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  paginationClickable: true,
  autoplay: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

let listVideo = document.querySelectorAll(
  ".video-list-wrap .video-list-parent"
);
let mainVideo = document.querySelector(".main-video-wrap video");
let title = document.querySelector(".main-video-wrap .product-text");

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => vid.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
    };
  };
});
