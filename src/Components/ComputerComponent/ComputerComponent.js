import React from 'react';
import DisplayComputerComponent from './DisplayComputerComponent';

const ComputerComponent = (props) => {
    const {computerComponent, getComputerComponent} = props;
    // console.log(computerComponent);
    return (
        <div>
            <h6 className="bg-warning rounded p-1 border shadow-sm">Core Components</h6>
            {
                computerComponent.map(item => <DisplayComputerComponent key={item.id} item={item} getComputerComponent={getComputerComponent}/>)
            }
        </div>
    );
};

export default ComputerComponent;