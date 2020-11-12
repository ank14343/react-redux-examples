import React, { useState } from 'react'

import { connect } from "react-redux";
import { addTodo } from "../redux/actions/actions";

function AddTodo({ addTodo }) {

    const [ inputContent, setInputContent ] = useState("")

    const handleAddTodo = () => {
        addTodo(inputContent)
        setInputContent("")
    }

    return (
        <div>
            <input value={inputContent} onChange={e => setInputContent(e.target.value)} />
            <button className="add-todo" onClick={handleAddTodo}>Add Todo</button>
        </div>
    )

}
export default connect(
    null,
    { addTodo }
)(AddTodo);
