import React, { Component } from 'react';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  // Handle input change
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handle form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Form Data:', this.state);
    alert(`Form submitted with:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    this.setState({ name: '', email: '', message: '' });
  };

  render() {
    return (
      <div style={{ margin: '50px', maxWidth: '400px' }}>
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              placeholder="Enter your full name"
              onChange={this.handleChange}
              style={{ display: 'block', width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              placeholder="Enter your email"
              onChange={this.handleChange}
              style={{ display: 'block', width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              placeholder="Enter your message"
              onChange={this.handleChange}
              style={{ display: 'block', width: '100%', padding: '8px', height: '100px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SimpleForm;
