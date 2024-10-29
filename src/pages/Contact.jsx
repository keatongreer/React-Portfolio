import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {

  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'message':
        return setMessage(value);
      default:
        return;
    }
  };

  const validateField = (fieldName, value) => {
    let errorMsg = '';
    if (!value) {
      errorMsg = `${fieldName} is required`;
    } else if (fieldName === 'email' && !validateEmail(value)) {
      errorMsg = 'Invalid email address';
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMsg }));
  };

  // email validation regex sourced from module 12 activity 16 helper.js
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // There is nowhere to send this data to at the moment so I will just clear the inputs
    setName('');
    setEmail('');
    setMessage('');
    setErrors({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="container text-center">
    <h1>Contact</h1>
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        value={name}
        name="name"
        onChange={handleInputChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Name"
      />
      {errors.name && 
        <p style={{color:'red'}}>{errors.name}</p>
      }
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Email"
      />
      {errors.email && 
        <p style={{color:'red'}}>{errors.email}</p>
      }
      <textarea
        value={message}
        name="message"
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder="Message"
      />
      {errors.message && 
        <p style={{color:'red'}}>{errors.message}</p>
      }
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
  );
}