import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'

export const PlacesPage = () => {
  const {action} = useParams()
  console.log(action)

  return (
    <div>
      <div className='text-center'>
          <Link className='inline-flex bg-primary gap-1 text-white rounded-full py-2 px-6 ' to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Add new places
          </Link>
        </div>
    </div>
  )
}

export default PlacesPage
