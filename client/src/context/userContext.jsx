import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'


export const UserContext = createContext({})


export function UserContextProvider({children}){

    const [user,setUser] = useState(null)

    useEffect( ()=>{
        axios.get('/profile')

    },[])

    return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>

)}
