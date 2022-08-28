import axios from "axios";
import { FETCH_USERS_REQUESTS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS} from "./userType"

// action creator func :
export function fetchUsersRequest() {
    return {
        type : FETCH_USERS_REQUESTS
    }
};
export function fetchUsersSuccess(users) {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users,
    }
};
export function fetchUsersFailure(error) {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error,
    }
};


// 4. async action creator :
export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then((res) => {
                 const users = res.data;
                 console.log(users)
                 dispatch(fetchUsersSuccess(users));
             })
             .catch((err) => {
                 dispatch(fetchUsersFailure(err.message))
             })
    }
}