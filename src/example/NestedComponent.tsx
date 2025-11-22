import React from 'react';
import TestComponent from './Testcoponent';

const Mango = () => {
    return (
        <h1>Mango Component</h1>
    )
}

const Grapes =() => {
    return(
        <h2>Grapes component</h2>
    )
}
    function NestedComponent() {
        return(
            <div>Sample:
                <Mango />
                <Grapes />
                <TestComponent />
                
            </div>
        )
    }

    export default NestedComponent;