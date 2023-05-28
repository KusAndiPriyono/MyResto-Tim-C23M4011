import React, { useState } from 'react';
import swal from 'sweetalert';
import Header from '../../components/organisms/header';
import Button from '../../components/atoms/Button';
import '../../assets/loginregister.scss'
// import './login.scss'


// TODO remove, this demo shouldn't need to reset the theme.

async function loginUser(credentials) {
  return fetch('http://127.0.0.1:8000/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
console.log(loginUser);

export default function RegisterPage() {
  // const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });
    if ('token' in response) {
      swal('Success', response.status, 'success', {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem('token', response['token']);
        localStorage.setItem('users', JSON.stringify(response['users']));
        window.location.href = '/';
      });
    } else {
      swal('Failed', response.status, 'error');
    }
  };

  const doLogin = async () => {
    window.location = '/login'
  }

  return (

    <div>
        <Header />
        <div className='auth-container'>
          <div className='auth-card'>
          <p className='auth-title'>Sign Up</p>
          <input className='input' id='email' placeholder='Email' type='text' onChange={(e) => setEmail(e.target.value)}></input>
          <input className='input' id='password' placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          <input className='input' id='confirmpassword' placeholder='Confirm Password' type='password'></input>
          <Button onClick={handleSubmit} title='Sign Up'/>
          <a className='register' href='#' onClick={doLogin}> Already have one? <span>Login</span></a>
          </div>
        </div>
    </div>
  );
}
