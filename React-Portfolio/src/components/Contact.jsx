import { useState } from 'react';

export default function Contact() {

  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    e.preventDefault();

    // There is nowhere to send this data to at the moment so I will just clear the inputs
    setName('');
    setEmail('');
    setMessage('');
  };
  
  return (
    <div className="container text-center">
    <h1>Contact</h1>
    <form className="form" onSubmit={handleFormSubmit}>
      <input
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="Name"
      />
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="text"
        placeholder="Email"
      />
      <input
        value={message}
        name="message"
        onChange={handleInputChange}
        type="textarea"
        placeholder="Message"
      />
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
  );
}