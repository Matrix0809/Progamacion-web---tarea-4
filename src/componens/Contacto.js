import React from 'react'; 
import Mostrar from './Mostrar'
import Enviar from './Enviar';

class Contacto extends React.Component{

    render(){
        return(
            <div className="App">

                <div>
                <form method="POST" id="enviar" >
                <div className="str">Agenda de contacto</div>
                  <br></br>
                  <label className="label1">Nombre</label>
                  <br></br>
                  <input id="nombre"type="text" placeholder="Nombre" required/>
                  <br></br>
                  <br></br>
                  <label   >Apellido</label>
                  <br></br>
                  <input id="apellido" type="text" placeholder="Apellido" required/>
                  <br></br>
                  <br></br>
                  <label  >Telefono</label>
                  <br></br>
                  <input  id="telefono" type="number" placeholder="Telefono" required />
                  <br></br>
                  <Mostrar/>
                  <Enviar/>
                  
          </form>
           
          <h2 id="H">Listado de Contactos</h2>
          <div className="MostrarD" id="prueba">

          </div> 

              </div>

          </div>
        );
    }
    
}

export default Contacto;