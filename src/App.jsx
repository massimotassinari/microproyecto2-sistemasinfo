//En el app va absolutamente todooooooooo los componentes
import './App.css'
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Listado from './pages/Listado';
import Detalles from './pages/Detalles';
import Login from './pages/Login';
import Registro from './pages/Registro';
import MovieAPI from './pages/MovieAPI';

const Page404 = ()=> <h1>Page 404 Error</h1>

function App() {
  


  return <Router>
      <Routes>

        <Route path="/" element={<Homepage />}/>
        <Route path='/listado' element={<Listado/>}/>
        <Route path="/detalles" element={<Detalles/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Registro/>}/>
        <Route path="/movieAPI" element={<MovieAPI/>}/>
        <Route path="/*" element={<Page404/>}/>

      </Routes>
      
    </Router>
  
}
//Este export default me permite importar en optro documento, es importante para el rendwer
export default App
