import React from 'react';
import 'react-day-picker/lib/style.css';

class OrdersList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {orders} = this.props;

        return (
            <div>
                <hr/>
                <h3>Orders</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Client</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Tariff</th>
                        <th scope="col">Delivery time</th>
                        <th scope="col">Delivery address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders && orders.map((order, index) => (
                        <tr key={index}>
                            <th scope="row">{order.id}</th>
                            <td>{order.client.name}</td>
                            <td>{order.client.phone}</td>
                            <td>{order.tariff.name}</td>
                            <td>{new Date(order.delivery_time).toDateString()}</td>
                            <td>{order.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <ul>
                </ul>
            </div>
        );
    }

}

export default OrdersList;
