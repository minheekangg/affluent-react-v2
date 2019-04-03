import React from 'react';
import { Button, Form } from "semantic-ui-react";

export default class Contact extends React.Component{
    state = {
        fullName: '',
        email: '',
        phone: '',
        message: ''
    }

   handleChange = event =>{
       this.setState({ [event.target.name]: event.target.value})
   }

   handleSubmit = () =>{
       console.log(this.state)
    //    POST TO BACK END
       this.setState({
           fullName: '',
           email: '',
           phone: '',
           message: ''})
   }

    render(){
        return (
          <div id="aboutpage-1">
            <div id="contact">
              <h2>Contact Us</h2>
              <div>
                If you have questions about applying for a cash advance
                or what else we offer, please get in touch with us!
              </div>
              <Form onSubmit={this.handleSubmit}style={{ width: "50%" }}>
                <Form.Field >
                  <label>Full Name</label>
                  <input onChange={this.handleChange}name="fullName" value={this.state.fullName} />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input onChange={this.handleChange} name="email" value={this.state.email} />
                </Form.Field>
                <Form.Field >
                  <label>Phone Number</label>
                  <input onChange={this.handleChange} name="phone"
                    value={this.state.phone}
                    placeholder="(xxx)xxx-xxxx"
                  />
                </Form.Field>
                <Form.TextArea onChange={this.handleChange}
                  name="message" 
                  label="Message"
                  value={this.state.message}
                />
                <Button type="submit" id="form-submit">Submit</Button>
              </Form>
            </div>
          </div>
        );
    }
}