import React from 'react';

type FourthCompProps ={
    name:string;
    area:string
}

const FourthComp =(props:FourthCompProps)=> {
    console.log(props)
    return(
        <>
        <h2>Fourth Component</h2>
        <div>{props.name} {props.area}</div>
         
        </>
    )
}   

export default FourthComp;