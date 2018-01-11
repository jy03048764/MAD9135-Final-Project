import { GOBACK_ACTION, FETCH_REQUEST, FETCH_DATA_SUCESS, SELECT_RESTAURANT, SHOW_DETAIL } from "./actions";
export default function reducers(state, action) {
    let updatedState = Object.assign({}, state);
    switch(action.type) {
        case FETCH_DATA_SUCESS:
            updatedState.isFetching=false;
            updatedState.showDetail = false;
            updatedState.restaurants = Object.assign({},action.data);
            updatedState.businesses = [...updatedState.restaurants.businesses];
            updatedState.locatoin = "List";
            break;
        case SHOW_DETAIL:
            updatedState.showDetail = true;
            break;
        case SELECT_RESTAURANT:
            updatedState.showDetail = true;
            updatedState.restaurant = action.payload;
            break;
        case FETCH_REQUEST:
            updatedState.isFetching = true;
            break;
        case GOBACK_ACTION:
            updatedState.isFetching=false;
            updatedState.showDetail = false;
            break;
        default:
            return state;
    }
    return updatedState;
}
