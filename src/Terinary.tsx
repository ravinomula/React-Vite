import { useState } from "react";

const Terinary = () => {

    const [Sample,setSample] = useState(true);
    return (
        <>
            <h2>Terinary Component</h2>
            {
                Sample ? <div>Welcome to Terinary Operator</div> : <div>Terinary Operator Failed</div>
            }
            <button onClick={() => setSample(!Sample)}>Toggle Message</button>
        </>
    )
}

export default Terinary;