import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import API from '../api';
import ErrorField from './ErrorField';
import OrdersList from './OrdersList';

class OrderForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tariffs: [],
            disable_days: [],
            price: null,
            delivery_time: null,
            errors: {},
            orders: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTariff = this.handleChangeTariff.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    async componentDidMount() {

        await API.get('/api/tariffs').then(res => {
            const tariffs = res.data;
            this.setState({
                tariffs: tariffs,
                disable_days: this.getDisableDays(tariffs[0].delivery_days),
                price: tariffs[0].price,
            });
        });

        await API.get('/api/orders').then(res => {
            const orders = res.data;
            this.setState({
                orders: orders,
            });
        });
    }

    handleSubmit(event) {
        const form = event.target;
        const data = new FormData(form);

        data.set('delivery_time', this.state.delivery_time);

        API.post('/api/orders/store', data).then(response => {
            const orders =  [...this.state.orders, response.data];
            this.setState({
                orders: orders,
            });
        }).catch(error => {
            this.setState({
                errors: error.response.data.errors,
            });
        });

        event.preventDefault();
    }

    handleChangeTariff(event) {
        const tariff = this.state.tariffs.filter(tariff => {
            return tariff.id == event.target.value;
        });

        this.setState(() => {
            return {
                disable_days: this.getDisableDays(tariff[0].delivery_days),
                price: tariff[0].price,
            };
        });
    }

    handleDayClick(day, modifiers = {}) {
        if (modifiers.disabled) {
            return;
        }
        this.setState(() => {
            return {delivery_time: (day.getTime() / 1000)};
        });
    }

    getDisableDays(delivery_days) {
        return [0, 1, 2, 3, 4, 5, 6].filter(day => !delivery_days.includes(day));
    }

    render() {
        return (

            <div>
                <hr className="my-4"/>

                <h4 className="mb-5 h4">Example order page</h4>

                <form className="needs-validation" onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label>Name</label>
                                    <input name='name' type="text" className="form-control" placeholder="Name"/>
                                    <ErrorField errors={this.state.errors} name="name"/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Phone</label>
                                    <input name="phone" type="text" className="form-control" placeholder="Phone"/>
                                    <ErrorField errors={this.state.errors} name="phone"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label>Delivery address</label>
                                    <input name="address" type="text" className="form-control"
                                           placeholder="Delivery address"/>
                                    <ErrorField errors={this.state.errors} name="address"/>
                                </div>
                                <div className="col-md-5 mb-3">
                                    <label>Tariff</label>
                                    <select name="tariff" onChange={this.handleChangeTariff} className="form-control">
                                        {
                                            this.state.tariffs &&
                                            this.state.tariffs.map(
                                                (item) => <option key={item.id} value={item.id}>{item.name}</option>)
                                        }
                                    </select>
                                    <ErrorField errors={this.state.errors} name="tariff"/>
                                </div>
                                <div className="col-md-1 mb-3">
                                    <label>Price</label>
                                    <div className="mt-2 ml-1">
                                        <b>{this.state.price}$</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label>Delivery date</label>
                                <DayPicker onDayClick={this.handleDayClick}
                                           disabledDays={[
                                               {daysOfWeek: this.state.disable_days},
                                               {before: new Date()},
                                           ]}/>
                                <ErrorField errors={this.state.errors} name="delivery_time"/>
                            </div>
                        </div>
                    </div>


                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                <OrdersList orders={this.state.orders}/>
            </div>
        );
    }
};

export default OrderForm;
