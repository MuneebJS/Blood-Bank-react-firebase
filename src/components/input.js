import React from 'react';

class InputField extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label className="control-label col-sm-2" htmlFor={this.props.htmlFor}>{this.props.children}</label>
                <div className="col-sm-10">
                    <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} ref={this.props.email} />
                </div>
            </div>
        )
    }
}

export default InputField