let swiper = new Swiper(".image-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  speed: 600,
  slideToClickedSlide: true,
  shortSwipes: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  mousewheel: {
    forceToAxis: true,
  },

  keyboard: {
    enabled: true,
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    snapOnRelease: true,
  },
});

function getAverageRGB(imgEl) {
  var blockSize = 5,
    defaultRGB = { r: 0, g: 0, b: 0 },
    canvas = document.createElement("canvas"),
    context = canvas.getContext && canvas.getContext("2d"),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
}

// document.querySelectorAll(".swiper-slide").forEach(function(d){
//     var img = d.querySelector("img");
//     var rgb = getAverageRGB(img);
//     d.style.background = "rgb("+rgb.r+","+rgb.g+","+rgb.b+")";
// })

document.querySelectorAll(".swiper-slide").forEach(function (d) {
  var img = d.querySelector("img");
  var rgb = getAverageRGB(img);
  d.style.background =
    "linear-gradient(90deg, rgba(" +
    rgb.r +
    "," +
    rgb.g +
    "," +
    rgb.b +
    ",0.99), rgba(0,0,0,0.09))";
  // d.style.background = "linear-gradient(90deg, rgba("+rgb.r+","+rgb.g+","+rgb.b+",0.99), rgba(255,255,255,0.15))";
});

window.onload = function () {
  var time =
    window.performance.timing.domContentLoadedEventEnd -
    window.performance.timing.navigationStart;
  loadTime = document.getElementById("load-time"); // get a reference to the paragraph
  loadTime.innerText = time / 1000; // put the value of the variable loadTime into the paragraph
};

// redo function window.onload = function() {
//     var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
