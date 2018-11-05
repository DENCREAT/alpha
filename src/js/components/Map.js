export default class FooterMap {
  constructor(el) {
    this.el = el;
    this.map = {};
    this.geoData = [
      {
        lat: 53.858004,
        lng: 27.500083
      }
    ];
    this.defaultCoordinates = {
      lat: 53.858004,
      lng: 27.500083
    };

    this.init();
  }

  init() {
    this.map = new google.maps.Map(this.el, {
      center: this.defaultCoordinates,
      scrollwheel: false,
      zoom: 16
    });

    this.setMarkers();
  }

  setMarkers() {
    _.each(this.geoData, item => {
        new google.maps.Marker({
        map: this.map,
        position: item
      });
    });
  }
}