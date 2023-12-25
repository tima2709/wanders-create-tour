import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import {createTourReducer} from "./reducers/tourCreateReducer"


const rootReducer = combineReducers({
    newTour: createTourReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
