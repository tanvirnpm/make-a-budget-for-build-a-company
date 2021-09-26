import React from 'react';

const DisplayComputerComponent = () => {
    return (
        <div className="d-flex border rounded py-3 mb-2">
            <div className="thumbnil">
                <img src="https://www.startech.com.bd/image/cache/catalog/processor/Intel/g6400/g6400-tray-228x228.jpg" alt="" />
            </div>
            <div className="details">
                <h4>Intel Pentium Gold G6400 10th gen Coffee Lake Processor (Tray)</h4>
                <p className="bg-light"><b>Price:</b> 5,750৳</p>
                <p className="m-0"><b>Category:</b> CPU</p>
                <p className="m-0"><b>Brand:</b> Intel</p>
                <p><b>Model:</b> Pentium Gold G6400</p>
                <h5>Key Features</h5>
                <ul>
                    <li>Socket Supported FCLGA1200</li>
                    <li>Socket Supported FCLGA1200</li>
                    <li>Socket Supported FCLGA1200</li>
                    <li>Socket Supported FCLGA1200</li>
                    <li>Socket Supported FCLGA1200</li>
                </ul>
                <button className="btn btn-warning">
                <i class="fas fa-cart-plus"></i> 
                Buy Now</button>
            </div>
        </div>
    );
};

export default DisplayComputerComponent;