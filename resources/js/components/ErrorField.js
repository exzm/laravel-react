import React from 'react';
import 'react-day-picker/lib/style.css';

class ErrorField extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {errors, name} = this.props;

        return (
            <div className="invalid-feedback" style={{display: errors[name] ? 'block' : 'none' }}>
                {errors[name] && errors[name].map((error, index) => (<span key={index} className="pr-1">{error}</span>))}
            </div>
        );
    }

}

export default ErrorField;
