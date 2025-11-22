import React from 'react';

type FirstCompProps ={
    name:string;
    area:string;
}
const FirstComp = (props:FirstCompProps) => {
    console.log(props);
    return(
        <>
        <h2>First Component</h2>
        <div>{props.name} {props.area}</div>
        
        </>
    )
}

export default FirstComp;