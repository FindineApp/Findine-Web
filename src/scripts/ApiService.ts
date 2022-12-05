class ApiService {
    static readonly apiKey = "AIzaSyA1r74F89lUC_UioBorQ-osgkA0Rcx1IUY";
    static readonly baseUrl = "https://maps.googleapis.com/maps/api/place";

    getPlaces(): Promise<google.maps.places.PlaceResult[]> {
        return fetch(`${ApiService.baseUrl}/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${ApiService.apiKey}'`)
			.then((response) => response.json())
			.then((data) => {return data})
			.catch(error => {
				console.error(error);
			});
    }

 //   getPlaceDetails(placeId: string): google.maps.places.PlaceResult {
  //      const fetch(`${ApiService.baseUrl}/details/json?place_id=${placeId}&key=${ApiService.apiKey}`)
    //      .then((response) => response.json())
 //       return data;
  //  }
}
