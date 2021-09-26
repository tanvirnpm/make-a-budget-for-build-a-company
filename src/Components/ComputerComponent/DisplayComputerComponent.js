import React from 'react';

const DisplayComputerComponent = (props) => {
    const {getComputerComponent, item} = props;
    const {id, title, brand, category, features, model, pictureURL, price,} = item;
    // console.log(props)
    return (
        <div className="d-flex  border rounded py-3 mb-2">
            <div className="thumbnil">
                <img src={pictureURL} className="img-fluid" alt="" />
            </div>
            <div className="details">
                <h4>{title}</h4>
                <p className="bg-light"><b>Price:</b> {price}৳</p>
                <p className="m-0"><b>Category:</b> {category}</p>
                <p className="m-0"><b>Brand:</b> {brand}</p>
                <p><b>Model:</b> {model}</p>
                <h5>Key Features</h5>
                <ul>
                    {
                        features.map(li => <li key={li}>{li}</li>)
                    }
                </ul>
                <button onClick={() => getComputerComponent(item)} className="btn btn-warning">
                <i className="fas fa-cart-plus"></i> 
                Buy Now</button>
            </div>
        </div>
    );
};

export default DisplayComputerComponent;