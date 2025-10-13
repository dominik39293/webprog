const moodslider = document.querySelector("#moodSlider");

moodslider.addEventListener("input", () => {
  const sliderValue = Math.ceil(Number(moodslider.value) + 1);
  const moodImage = document.querySelector("#moodImage");
  moodImage.src = `./img/${sliderValue}.png`
})