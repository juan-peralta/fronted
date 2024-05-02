
import { useState, useEffect } from 'react'

import './App.css'

function Perfiles() {
  const [data, setData] = useState(null)
  
  useEffect(()=>{
    fetch("http://localhost:5227/api/User/Perfiles")
    .then((response) => response.json())
    .then((data)=> setData(data));
   
  }, []);

  console.log(data)
  return (
    <>
    
        <div className='card'>
          <ul>
            {data?.respuesta.map((res) =>(
            <li key={res.idPerfil}>{res.nombrePerfil}</li>
           
          ))}
          </ul>
        </div>
      
    
    </>
  )
}

export default Perfiles