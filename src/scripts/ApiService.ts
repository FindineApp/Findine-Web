/*
class ApiService {
    static readonly apiKey: string = "AIzaSyA1r74F89lUC_UioBorQ-osgkA0Rcx1IUY";
    static readonly baseUrl: string = "https://maps.googleapis.com/maps/api/place";

    getPlaces(): google.maps.places.PlaceResult[] {
        const result: google.maps.places.PlaceResult[] = 
			fetch(`${ApiService.baseUrl}/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY'`)
				.then((response) => response.json())
				.then((data) => data);
		return result;
    }

 //   getPlaceDetails(placeId: string): google.maps.places.PlaceResult {
  //      const fetch(`${ApiService.baseUrl}/details/json?place_id=${placeId}&key=${ApiService.apiKey}`)
    //      .then((response) => response.json())
 //       return data;
  //  }
}
*/