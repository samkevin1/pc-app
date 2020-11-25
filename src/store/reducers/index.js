import { combineReducers } from "redux";

import auth from "./auth/index";
import product from "./product/index";
import cart from "./cart/index";

const rootReducer = combineReducers({
  auth,
  product,
  cart
});

export default rootReducer;
