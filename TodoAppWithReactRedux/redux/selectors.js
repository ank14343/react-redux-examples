import { VISIBILITY_FILTERS } from "../constants";

const getTodosState = store => store.todos

const getTodoListIds = store => getTodosState(store) ? getTodosState(store).allIds : []

const getTodoById = (store, id) => getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}

const getTodos = store => getTodoListIds(store).map(id => getTodoById(store, id))

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    // debugger
    const allTodos = getTodos(store)
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
}
