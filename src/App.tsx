import React from 'react';
import './App.css';
// import Apple from './apple';
// import NestedComponent from './example/NestedComponent';
// import natureImg from './assets/nature.jpg';
import FirstComp from './Props/FirstComp';
import SecondComp from './Props/SecondComp';
import ThirdComp from './Props/ThirdComp';
import FourthComp from './Props/FourthComp';
import PropsDestructure from './Props/PropsDestructure';
import Usestate from './Hooks/Usestate';
import Clickevent from './Clickevent';
import Terinary from './Terinary';


const user = {
  FirstName: 'Ravi Nomula',
  Area: 'Secunderabad',
  city: 'Hyderabad'
}
const myCar = {
    brand: "Ford",
    model: "Mustang",
    year: 1969,
    color: "red"
  };
  
function App() {
  

  return (
    <>
      {/* <Apple />
      <NestedComponent/> */}
      {/* <img src="./images/nature.jpg" alt="Placeholder " />
      <img src={natureImg} alt="Placeholder " /> */}

      {/* Props Send from Parent Component to Child Component */}
      <FirstComp   name="Ravi" area={user.Area} />
      <SecondComp  name="Samatha" area={user.Area}/>
      <ThirdComp name="Vihaan" area={user.Area} />
      <FourthComp name="Sahasra" area={user.Area}/>
      <PropsDestructure myCar={myCar} /> // Props Destructure Component
      <Usestate />
      <Terinary />
      <Clickevent />
    </>
  )
}

export default App
