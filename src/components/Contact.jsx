import React from 'react'
import Custombutton from "./Custombutton"
import "../App4.css"


const Contact = () => {
    return (
        <div className="Main2">
        <div className="head">
        <h1>Contact Us </h1>
        </div>

        <div className="Main1" >

        <form className="form">
   

      <label>Name</label>
      <input
        placeholder="Name"
      />

      <label>Email</label>
      <input
        placeholder="Email"
      />

      <label>Subject</label>
      <input
        placeholder="Subject"
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
      ></textarea>

      <Custombutton txt="Submit" type="submit" />

      
    </form>
    </div>
      
        </div>
    )
}

export default Contact