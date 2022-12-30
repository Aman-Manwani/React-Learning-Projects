import React, { useState } from 'react'

const Contact = () => {

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.FullName}and Email is ${data.Email}`)
  }

  const inputevent = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const [data, setdata] = useState({
    FullName: '',
    Email: '',
    Phone: '',
    Message: ''
  });
  return (
    <>
      <h1 className='contact_heading'>Contact Us</h1>
      <div className='main_contact'>
      <form onSubmit={formSubmit} action="" className='contact_form'>
        <div className='input1'>
          <label htmlFor="">FullName : </label>
          <input
            type="text"
            className='fullname_con'
            placeholder='Enter your FullName'
            name='FullName'
            value={data.FullName}
            onChange={inputevent}
          >
          </input>
        </div>

        <div className='input1'>
          <label htmlFor="">Email Address : </label>
          <input
            type="email"
            className='email_con'
            placeholder='abc@example.com'
            name='Email'
            value={data.Email}
            onChange={inputevent}
          >
          </input>
        </div>

        <div className='input1'>
          <label htmlFor="">Phone Number : </label>
          <input
            type="text"
            className='phone_con'
            placeholder='Enter your Phone Number '
            name='Phone'
            value={data.Phone}
            onChange={inputevent}
          >
          </input>
        </div>

        <div className='input1'>
          <label htmlFor="">Message : </label>
          <input
            type="text"
            className='message_con'
            placeholder='Enter your Message'
            name='Message'
            value={data.Message}
            onChange={inputevent}
          >
          </input>
        </div>
        <button className='contact_btn'>Submit</button>
      </form></div>
    </>
  )
}

export default Contact;
