import React from 'react';
import Input from './input'

export const SelectField = () => {
    return (
        <select class="selectpicker" multiple>
            <option></option>
            <option>A and B</option>
            <option>A</option>
            <option>B</option>
            <option>O</option>
            <option>Relish</option>
        </select>
    )
}

export const RedioBtn = () => {
    return (
        <div>
            <label class="radio-inline">
                <input type="radio" name="Male">Male</input>
            </label>
            <label class="radio-inline">
                <input type="radio" name="Female">Female</input>
            </label>
            </div>
    )
}


{/*// class DonateForm extends React.Component {*/}
//     render() {
//         return (

//         )
//     }
// }