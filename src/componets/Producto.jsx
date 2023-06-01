import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'



const Producto = () => {

 const [dijes, setDijes] = useState([]);
 const [materialSeleccionado, setMaterialSeleccionado] = useState('');
 const [dijeSeleccionado, setDijeSeleccionado] = useState('');
 const [tipoSeleccionado, setTipoSeleccionado] = useState('');
 const [pagoSeleccionado, setPagoSeleccionado] = useState('');
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
        const opciones = `${materialSeleccionado} ${dijeSeleccionado} ${tipoSeleccionado} ${pagoSeleccionado}`;
        setOpcionesSeleccionadas(opciones);
      }, [materialSeleccionado, dijeSeleccionado, tipoSeleccionado, pagoSeleccionado]);


  return (
    <div>
        <div style={{ display: 'flex' }}></div>
            
            <img src="../src/images/logo.png" alt="logo" width="600" height="400"/>
            <hr/>
            <img src="https://cdnx.jumpseller.com/urbenmood/image/6850674/PS3493_Manilla_Pulsera_Hombres_Vintage_Cuero_Gancho_Marron_20cm.png?1684679556" alt="Manilla cuero" width="300" height="200"/>
            <hr/> 
            <label for="mate">Material:</label>
            <select id="mate" onChange={(e) => setMaterialSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="cue">Cuero</option>
            <option value="crd">Cuerda</option>
            </select>
            <hr/>
            <label for="dije">Dije:</label>
            <select id="dije" onChange={(e) => setDijeSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="anc">Ancla</option>
            <option value="mar">Martillo</option>
            </select>
            <hr/>
            <label for="tipo">Tipo:</label>
            <select id="tipo" onChange={(e) => setTipoSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="oro">Oro</option>
            <option value="ros">Oro rosado</option>
            <option value="pla">Plata</option>
            <option value="niq">Niquel</option>
            </select>
            <hr/>
            <label for="pago">Metodo de pago:</label>
            <select id="pago" onChange={(e) => setPagoSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="dol">Dolar</option>
            <option value="pes">Pesos</option>
            </select>
     
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