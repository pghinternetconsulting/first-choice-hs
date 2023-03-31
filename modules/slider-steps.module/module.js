new Glide(".slider-steps__glide", {
  type: "slider",
  startAt: 0,
  perView: 1,
  autoplay: false,//autoplay: 2000,
  animationDuration: 1000
}).mount();


var slider = document.querySelectorAll('.slider-steps__glide');

slider.forEach(slide => {
	var section = slide.closest('.dnd-section')
	section.classList.add('slider-steps__mobile-bg')
})