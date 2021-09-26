import { useEffect, useState } from "react";
import Cart from "./Components/Cart/Cart";
import ComputerComponent from "./Components/ComputerComponent/ComputerComponent";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const [computerComponent, setComputerComponent] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((json) => setComputerComponent(json));
  }, []);
  const getComputerComponent = (item) => {
    // console.log(item)
    const newCart = [...cart, item];
    setCart(newCart);
  };

  let totalPrice = 0;
  for (const person of cart) {
    totalPrice = totalPrice + person.salary;
  }

  return (
    <div>
      <div className="bg-light sticky-top shadow-sm">
        <div className="container">
          <div className="row">
            <div className="col-12 bg-light">
              <Header totalPrice={totalPrice} cart={cart} />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-10">
            <h6 className="bg-warning rounded p-1 border shadow-sm">Core Components</h6>
              <ComputerComponent
                  computerComponent={computerComponent}
                  getComputerComponent={getComputerComponent}
                />
          </div>
          <div className="col-md-2">
            <Cart cart={cart} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
