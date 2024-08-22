import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link, Navigate } from 'react-router-dom'

const AccountPage = () => {
  const {user, ready} = useContext(UserContext)

  if (!ready) {
    return 'loading ...'
  }

  if (ready && !user) {
    return <Navigate to={'/login'} />
  }
  return (
    <div>
      <nav className='w-full flex gap-4 mt-4 justify-center'>
        <Link className='py-2 px-6 bg-primary text-white rounded-full ' to={'/account'}>My Profile</Link>
        <Link className='py-2 px-6 bg-primary text-white rounded-full ' to={'/account/bookings'}>My bookings</Link>
        <Link className='py-2 px-6 bg-primary text-white rounded-full 'to={'/account/places'}>My accomodations</Link>
      
      </nav>
    </div>
  )
}

export default AccountPage
