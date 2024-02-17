import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contactos } from './components/Contactos'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import './styles.css'



function App() {

  
  return (
    <>

      
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          
          <Route path='/src/components/Home.jsx' element={<Home/>} ></Route>
          <Route path='/src/components/Contactos.jsx' element={ <Contactos/> }></Route>
          
        
        </Routes>

        <Footer></Footer>        
      </BrowserRouter>

    </>
  )
}

export default App