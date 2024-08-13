import {Routes , Route} from "react-router-dom"
import {Header} from "./component/Header"
import Loginpage from "./pages/Loginpage"
import Layout from "./pages/Layout"
import IndexPage from "./pages/IndexPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  

  return (
    <Routes>
      <Route path="/" element = {<Layout />}>
        <Route path="/" element = {<IndexPage />}></Route>
        <Route path="/login" element = {<Loginpage />}></Route>
        <Route path="/register" element = {<RegisterPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
