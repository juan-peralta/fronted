
import { useState, useEffect } from 'react'

import './App.css'

function GetUser() {
  const [data, setData] = useState(null)
  
  useEffect(()=>{
    fetch("http://localhost:5227/api/User/Lista")
    .then((response) => response.json())
    .then((data)=> setData(data));
   
  }, []);

  console.log(data)
  return (
    <>
    
        <div className='card'>
          <ul>
            {data?.respuesta.map((res) =>(
            <li key={res.idUsuario}>{res.nombreUsuario}</li>
           
          ))}
          </ul>
        </div>
      
    
    </>
  )
}

export default GetUser
