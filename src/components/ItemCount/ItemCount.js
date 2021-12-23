import React, { useState } from 'react'
import "./itemcount.css"

export const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador]= useState(initial)
    function restar(){
        if (contador > initial){
            setContador(contador -1) 
        }
    }
    function sumar(){
        if (contador < stock){
            setContador(contador +1) 
        }
    }
    

    return (
        <div className='contador'>
            <span className='botones_contador' onClick={restar}>-</span>
            <span className='botones_contador'>{contador}</span>
            <span className='botones_contador' onClick={sumar}>+</span>
            <div>
            <button disabled={contador === initial} onClick={()=>onAdd(contador)}>agregar al carrito</button>
            </div>
        </div>
    )
}
