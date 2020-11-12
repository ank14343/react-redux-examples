import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../redux/actions/todoActions"

function AddTodo() {

    const dispatch = useDispatch()
    const [ inputContent, setInputContent ] = useState("")

    const handleAddTodo = () => {
        if(inputContent == "") {
            alert("Todo cannot be empty")
        } else {
            dispatch(addTodo(inputContent))
            setInputContent("")
        }
    }

    return (
        <div>
            <input value={inputContent} onChange={e => setInputContent(e.target.value)} />
            <button className="add-todo" onClick={handleAddTodo}>Add Todo</button>
        </div>
    )
}

export default AddTodo
