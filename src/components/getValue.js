import React from 'react';
import SelectField from './selectField';
import * as firebase from 'firebase';
import Heading from './heading';
// import Search from 'react-search'

class GetValue extends React.Component {
    constructor() {
        super();
        this.state = {
            donorsInfo: []
        }
        this.getValues = this.getValues.bind(this)

    }

    componentWillMount() {
        var rootRef = firebase.database().ref().child('donors');
        rootRef.on('child_added', snap => {
            var arr = [];
            arr = this.state.donorsInfo;
            arr.push(snap.val().donorInfo);
            this.setState({
                donorsInfo: arr
            })
            // console.log(this.state.donorsInfo);
        })
        console.log(this.state.donorsInfo);
    }

    getValues(e) {
        e.preventDefault();
    }

    render() {

        return (
            <div>
                <Heading> Donors List</Heading>
                {/*<div>
        <Search items={this.state.donorsInfo} />
 
        <Search items={this.state.donorsInfo}
                placeholder='Pick your language'
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>*/}

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Blood Group</th>
                            <th>Gender</th>
                            <th>Weight</th>
                            <th>Contact</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    {this.state.donorsInfo.map((v, i) => {
                        return <tbody key={i}>
                            <tr>
                                <td>{v.donorName}</td>
                                <td>{v.donorAge}</td>
                                <td>{v.donorBloodGroup}</td>
                                <td>{v.donorGender}</td>
                                <td>{v.donorWeight}</td>
                                <td>{v.donorContact}</td>
                                <td>{v.donorCity}</td>
                            </tr>
                        </tbody>
                    })}

                </table>

            </div>
        )
    }
}


export default GetValue