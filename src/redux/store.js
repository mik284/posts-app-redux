import {createStore, combineReducers} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { postReducer } from "./reducers/postReducer"

const rootReducer = combineReducers({
	postState: postReducer
})

export const store = createStore(rootReducer, composeWithDevTools())