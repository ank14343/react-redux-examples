import { SET_FILTER, TodoAction } from "../actions/todoActionTypes"
import { VISIBILITY_FILTERS } from "../../constants"

const initialState = VISIBILITY_FILTERS.ALL

const visibilityFilter = (prevState = initialState, action: TodoAction) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload.filter
        default:
            return prevState
    }
}

export default visibilityFilter
