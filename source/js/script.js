/* Slider */

const swiper = new Swiper('.swiper', {
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Map */

const mapOptions = {
  center: [59.96819, 30.31713],
  zoom: 17
}

const map = new L.map('map', mapOptions);
const layer = new L.TileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=StFld3NCrvag1TMtL9m1');

map.addLayer(layer);
