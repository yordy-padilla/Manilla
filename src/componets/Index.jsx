
import React, {useEffect, useState } from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'
import React from 'react'

const Index = () => {
  const [nombre, setnombre] = useState('')
  
  useEffect(() => {
    const obtenerNom = async() => {

    try{ await onSnapshot(collection(db, 'manilla'), (query) =>{
    setnombre(query.docs.map((doc) => ({...doc.data(), id:doc.id})))
    })

    }catch(e){
     console.log(e)
    }
    }
    obtenerNom();
    console.log(obtenerNom)
     }, [])

  return (

    <div className='container mt-5'>
       
       <ul className="list-group">
                    {  
                        nombre.map(item =>(
                            <div className="list-group-item" key={item.id}>
                                <h1 className="lead">{item.nombre}</h1>
                            </div>
                        ))   
                    }        
                </ul>

        <body>
            <h1 className='text-cent'>Manillas 100% real</h1>
            <hr/>
             <label for="tipo">Tip:</label>
            <select id="tipo">
            <option value="opcion1">Cuero</option>
            <option value="opcion2">Cuerda</option>
            </select>

             <label for="dije">Dije:</label>
            <select id="dije">
            <option value="opcion3">Ancla</option>
            <option value="opcion4">Martillo</option>
            </select>

             <label for="mate">Material:</label>
            <select id="mate">
            <option value="opcion5">Oro</option>
            <option value="opcion6">Oro rosado</option>
            <option value="opcion7">Plata</option>
            <option value="opcion8">Niquel</option>
            </select>

             <label for="cant">Cantidad:</label>
            <select id="cant">
            <input type="number" id="cantidad" min="1"></input>
            </select>

 

        </body>
    </div>
  )
}

export default Index
