import calcReducer from "./reducer";
import {createStore} from "redux";

const store = createStore(calcReducer);

export default store;