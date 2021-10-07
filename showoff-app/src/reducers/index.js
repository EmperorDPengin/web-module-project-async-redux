import { combineReducers } from "redux";

import animeReducer from "./animeReducer";

const rootReducer = combineReducers({
    animeState: animeReducer,
})

export default rootReducer;