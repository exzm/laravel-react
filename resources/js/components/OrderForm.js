import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import API from '../api';

class OrderForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tariffs: [],
            disable_days: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTariff = this.handleChangeTariff.bind(this);
    }

    async componentDidMount() {
        await API.get('/api/tariffs').then(res => {
            const tariffs = res.data;
            this.setState({tariffs});
        });
    }

    handleSubmit(event) {
        const form = event.target;
        const data = new FormData(form);
        API.post('/api/orders/store', data);
        event.preventDefault();
    }

    handleChangeTariff(event) {
        const tariff = this.state.tariffs.filter(tariff => {
            return tariff.id == event.target.value
        })
        this.state.disable_days = tariff[0].delivery_days;
    }

    render() {
        return (

            <div>
                <hr className="my-4"/>

                <h4 className="mb-5 h4">Example order page</h4>

                <form className="needs-validation" onSubmit={this.handleSubmit}
                      onChange={this.handleChange}>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label>Name</label>
                                    <input name='name'
                                           type="text" className="form-control"
                                           placeholder="Name"/>
                                    <div className="valid-feedback">
                                        qwe
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Phone</label>
                                    <input name="phone"
                                           type="text" className="form-control"
                                           placeholder="Phone"/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label>Delivery address</label>
                                    <input name="address"
                                           type="text" className="form-control"
                                           placeholder="Delivery address"/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Tariff</label>
                                    <select name="tariff" onChange={this.handleChangeTariff}
                                            className="form-control">
                                        {this.state.tariffs &&
                                        this.state.tariffs.map(
                                            (item) => <option
                                                key={item.id}
                                                value={item.id}>{item.name} {item.price}$</option>)}
                                    </select>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label>Delivery date</label>
                                <DayPicker disabledDays={[
                                    { daysOfWeek: this.state.disable_days }
                                ]}/>
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                    </div>


                    <button className="btn btn-primary" type="submit">Submit
                    </button>
                </form>
            </div>
        );
    }
};

export default OrderForm;
