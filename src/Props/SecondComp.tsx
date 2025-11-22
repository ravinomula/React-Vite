import React from 'react';

type SecondCompProps ={
    name:string;
    area:string;
}

const SecondComp = (props:SecondCompProps) => {
    console.log(props);
    return(
        <>
        <h2>Second Component</h2>
        <div>{props.name} {props.area}</div>
        </>
    )
}

export default SecondComp;