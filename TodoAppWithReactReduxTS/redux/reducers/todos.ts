import { ADD_TODO, TodoAction, TodoState, TOGGLE_TODO } from "../actions/todoActionTypes"

const initialState: TodoState = {
    allIds: [],
    byIds: {}
}

const todos = ( prevState = initialState, action: TodoAction ): TodoState => {
    switch(action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload
            return {
                ...prevState,
                allIds: [...prevState.allIds, id],
                byIds: {
                    ...prevState.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            }
        }
        case TOGGLE_TODO: {
            const { id } = action.payload
            return {
                ...prevState,
                byIds: {
                    ...prevState.byIds,
                    [id]: {
                        ...prevState.byIds[id],
                        completed: !prevState.byIds[id].completed
                    }
                }
            }
        }
        default:
            return prevState
    }
}

export default todos
