//catching essential elements
let indexValue = 1;
const sliders = document.querySelectorAll(".btn-sliders span");
const allSlider = document.querySelectorAll(".content .slide");

//calling main function
showImg(indexValue);

//for slider buttons
sliders.forEach((item, i) => {
  item.addEventListener("click", () => showImg((indexValue = i + 1)));
});

//for right left arrows
allSlider.forEach(function (item, i) {
  let value;
  if (i == 0) {
    value = -1;
  } else {
    value = 1;
  }
  item.addEventListener("click", () => showImg((indexValue += value)));
});

//main function
function showImg(e) {
  const img = document.querySelectorAll("img");

  if (e > img.length) {
    indexValue = 1;
  }

  if (e < 1) {
    indexValue = img.length;
  }

  let i;
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.background = "transparent";
  }

  img[indexValue - 1].style.display = "block";
  sliders[indexValue - 1].style.background = "#fff";
}
