import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import discountsReducer from "./discountsReducer";


const reducers = combineReducers({
    discounts: discountsReducer
})

export let store = createStore(reducers, applyMiddleware(thunk))

window.store = store