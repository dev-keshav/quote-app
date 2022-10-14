import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './secPage.css'

const SecPage = () => {

  const [userData, setUserData] = useState({
    name: "",
    quote: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  }

  // Connect with firebase 
  const submitData = async (event) => {
    event.preventDefault();
    const { name, quote } = userData;

    if (name && quote) {



      const res = fetch("https://unfold-quote-default-rtdb.firebaseio.com/userDataQuote.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            quote
          })
        }
      );

      if (res) {
        setUserData({ name: "", quote: "" })
        alert("Aapka data send ho gya hai");
      }
      else {
        alert("Bhai phele fill to kro");
      }



    }
    else {
      alert("Bhai phele fill to kro");
    }
  }

  return (
    <div className="App">
      <div className='quote'>
        <button className='back-btn'><Link to="../">Back</Link></button>
        <div className='contact-form'>
          {/* <div class="alert">Your message sent</div> */}
          <h4>Send your quote &#128512;</h4>

          <div class="contact-form-space">
            <form method='POST' action="" id="contactForm">
              {/* <p class="p-contact">Name</p> */}
              <input type="text" id="name" placeholder="Author" name='name' value={userData.name} onChange={postUserData} class="contact-from-txt" />

              {/* <p class="p-contact">Message</p> */}
              <textarea placeholder="Quote" name='quote' value={userData.quote} onChange={postUserData} id="msgContent" class="contact-from-txtarea"></textarea>
              <br />
              <input type="submit" id="submit" name="Submit" class="contact-from-btn" onClick={submitData} />
              <br />
            </form>
          </div>
          <em className='hr'>It will be added within 24hr<br />_____Aur kuch ?</em>

        </div>
      </div>
    </div>
  )
}

export default SecPage