export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_FILTER = "SET_FILTER"

export interface TodoAction {
    type: typeof ADD_TODO | typeof TOGGLE_TODO | typeof SET_FILTER
    payload: {
        id?: number
        content?: string
        filter?: string
    }
}

export interface TODO {
    content?: string
    completed: boolean
    id?: number
}

export interface TodoState {
    allIds: number[]
    byIds: {
        [id: number]: TODO
    }
}
