import axios from "axios";
const KEY="PyZAtUODuybAuJ5vl-yvznmRMp2J0D8RDEnqY0QAVAOJ5zWE-06JFrIPueI4ZOewJFOBPOMjfMly3bLcw1DF2ZfL2OgnTsEAGmCOwfJq2eYc4V0lBQYkG-pcrgpNWnYx";
export function selectRestaurant(data) {
    return {
		type: SELECT_RESTAURANT,
		payload:data
    };
}
export function showDetailRestaurant() {
    return {
		type: SHOW_DETAIL,
    };
}
export function goBack(){
	return{
		type:GOBACK_ACTION,
	}
}
export function fetchRequest() {
    return {
        type: FETCH_REQUEST
    };
}
export function fetchData(postion){
	return(dispatch)=> {
		let userPlace = "latitude="+postion.latitude+"&longitude="+postion.longitude;
		let yelpUrl = "https://api.yelp.com/v3/businesses/search?" + userPlace;
		dispatch(fetchRequest());
		axios.get(yelpUrl,{
			headers: {
			"Authorization": "Bearer "+ KEY,
		  }}
		).then((response) =>{
			return response;
		}).then((response)=> {
			let restaurantdata = response.data;
			dispatch(fetchDataSuccess(restaurantdata));
		}).catch(function (error) {
			console.log(error);
		  });;
    };
}
export function fetchDataSuccess(data){
	return {
		type: FETCH_DATA_SUCESS,
		data:data
	};
}
export function getLocation(){
	return (dispatch) =>{
		var options = {
			enableHighAccuracy: true,
			timeout: 5500,
			maximumAge: 0
		  };
		const geolocation = navigator.geolocation;
		geolocation.getCurrentPosition((
			position) => {
            dispatch( fetchData(position.coords));
		},
		()=>{return},
		options);
	}
}
export const FETCH_REQUEST = "FETCH_REQUEST";
export const GOBACK_ACTION = "GOBACK_ACTION";
export const FETCH_DATA_SUCESS = "FETCH_DATA_SUCESS";
export const SELECT_RESTAURANT = "SELECT_RESTAURANT";
export const GET_LOCATION = "GET_LOCATION";
export const SHOW_DETAIL = "SHOW_DETAIL";
