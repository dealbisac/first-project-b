import React from 'react';
import "./Register.css";

import axios from 'axios';

const Register = () => {

    // function to call api for register
    const register = () => {

        // get values from input fields
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // create object to send to api
        const user = {
            name: name,
            address: address,
            username: username,
            password: password
        }

        // call api
        axios.post('http://localhost:8800/api/user/register', user)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className='register'>
            <h1>Register</h1>
            <form className='register-form'>
                <input type="text" id="name" placeholder="Name" />
                <input type="text" id="address" placeholder="Address" />
                <input type="text" id="username" placeholder="username" />
                <input type="password" id="password" placeholder="password" />
                <button
                    type="submit"
                    onClick={register}
                >
                    Register</button>
            </form>
        </div>
    )
}

export default Register