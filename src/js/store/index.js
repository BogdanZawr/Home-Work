import { createStore } from "redux";
import rootReducer from "../reducers/index";
import clients from '../../clients.json'

const initialState = {
    deleteUser: {},
    clients,
}

const store = createStore(rootReducer, initialState);

export default store;