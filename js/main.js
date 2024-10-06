// header__top-row--mobile

/* Nav icon*/
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active')
  nav.classList.toggle('header__top-row--mobile')
  document.body.classList.toggle("no-scroll")
}

/*Phone Mask* */
initMap();

async function initMap() {
  await ymaps3.ready;

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker
  } = ymaps3;
  


  const map = new YMap(
    document.getElementById('map'),
    {
      location: {
        center: [30.338928, 59.943543],
        zoom: 17
      }
    }
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  const markerElement = document.createElement('img');
  markerElement.className = 'icon-marker';
  markerElement.src = 'https://yastatic.net/s3/front-maps-static/maps-front-jsapi-3/examples/images/marker-custom-icon/yellow-capybara.png';

  const marker = new YMapMarker(
    {
      coordinates: [30.338928, 59.943543],
      draggable: true,
      mapFollowsOnDrag: true
    },
    markerElement
  );

  map.addChild(marker);
}
/*
30.338928, 59.943543
./img/map/location-pin.svg
./img/header/header-bg.jpg

*/