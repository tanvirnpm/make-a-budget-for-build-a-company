import React from 'react';

const DisplayComputerComponent = (props) => {
    const {getComputerComponent, item} = props;
    const {id, name, city, designation, expertise, pictureURL, salary,} = item;
    // console.log(props)
    return (
        <div className="col-md-4">
            <div className="d-flex flex-column border rounded p-3 mb-2">
                <div className="d-flex">
                    <img src={pictureURL} className="img-fluid mx-auto d-block" alt="" style={{borderRadius: '50%', border: '1px solid #ddd'}} />
                </div>
                <div className="details">
                    <h4>{name}</h4>
                    <p className="bg-light"><b>Salary:</b> {salary}৳</p>
                    <p className="m-0"><b>Designation:</b> {designation}</p>
                    <p className="m-0"><b>From:</b> {city}</p>
                    <h5>Expertise</h5>
                    <ul>
                        {
                            expertise.map(li => <li key={li}>{li}</li>)
                        }
                    </ul>
                    <button onClick={() => getComputerComponent(item)} className="btn btn-warning float-end">
                    <i className="fas fa-cart-plus"></i> 
                    Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayComputerComponent;