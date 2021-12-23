import React from 'react'
import {productos} from "../../data/data" 
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemListContainer = ({saludo}) => {
    function agregarCarrito(cantidad){
        console.log(cantidad)
    }
    
    return (
        <div>
            <h1>{saludo}</h1>
            <ItemCount stock={5} initial={0} onAdd={agregarCarrito} />
            <ItemCount stock={9} initial={0} onAdd={agregarCarrito} />
            
        </div>
    )
}
