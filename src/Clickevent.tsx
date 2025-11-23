import { useState } from "react";

const Clickevent = () => {

    const [number, setNumber] = useState(0);

    const increament = () => {
        setNumber (number + 1);
    }
    const decreament = () => {
        if(number > 0  )
        setNumber (number - 1);
    }
    const reset = () => {
        setNumber (0);
    }
   return (
    <div>
        <h3>{number}</h3>
      <button type="button" onClick={increament}>Increament</button>
      <button type="button" onClick={decreament}>Decreament</button>
      <button type="button" onClick={reset}>Reset</button>
    </div>
   )
 }
  
    export default Clickevent;