import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'

const AccountPage = () => {
  const {user, ready, setUser} = useContext(UserContext)
  const [redirect , setRedirect] = useState(false)
  let {subpage} = useParams()

  if (subpage === undefined) {
     subpage = 'profile'
  }

  if (!ready) {
    return 'loading ...'
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }


  
  function linkClasses(type=null) {
    let classes = 'py-2 px-6'

    if (type===subpage) {
      classes += ' bg-primary text-white rounded-full' 
    }
    return classes
  }

  async function logout(){
    await axios.post('/logout')
    setUser(null)
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to={'/'}/>
  }
  return (
    <div>
      <nav className='w-full flex gap-4 mt-4 justify-center mb-8'>
        <Link className={linkClasses("profile")}  to={'/account'}>My Profile</Link>
        <Link className={linkClasses("bookings")} to={'/account/bookings'}>My bookings</Link>
        <Link className={linkClasses("places")} to={'/account/places'}>My accomodations</Link>
      </nav>

      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
          logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className='w-full bg-primary shadow-lg mt-3  text-lg rounded-2xl p-2 text-white'>Logout</button>
        </div>
      )}
    </div>
  )
}

export default AccountPage
