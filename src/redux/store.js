import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";
import reducers from "./reducers";

const enhancer = applyMiddleware(rpm, logger);
const store = createStore(reducers, enhancer);

export default store;