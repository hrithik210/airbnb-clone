import {Routes , Route} from "react-router-dom"
import {Header} from "./component/Header"
import Loginpage from "./pages/Loginpage"
import Layout from "./pages/Layout"
import IndexPage from "./pages/IndexPage"
import RegisterPage from "./pages/RegisterPage"
import axios from "axios"
import { UserContextProvider } from "./context/userContext"

axios.defaults.withCredentials = true ;
axios.defaults.baseURL = 'http://localhost:3000'

function App() {
  

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route path="/" element = {<IndexPage />}></Route>
          <Route path="/login" element = {<Loginpage />}></Route>
          <Route path="/register" element = {<RegisterPage />}></Route>
        </Route>
      </Routes>
  </UserContextProvider>
  )
}

export default App
