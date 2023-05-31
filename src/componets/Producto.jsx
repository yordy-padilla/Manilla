import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'



const Producto = () => {

 const [dijes,setDijes] = useState([]);
 const [materialSeleccionado, setMaterialSeleccionado] = useState('');
 const [dijeSeleccionado, setDijeSeleccionado] = useState('');
 const [tipoSeleccionado, setTipoSeleccionado] = useState('');
 const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState('');

    useEffect(() => {
        const obtenerDijes = async() => {
            try{ await onSnapshot(
                collection(db, 'manilla'), (query) =>{
                    setDijes(query.docs.map((doc) => ({...doc.data(), id:doc.id})))
                })
            }catch(error){
            console.log(e)
            }
        }
        obtenerDijes();
        console.log(obtenerDijes)
     }, [])


     useEffect(() => {
        const opciones = `${materialSeleccionado} ${dijeSeleccionado} ${tipoSeleccionado}`;
        setOpcionesSeleccionadas(opciones);
      }, [materialSeleccionado, dijeSeleccionado, tipoSeleccionado]);


  return (
        <div>
            <hr/>
             <label for="mate">Material:</label>
            <select id="mate" onChange={(e) => setMaterialSeleccionado(e.target.value)}>
            <option value="opcion3">Cuero</option>
            <option value="opcion4">Cuerda</option>
            </select>
            <hr/>
            <label for="dije">Dije:</label>
            <select id="dije" onChange={(e) => setDijeSeleccionado(e.target.value)}>
            <option value="opcion1">Ancla</option>
            <option value="opcion2">Martillo</option>
            </select>
            <hr/>
            <label for="tipo">Tipo:</label>
            <select id="tipo" onChange={(e) => setTipoSeleccionado(e.target.value)}>
            <option value="opcion5">Oro</option>
            <option value="opcion6">Oro rosado</option>
            <option value="opcion7">Plata</option>
            <option value="opcion8">Niquel</option>
            </select>
            <hr/>
            <label for="pago">Metodo de pago:</label>
            <select id="pago" onChange={(e) => setTipoSeleccionado(e.target.value)}>
            <option value="opcion9">Dolares</option>
            <option value="opcion10">Pesos</option>
            </select>

            <br/>
            <ul className="list-group">
                    {  
                        dijes.map(item =>(
                            <div className="list-group-item" key={item.id}>
                                <h1 className="lead">{item[opcionesSeleccionadas]}</h1>
                            </div>
                        ))   
                    }        
            </ul>
           

            
 </div>
 )

}


export default Producto