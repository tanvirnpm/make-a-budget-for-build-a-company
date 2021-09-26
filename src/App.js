import { useEffect } from "react";
import ComputerComponent from "./Components/ComputerComponent/ComputerComponent";
import Header from "./Components/Header/Header";
import datas from './data.json'
function App() {

  useEffect(()=>{
    fetch(datas)
    .then(res => res.json())
    .then(data => console.log(data))
  },[]);
  
  return (
    <div>
      <Header />
      <ComputerComponent />

    </div>
  );
}

export default App;
