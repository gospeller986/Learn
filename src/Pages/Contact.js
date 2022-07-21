import React from 'react'
import web from '../images/img2.webp'
import './Home.css'
import web1 from '../images/img1.webp'
import web3 from '../images/img3.webp'

function Contact() {
    return (
        <div>
         
         <div className='contactus'><h1>Contact US</h1></div>
        
        <div className='form-container'>
             <div className="container">
  <form >
    <div className="row">
      <div className="col-25">
        <label for="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="country">Country</label>
      </div>
   
    </div>
    <div className="row">
      <div className="col-25">
        <label for="subject">Subject</label>
      </div>
      <div className="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div className="row">
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>
        </div>
        </div>
    )
}

export default Contact