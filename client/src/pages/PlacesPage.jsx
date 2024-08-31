import React, { act, useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../context/userContext'
import Perks from '../component/Perks'

export const PlacesPage = () => {
  const {action} = useParams()
  const [title ,settitle] =useState('')
  const [address ,setaddress] =useState('')
  const [addedphotos ,setAddedphotos] =useState([])
  const [photoslink ,setPhotoslink] =useState('')
  const [description ,setdescription] =useState('')
  const [perks ,setperks] =useState([])
  const [extraInfo ,setextraInfo] =useState('')
  const [checkin ,setcheckin] =useState('')
  const [checkout ,setcheckout] =useState('')
  const [maxGuests ,setmaxGuests] =useState('')
  


  return (  
    <div>
      {action != 'new' &&(
        <div className='text-center'>
            <Link className='inline-flex bg-primary gap-1 text-white rounded-full py-2 px-6 ' to={'/account/places/new'}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Add new places
            </Link>
          </div>
    )}
    
    { action == 'new'  && (
      <div>
        <form >
          <h2 className='text-xl font-semibold mt-4'>Title</h2>
          <p className='text-sm text-gray-500'>title for your place</p>
          <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}
          placeholder='title , for example : my lovely apartment'
          className='border border-gray-300'/>

          <h2 className='text-xl font-semibold mt-4'>Address</h2>
          <p className='text-sm text-gray-500'>Address for your place</p>
          <input type="text" placeholder='address' value = {address} onChange={(e)=>setaddress(e.target.value)}
          className='border border-gray-300'/>

          <h2 className='text-xl font-semibold mt-4'>Photos</h2>
          <p className='text-sm text-gray-500'>more = better</p>
          <div>
            <input type="text" placeholder='add using a link'
            value={photoslink} onChange={(e)=>setPhotoslink(e.target.value)}
            className='border border-gray-300'/>
            <button className='bg-gray-200 rounded-lg px-3'>Add&nbsp; Photo</button>
          </div>

          <div className='mt-2 grid grid-cols-3 lg:grid-col-6 md:grid-cols-4'>
            <button className='flex justify-center gap-1 border bg-gray-2 items-center cursor-pointer00 rounded-2xl p-4 text-xl text-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>

            Upload
            </button>
          </div>

          <h2 className='text-xl font-semibold mt-4'>Description</h2>
          <p className='text-sm text-gray-500'>Description of place</p>
          
          <textarea value={description} onchange= {e => setdescription(e.target.value)}/>
          <h2 className='text-xl font-semibold mt-4'>Perks</h2>
          <p className='text-sm text-gray-500'>Select all the perks u need</p>

          <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4'>
            <Perks selected={perks} onchange={setperks}/>
          </div>
          <h2 className='text-xl font-semibold mt-4'>Extra Info</h2>
          <p className='text-sm text-gray-500'>house rules ,etc </p>
          <textarea value={extraInfo} onchange = {e => setextraInfo(e.target.value)} />

          <h2 className='text-xl font-semibold mt-4'>Check-in & out time</h2>
          <p className='text-sm text-gray-500'>heck-in and check-out time & remember to have some time window for cleaning the room between guests</p>
          
          <div className='grid gap-2 sm:grid-cols-3'>
            
            <div>
              <h3 className='mt-2 -mb-1'>Check-in </h3>
              <input type="text" value={checkin} onchange ={e => setcheckin(e.target.value)}/>
            </div>
            
            <div>
              <h3 className='mt-2 -mb-1'>Check-out </h3>  
              <input type="text" value={checkout} onchange= {(e)=> setcheckout(e.target.value)}/>
            </div>
            
            <div>
              <h3 className='mt-2 -mb-1'>Max guests </h3>
              <input type="text" value={maxGuests} l onchange ={e => setmaxGuests(e.target.value)}/>
            </div>
          
          </div>

          <div>
            <button className='primary'>Save</button>
          </div>
          
        </form>
      </div>
    )}
    
    </div>
  )
}

export default PlacesPage
