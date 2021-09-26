import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import ComputerComponent from "./Components/ComputerComponent/ComputerComponent";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const [computerComponent, setComputerComponent] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./data/data.json')
    .then(response => response.json())
    .then(json => setComputerComponent(json))
  }, []);
  const getComputerComponent = (item) => {
    // console.log(item)
    const newCart = [...cart, item];
    setCart(newCart)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 sticky-top bg-light">
          <Header />
        </div>
        <div className="col-8">
          <ComputerComponent computerComponent={computerComponent} getComputerComponent={getComputerComponent} />
        </div>
        <div className="col-4 ">
          <Cart className="position-fixed" cart={cart}/>
        </div>
        <div className="col-12">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
