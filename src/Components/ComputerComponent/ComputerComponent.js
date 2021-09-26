import React from 'react';
import DisplayComputerComponent from './DisplayComputerComponent';

const ComputerComponent = (props) => {
    const {computerComponent, getComputerComponent} = props;
    // console.log(computerComponent);
    return (
        <div className="row">
            {
                computerComponent.map(item => <DisplayComputerComponent key={item.id} item={item} getComputerComponent={getComputerComponent}/>)
            }
        </div>
    );
};

export default ComputerComponent;