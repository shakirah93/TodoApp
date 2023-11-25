// Action type
export const ADD_TODO = "ADD_TODO";

// Action creator
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}
