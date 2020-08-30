import React from 'react';
import {useForm} from 'react-hook-form';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


const OrderForm = () => {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div>
            <hr className="my-4"/>

            <h4 className="mb-5 h4">Example order page</h4>

            <form className="needs-validation">
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label>Name</label>
                        <input type="text" className="form-control"
                               placeholder="Name" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Phone</label>
                        <input type="text" className="form-control"
                               placeholder="Phone" value="" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label>Delivery address</label>
                        <input type="text" className="form-control"
                               placeholder="Delivery address" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label>Delivery date</label>
                        <DayPicker/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
