import React from 'react'
import { Link } from 'react-router-dom'

export const Loginpage = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className='mb-40'>
            <h1 className='text-4xl text-center mb-4'>Login</h1>
            <form action="" className='max-w-md mx-auto' >
              <input className='w-full border border-gray-300 mt-2 rounded-xl p-2' type="email" placeholder='your@gmail.com' />
              <input className='w-full border border-gray-300 mt-2 rounded-xl p-2' type="password" placeholder='password'/>
              <button className='w-full bg-primary shadow-lg mt-3  text-lg rounded-2xl p-2 text-white'>Login</button>
              <div className='p-2 text-center text-gray-500'>dont have a account yet ? <Link to={'/register'} className='font-medium underline text-black'>Register</Link></div>
            </form>
        </div>
     
    </div>
  )
}

export default Loginpage
