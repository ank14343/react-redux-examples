import { VISIBILITY_FILTERS } from "../constants";
import { TODO } from "./actions/todoActionTypes";
import { RootState } from "./store";

const getTodosState = (store: RootState) => store.todos

const getTodoListIds = (store: RootState) => {
    return getTodosState(store) ? getTodosState(store).allIds: []
}

const getTodoById = (store: RootState, id: number): TODO => {
    return getTodosState(store) ? {...getTodosState(store).byIds[id], id} : { completed: false, content: "", id }
}

const getTodos = (store: RootState) => (
    getTodoListIds(store).map(id => getTodoById(store, id))
)

export const getTodosByVisibilityFilter = (store: RootState, visibilityFilter: string) => {
    const allTodos = getTodos(store)
    // debugger
    switch(visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed)
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
}