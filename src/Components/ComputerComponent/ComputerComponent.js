import React from 'react';
import DisplayComputerComponent from './DisplayComputerComponent';

const ComputerComponent = () => {
    return (
        <div>
            <h6 className="bg-warning rounded p-1 border shadow-sm">Core Components</h6>
            <DisplayComputerComponent/>
            <DisplayComputerComponent/>
            <DisplayComputerComponent/>
        </div>
    );
};

export default ComputerComponent;