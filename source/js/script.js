/* Menu */

const mobileMenu = () => {
  let navMain = document.querySelector('.main-nav');
  let navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
};

mobileMenu();

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

const iconOptions = {
  iconUrl: '/img/svg/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [18, 50]
}

const customIcon = L.icon(iconOptions);

var markerOptions = {
  clickable: true,
  draggable: true,
  icon: customIcon
}

const marker = L.marker({lat: 59.96819, lng: 30.31713}, markerOptions);

marker.addTo(map);
