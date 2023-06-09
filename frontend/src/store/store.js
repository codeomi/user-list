import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { initialReducer } from "./reducer";

const reducers = combineReducers({
userList:initialReducer
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)) //to check state on chrome
);

export default store;