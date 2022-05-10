import {combineReducers, createStore} from "redux";
import {renameMeReducer} from "./renameMeReducer";

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
        nothing: renameMeReducer
    }
)

const store = createStore(rootReducer)

export default store
