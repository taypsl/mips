import React, { Component } from 'react';
import axios from 'axios';
// var jsonp = require('jsonp');

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitForm } from '../../modules/submitForm'

class Form extends Component {
	state = {
    form_field_1: '',
    form_field_2: '',
    form_field_3: '',
    form_field_4: ''
	}
	

  handleChange = event => {
  	console.log(event.target.value, 'value');
    this.setState({ [event.target.name]: event.target.value });
  }

	handleSubmit = event => {
    event.preventDefault();

    const formData = {
      form_field_1: this.state.form_field_1,
      form_field_2: this.state.form_field_2,
      form_field_3: this.state.form_field_3,
      form_field_4: this.state.form_field_4,      
  	};
  // 	 submitForm(formData)
  // const parsedFormData = JSON.parse(formData)
  // console.log(parsedFormData, 'parsedFormData')
  // // axios.get(`https://script.google.com/macros/s/AKfycbzrYqk0GHc_B7vhHpwYAhqzGaQ2WQbP-EpnJ0LJpzvagKd52d2U/exec`, { parsedFormData })
  // //   .then(res => {
  // //     console.log(res);
  // //     console.log(res.data);
  // //   })

  	axios.get(`https://script.google.com/macros/s/AKfycbzrYqk0GHc_B7vhHpwYAhqzGaQ2WQbP-EpnJ0LJpzvagKd52d2U/exec`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      data: formData,
      credentials: 'same-origin',
  	})
  	.then(res => {
      console.log(res);
      console.log(res.data);
    })
  }



	render() {
		return (
			<div className="Form">
				<form id="test-form" onSubmit={this.handleSubmit}>
  
				  <div>
				    <label>Your Name</label>
				    <input className="form-input-css" type="text" name="form_field_1" placeholder="First and Last Name" onChange={this.handleChange}/>
				  </div>

				  <div>
				    <label>Will you attend the Reception on Friday June 30th?</label>
				    <input className="form-input-css" type="radio" name="form_field_2" value="Yes" onChange={this.handleChange} /> Yes, I'll be there!
				    <input className="form-input-css" type="radio" name="form_field_2" value="No" onChange={this.handleChange} />No, I will not be able to make it.
				  </div>
				  
				{/* add form logic so they only see # guests if they are going */}	
			  <div>
				    <label>How many guests will you be bringing?</label>
				    <input className="form-input-css" type="text" name="form_field_3" placeholder="Number of guests" onChange={this.handleChange} />
				  </div>
				  
				  <div>
				    <label>Leave a message for the bride and groom!</label>
				    <input className="form-input-css" type="text" name="form_field_4" onChange={this.handleChange} />
				  </div>

				  <div>
				    <button type="submit"id="submit-form">Submit</button>
				  </div>

				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  message: state.submitForm.message,
 });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      submitForm
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Form);