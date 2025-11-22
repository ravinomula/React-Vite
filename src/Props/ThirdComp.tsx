import React from 'react';

type ThirdCompProps ={
    name:string;
    area:string;
}
const ThirdComp = (props:ThirdCompProps) => {
    console.log(props)
    return(
        <>
        <h2>Third Component</h2>
        <div>{props.name} {props.area}</div>
        </>
    )
}

export default ThirdComp;