import React from 'react';

class Btn extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button type={this.props.type} className="btn btn-default">{this.props.children}</button>
                </div>
            </div>
        )
    }
}

export default Btn