import { ADD_TODO, SET_FILTER, TodoAction, TOGGLE_TODO } from "./todoActionTypes";

let todoId = 1;

export const addTodo = (content: string): TodoAction => {
    return {
        type: ADD_TODO,
        payload: {
            id: todoId++,
            content
        }
    }
}

export const toggleTodo = (id: number): TodoAction => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
}

export const setFilter = (filter: string): TodoAction => {
    return {
        type: SET_FILTER,
        payload: {
            filter
        }
    }
}
