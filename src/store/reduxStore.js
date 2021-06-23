import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import PlayerReducer from "../reducers/PlayerReducer";
// import { reducer as formReducer } from "redux-form";

//for Only Development Version
let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const appReducer = combineReducers({
  player: PlayerReducer
});

const stores = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default stores;
