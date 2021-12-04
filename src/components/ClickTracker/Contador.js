import React, {useState} from 'react'

export const ClickTracker = () => {

    const [clicks, setClicks] =useState(0)


    const Contador = () => {
        setClicks(clicks + 1)
        
    }

    return  (
        <div>
            <button onClick={Contador} className="btn-primary">contador de click</button>

            <h3>cantidad de click echos:   {clicks.toLocaleString()} </h3>
        </div>
    )
}
