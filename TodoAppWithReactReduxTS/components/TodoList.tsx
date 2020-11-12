import React from 'react'
import { useSelector } from 'react-redux'
import { getTodosByVisibilityFilter } from '../redux/selectors'
import { RootState } from '../redux/store'
import Todo from './Todo'

function TodoList() {

    const visibilityFilter = useSelector((state: RootState) => state.visibilityFilter)
    const storeState = useSelector((state: RootState) => state)
    const todos = getTodosByVisibilityFilter(storeState, visibilityFilter)

    return (
        <ul className="todo-list">
        {
            todos && todos.length
                ? todos.map(todo => {
                    return <Todo key={`todo-${todo.id}`} todo={todo} />
                })
                    : "No todos, thank god."
        }
    </ul>
    )
}

export default TodoList
