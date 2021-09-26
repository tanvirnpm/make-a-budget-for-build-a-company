import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import ComputerComponent from "./Components/ComputerComponent/ComputerComponent";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const [computerComponent, setComputerComponent] = useState([]);
  useEffect(() => {
    fetch('./data/data.json')
    .then(response => response.json())
    .then(json => setComputerComponent(json))
  }, []);
  console.log(computerComponent)

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-light">
          <Header />
        </div>
        <div className="col-8">
          <ComputerComponent />
        </div>
        <div className="col-4 bg-secondary">
          <Cart/>
        </div>
        <div className="col-12 bg-light">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
