
import React from 'react'

type PropsDestructureProps = {
    myCar: {
        brand: string;
        model: string;
        year:number;
        color: string;
    }
}

const PropsDestructure = (props:PropsDestructureProps) => {
    const {brand, model, year, color} = props.myCar;
    console.log(props);
    return (
        <>  
        <h2>Props Destructure Component</h2>
        <div>{brand}</div>
        <div>{model}</div>
        <div>{year}</div>
        <div>{color}</div>
        </>
    )
}

export default PropsDestructure