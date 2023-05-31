import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'



const Producto = () => {

 const [dijes,setDijes] = useState([]);
 const [opcionSeleccionada, setOpcionSeleccionada] = useState('');


    useEffect(() => {
        const obtenerDijes = async() => {
            try{ await onSnapshot(
                collection(db, 'manilla'), (query) =>{
                    setDijes(query.docs.map((doc) => ({...doc.data(), id:doc.id})))
                })
            }catch(e){
            console.log(e)
            }
        }

        obtenerDijes();
        console.log(obtenerDijes)
     }, [])

  return (
        <div>
             <label for="mate">Material:</label>
            <select id="mate" onChange={(e) => setOpcionSeleccionada(e.target.value)}>
            <option value="opcion3">Cuero</option>
            <option value="opcion4">Cuerda</option>
            </select>

            <label for="dije">Dije:</label>
            <select id="dije" onChange={(e) => setOpcionSeleccionada(e.target.value)}>
            <option value="opcion1">Ancla</option>
            <option value="opcion2">Martillo</option>
            </select>

            <ul className="list-group">
                    {  
                        dijes.map(item =>(
                            <div className="list-group-item" key={item.id}>
                                <h1 className="lead">{item[opcionSeleccionada]}</h1>
                            </div>
                        ))   
                    }        
            </ul>

 </div>
 )

}


export default Producto