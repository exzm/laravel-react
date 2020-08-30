import * as React from 'react';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        fetch('/api/order/store', {
            method: 'POST',
            body: JSON.stringify(this.state),
        }).then(function(response) {
            console.log(response);
            return response.json();
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Новый заказ</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label className="col-4 col-form-label"
                               htmlFor="text">Name</label>
                        <div className="col-8">
                            <input id="text" name="text" type="text"
                                   className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone"
                               className="col-4 col-form-label">Phone</label>
                        <div className="col-8">
                            <input id="phone" name="phone" type="text"
                                   className="form-control"
                                   required="required"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-4 col-8">
                            <button name="submit" type="submit"
                                    className="btn btn-primary">Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default OrderForm;
