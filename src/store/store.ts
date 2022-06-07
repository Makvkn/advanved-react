import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from "./reducers";
const rootReducers = combineReducers(reducers)

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch =typeof store.dispatch