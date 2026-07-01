$(function () {
  const $slides = $(".slides");
  const $slide = $(".slide");
  const slideWidth = $slides.width();
  const totalSlides = $slide.length;

  let index = 0;
  let timer;

  const duration = 10000;
  const $bar = $(".bar");

  function animateBar() {
    $bar.stop(true, true);
    $bar.css({ transform: "scaleX(0)" });

    $bar.animate(
      { fake: 1 },
      {
        duration: duration,
        step: function (now, fx) {
          let progress = fx.pos; // 0 → 1
          $bar.css("transform", `scaleX(${progress})`);
        },
      }
    );
  }

  function goToSlide(i) {
    $slides.animate(
      {
        scrollLeft: i * slideWidth,
      },
      600
    );
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    goToSlide(index);
    animateBar();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    goToSlide(index);
    animateBar();
  }

  function startAuto() {
    timer = setInterval(nextSlide, duration);
    animateBar();
  }

  function resetTimer() {
    clearInterval(timer);
    startAuto();
  }

  $(".next").click(function () {
    nextSlide();
    resetTimer();
  });

  $(".prev").click(function () {
    prevSlide();
    resetTimer();
  });
  startAuto();
});