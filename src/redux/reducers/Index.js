import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

export const rootReducer = combineReducers({
    // add all reducers needed in your application
    todos: todoReducer
});
