import React, { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import { Link, Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlacesPage from './PlacesPage'

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
    let classes = 'inline-flex gap-1 py-2 px-6'

    if (type===subpage) {
      classes += ' bg-primary text-white rounded-full' 
    }
    else{
      classes+=' bg-gray-300 rounded-full'
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
        
        <Link className={linkClasses("profile")}  to={'/account'}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          My Profile
        </Link>
        
        <Link className={linkClasses("bookings")} to={'/account/bookings'}>
      
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        My bookings
        </Link>
        
        <Link className={linkClasses("places")} to={'/account/places'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>

         My accomodations
        </Link>
      </nav>

      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
          logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className='w-full bg-primary shadow-lg mt-3  text-lg rounded-2xl p-2 text-white'>Logout</button>
        </div>
      )}

      {subpage ==='places' &&(
        
        <PlacesPage />

      )}
    </div>
  )
}

export default AccountPage
