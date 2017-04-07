import React from 'react';
import Input from './input'
import SelectField from './selectField'
import RadioBtn from './radio_btn';
import ProcurerSelect from './procurer'
import * as firebase from 'firebase';
import Heading from './heading'


class DonateForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        // this.getValues = this.getValues.bind(this)
        this.state = {
            // donorInfo: {},
            // a : [],
            donorsInfo: []
        }
    }
   
    submitHandler(e) {
        e.preventDefault();
        let donorInfo = {
            donorName: this.refs.donor_name.state.value,
            donorAge: this.refs.donor_age.state.value,
            donorWeight: this.refs.donor_weight.state.value,
            // donorCountry: this.refs.donor_country.state.value,
            donorCity: this.refs.donor_city.state.value,
            donorContact: this.refs.donor_contact.state.value,
            donorGender: this.refs.gender.state.selectedValue,
            donorBloodGroup: this.refs.blood_group.state.value
        }
        firebase.database().ref('donors/').push({ donorInfo }).then(
            console.log('success')
        );
        // var commentsRef = firebase.database().ref('donors/');
        // commentsRef.on('child_added', function (data) {
            // addCommentElement(postElement, data.key, data.val().text, data.val().author);
            // console.log(data.val().uid);
        // });s
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                       <SelectField ref="blood_group" />                 
                    <Input htmlFor="name" ref="donor_name" defaultValue="n/a" type="text">Name</Input>
                    <Input htmlFor="age" ref="donor_age" type="number" defaultValue="n/a">Age</Input>
                    <Input htmlFor="Weight" ref="donor_weight" type="number" defaultValue="n/a">Weight</Input>
                    <Input htmlFor="City" ref="donor_city" type="text" defaultValue="n/a">City</Input>
                    {/*<Input htmlFor="Country" ref="donor_country" type="text" >Country</Input>*/}
                    <Input htmlFor="contact" ref="donor_contact" type="number" defaultValue="n/a">Contact</Input>
                    <div>Gender</div>
                    <RadioBtn name="gender" value1='Male' value2="Female" label1="male" label2="Female" title="Gender" ref="gender" />
                    <input type="submit" value="Submit form" />
                </form>
                {/*<form onSubmit={this.getValues}>*/}
                    {/*<SelectField ref="blood_group" />
                    <input type="button" value="get value" className="btn btn-primary" onClick={this.getValues} />*/}
                {/*</form>*/}

                {/*<ProcurerSelect ref="selectedValue" submitHandler={this.getValues}/>*/}
                {/*<SelectField ref="selectedValue" />*/}
                
        
            </div>
        )
        // }
    }
}


export default DonateForm
