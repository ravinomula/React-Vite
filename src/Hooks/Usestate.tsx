import React from 'react'
import { useState,useEffect } from 'react';



const Usestate = () => {
const [cityState, setCityState] = useState('Hyderabad');
console.log(cityState);

 useEffect (() => {
    if(cityState === 'Mumbai'){
    setCityState("Banglore")
} else{
    setCityState("Delhi")
}
 },[cityState])


    return (
        <>
            <h2>Usestate Component</h2>
            <div>I live in {cityState}</div> 
        </>
    )
}

export default Usestate;