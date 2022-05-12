import {applyMiddleware, combineReducers, createStore} from "redux";
import {renameMeReducer} from "./renameMeReducer";
import thunk from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
        nothing: renameMeReducer
    }
)

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
