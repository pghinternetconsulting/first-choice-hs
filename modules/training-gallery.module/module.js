var training__thumbs = document.querySelectorAll(".training__thumbs");
var training__image = document.querySelector(".training__image");

training__thumbs.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    training__image.src = e.target.src;
    training__image.srcset = e.target.srcset;
  });
});
