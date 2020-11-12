import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/actions/todoActions'
import { TODO } from '../redux/actions/todoActionTypes'

interface propTypes {
    key: string,
    todo: TODO
}

function Todo({ todo }: propTypes) {

    const dispatch = useDispatch()

    return (
        <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
            className={todo && todo.completed ? "todo-item__text todo-item__text--completed" : "todo-item__text"}
        >
            {todo.content}
        </span>
    </li>
    )
}

export default Todo
