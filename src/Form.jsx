
import { useState, useEffect} from 'react'

import axios from 'axios'
import Perfiles from './Perfiles';
function Form(props) {

  const [data, setData] = useState(null)
  
  useEffect(()=>{
    fetch("http://localhost:5227/api/User/Perfiles")
    .then((response) => response.json())
    .then((data)=> setData(data));
   
  }, []);

  let now = new Date();
  const [post, setPost] = useState({
    nombreUsuario: '',
    password: '',
    fechaNacimiento: '',
    fechaCreacion: now,
    idPerfil: 2,
    activo: 1,
  })



  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
    console.log(post)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if(post.password.length <10){
      alert("la contraseña es muy corta")
    }
    if(post.nombreUsuario == post.password){
      alert("el nombre de usuario y la contraseña no pueden ser iguales")
    }
    
    console.log(post)
    axios.post('http://localhost:5227/api/User/Guardar', post)
      .then(response => console.log(response))
      .catch(err => alert(err))
  }

  return (
    <div className='container'>

      <br />
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="">Nombre Usuario</label>
          <input type="text" className='form-control' onChange={handleInput} name="nombreUsuario" /> <br /><br />



          <label for="">Password</label>
          <input type="password" min={10} className='form-control' onChange={handleInput} name="password" /> <br /><br />


          <label for="">Fecha Nacimiento</label>
          <input type="datetime-local" className='form-control' onChange={handleInput} name="fechaNacimiento" /> <br /><br />


          {/* fechaCreacion <input type="datetime-local"  onChange={handleInput} name="fechaCreacion" /> <br /><br /> */}
        
          {/* <input type="number" className='form-control' onChange={handleInput} name="idPerfil" /> */}
          <br />
          <label for="">idPerfil</label>
          <br />
        
          <select className='form-control' onChange={handleInput} name="idPerfil" >
            {data?.respuesta.map((res) =>(
            <option value={res.idPerfil}>{res.nombrePerfil}</option>
          ))}
          </select>
          <br />
          {/* activo <input type="number"  onChange={handleInput} name="activo" /> <br /><br /> */}

          <button className='btn btn-primary mb-2 mt-4'>Enviar</button>

        </div>
      </form>
    </div>

  )
}

export default Form