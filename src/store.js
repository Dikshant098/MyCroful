import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userRegisterReducer from "./redux/userAuthentication";
import { searchReducer } from "./redux/search/searchReducer";
import { productDetailsReducer } from "./redux/productDetails/productDetailsReducer";


import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
    userRegisterReducer,
    searchReducer,
    productDetailsReducer
});

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
//   userLoginAdmin: { userInfo: userInfoFromStorage },
// };

const middleware = [thunk];

const store = createStore(
  reducer,
//   initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
