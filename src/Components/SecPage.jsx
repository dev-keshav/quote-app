import React from 'react'
import { Link } from 'react-router-dom'
import './secPage.css'

const SecPage = () => {
  return (
    <div className="App">
      <div className='quote'>
      <button className='back-btn'><Link to="../">Back</Link></button>
      <div className='contact-form'>
          {/* <div class="alert">Your message sent</div> */}
          <h4>Send your quote &#128512;</h4>
          
          <div class="contact-form-space">
            <form action="" id="contactForm">
              {/* <p class="p-contact">Name</p> */}
              <input type="text" id="name" placeholder="Author" class="contact-from-txt" />

              {/* <p class="p-contact">Message</p> */}
              <textarea placeholder="Quote" id="msgContent" class="contact-from-txtarea"></textarea>
                <br />
              <input type="submit" id="submit" name="Submit" class="contact-from-btn" />
              <br/>
            </form>
          </div>
          <em className='hr'>It will be added within 24hr<br/>_____Aur kuch ?</em>

        </div>
      </div>
    </div>
  )
}

export default SecPage