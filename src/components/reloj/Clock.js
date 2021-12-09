import React, {useState} from 'react'

export const Clock = () => {

    let [time, setTime] = useState(new Date())
    console.log(time)


    const updateTime = () => {
        time = new Date()
        console.log(time)
    }  
    return (
        <div onClick={updateTime}>
            <h3>{time.toLocaleString()}</h3>
            
        </div>
    )
}
