import React, { useState, useEffect } from 'react'
import './TodoFirebase.css'

//import firebase files
import firebase from 'firebase';
import db from '../firebase';


const TodoFirebase = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    // when the app loads, 
    // we need to listen to the database and 
    // fetch new todos as they get added/removed
    useEffect(() => {
        //this code here... fires when the app.js loads
        db.collection('todos')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setTodos(snapshot.docs.map(
                    doc => ({
                        id: doc.id,
                        todo: doc.data().todo
                    })
                ))
            })
    }, [input]);

    console.log(input)
    console.log(todos)

    //CREATE: Add a new todo and store it in the database (firestore)
    function handleSubmit() {
        db.collection('todos').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: input
        })
        setTodos([...todos, input]);
        setInput('')
    }

    //UPDATE: Update the individual items in the array having index
    const updateTodo = () => {
        db.collection('todos').doc(todos.id).set({
        }, { merge: true })
    }

    //DELETE: Delete the individual items in the array having index
    // function deleteTodo(){
    //     db.collection('todos').doc(todos.id).delete();
    // }

    //Remove All: It removes all the items in the array
    function removeAll() {
        setTodos([])
    }

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
                        onChange={e => setInput(e.target.value)}
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
                {/* display the items in the todos array */}
                {todos.map(todo => (
                    <ul>
                        <div className="todo-list" key={todo.id}>
                            <li>{todo.todo}</li>
                            <button
                                className='update'
                                onClick={updateTodo}
                            >
                                Update
                            </button>
                            <button
                                className='delete'
                                onClick={event => db.collection('todos').doc(todo.id).delete()}
                            >
                                Delete
                            </button>
                        </div>
                    </ul>
                ))}
            </div>
            {/* <ul>
                    {todos.map((todo) => (
                        <li>
                            {todo}
                            <button
                                className='update'
                                onClick={() => updateTodo(todos.indexOf(todo))}
                            >
                                Update
                            </button>
                            <button
                                className='delete'
                                onClick={() => deleteTodo(todos.indexOf(todo))}
                            >
                                Delete
                            </button>
                        </li>
                    ))
                    }
                </ul> */}

            <div className="todo-removeall">
                <button
                    className='button'
                    onClick={removeAll}
                >
                    Remove All
                </button>
            </div>
        </div>
    )
}

export default TodoFirebase