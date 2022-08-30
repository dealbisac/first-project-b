import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([
        'Take a walk.',
        'Make a presentation.',
        'Cook food.',
        'Feed the dog.'
    ]);

    console.log(input)
    console.log(todos)

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, input])
        setInput('')
    }

    // function handleSubmit() {
    //     setTodos([...todos, input])
    //     setInput('')  
    // }

    return (
        <div className='todo'>
            <div className="todo-logo">
                <h3>Todo App</h3>
            </div>

            <div className="todo-form">
                <form>
                    <input
                        type="text"
                        className="task"
                        name="input"
                        value={input}
                        onChange={ e => setInput(e.target.value)}
                    />
                    <input
                        type="submit"
                        className="button"
                        name="button"
                        value="Add Todo" 
                        disabled={!input}
                        onClick={handleSubmit}
                    />
                </form>
            </div>

            <div className="todo-lists">
                <h3>Task Lists</h3>
                <ul>
                    {todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo