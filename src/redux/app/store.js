import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;
