import React from 'react'
import Carddetail from '../components/Carddetail/carddetail';
import Navbar from '../components/Navbar/Navbar';
export default function Detalles() {
  return(
      <div>
          <Navbar/>

    <Carddetail titulo={"Terminator"} idioma={"español"} urlimagen={"https://es.web.img3.acsta.net/pictures/19/09/03/16/58/5053583.jpg"} popularidad={"7/10"} Genero={"accion"} Presupuesto={"10M"} Descripcion={"Un bicho malisimo"} Fecha={"12/21/34"} Estado={"Disponible"} />




    </div>
      
  )
  
}
