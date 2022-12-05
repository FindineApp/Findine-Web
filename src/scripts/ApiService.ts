class ApiService {
    static readonly apiKey = "AIzaSyA1r74F89lUC_UioBorQ-osgkA0Rcx1IUY";
    static readonly baseUrl = "https://maps.googleapis.com/maps/api/place";

    async getPlaces(): Promise<google.maps.places.PlaceResult[]> {
        let response = await fetch(`${ApiService.baseUrl}/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=5000&type=restaurant&keyword=cruise&key=${ApiService.apiKey}'`)
		let data: google.maps.places.PlaceResult[] = await response.json();
		return data;
    }

 	async getPlaceDetails(placeId: string): Promise<google.maps.places.PlaceResult> {
  		let response = await fetch(`${ApiService.baseUrl}/details/json?place_id=${placeId}&key=${ApiService.apiKey}`)
		let data: google.maps.places.PlaceResult = await response.json();
   		return data;
 	}
}

export default ApiService;
