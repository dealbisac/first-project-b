import React from 'react'
import './Todo.css'

const Todo = () => {
  return (
    <div className='todo'>
        <div className="todo-logo">
            <h3>Todo App</h3>
        </div>

        <div className="todo-form">
            <form>
                <input type="text" className="task" name="task" />
                <input type="button" className="button" name="button" value="Enter" />
            </form>
        </div>

        <div className="todo-lists">
            <h3>Task Lists</h3>
            <ul>
                <li>Take a walk.</li>
                <li>Make a presentation.</li>
                <li>Cook food.</li>
                <li>Feed the dog.</li>
            </ul>
        </div>
    </div>
  )
}

export default Todo