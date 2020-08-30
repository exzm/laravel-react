import React from 'react';
import ReactDOM from "react-dom";
import OrderForm from './OrderForm';

const Index = () => {
    return (
        <div className="container my-5">
            <OrderForm/>
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
