class ApiService {
    constructor() {};

    static apiKey = "AIzaSyA1r74F89lUC_UioBorQ-osgkA0Rcx1IUY";
    static baseUrl = "https://maps.googleapis.com/maps/api/place";

    findPlace(placeId) {
        fetch(`${baseUrl}/details/json?place_id=${placeId}&key=${apiKey}`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        return data;
    }

    getPlaces() {
        fetch(`${baseUrl}/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY'`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        return data;
    }

    getPlaceDetails(placeId) {
        fetch(`${baseUrl}/details/json?place_id=${placeId}&key=${apiKey}`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        return data;
    }
}
