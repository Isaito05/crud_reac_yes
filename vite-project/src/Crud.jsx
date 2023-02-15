import { Fragment } from "react";
import { useState } from "react";


function Crud(){
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [estado, setEstado] = useState([]);


    function aggUsu(e){
        e.preventDefault();
        let usuario={
            nombre: nombre,
            apellido: apellido
        }
        setEstado([...estado, usuario]);
    }

    return(
          <Fragment>
            <form action="" onSubmit={(e)=> aggUsu(e)}>
                <input onChange={(e) => setNombre(e.target.value)}  type="text" id="nombre" name="nombre"/>
                <input onChange={(e) => setApellido(e.target.value)}  type="text" id="apellido" name="apellido"/>
                <button>Agregar</button>
            </form>
            <div>
        { 
         estado.map(usuario => (
          <h3 key={usuario.nombre}> {usuario.nombre +" "+ usuario.apellido} </h3>
         ))
          
        }
      </div>

            
          </Fragment>
    )
}

export default Crud