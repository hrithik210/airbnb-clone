import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

 const RegisterPage = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setpassword] = useState('');

    function RegisterUser(ev) {
      ev.preventDefault();
      axios.post('http://localhost:3000/register', {
        name , 
        email,
        password,
      })
      .then(response => {
        console.log('User registered successfully:', response.data);
      })
      .catch(error => {
        console.error('Error registering user:', error.response ? error.response.data : error.message);
      });
    }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-40'>
            <h1 className='text-4xl text-center mb-4'>Register</h1>
            <form action="" className='max-w-md mx-auto' onSubmit={RegisterUser} >
                
                <input className='w-full border border-gray-300 mt-2 rounded-xl p-2' type="text" 
                  placeholder='Name'
                  value={name}
                  onChange={(e)=>{
                  setName(e.target.value)
                }}/>

                <input className='w-full border border-gray-300 mt-2 rounded-xl p-2' type="email" 
                  placeholder='your@gmail.com'
                  value={email}
                  onChange={(e)=> {
                    setEmail(e.target.value)
                  }} />
                
                <input className='w-full border border-gray-300 mt-2 rounded-xl p-2' type="password" 
                  placeholder='password'
                  value= {password}
                  onChange={e => {
                    setpassword(e.target.value)
                  }}/>
                
                <button className='w-full bg-primary shadow-lg mt-3  text-lg rounded-2xl p-2 text-white'>Register</button>
                <div className='p-2 text-center text-gray-500'>Already have a account ? <Link to={'/login'} className='font-medium underline text-black'>Login</Link></div>
            </form>
        </div>
     
    </div>
  )
}

export default RegisterPage
