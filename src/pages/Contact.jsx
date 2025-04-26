import React from 'react'
import './Contact.css';

export default function Contact() {

  return (
    <div>
      <h2>Contact Us</h2>
    <div className="container">
    <form >
        <label htmlFor="username">Username:
          <input type="text" placeholder='username'   required/>
        </label>
        
        <label htmlFor="email">Email:
           <input type="email" placeholder='xyz@gmail.com'  required/>
        </label>
        
        <label htmlFor="Query">Query:
          <textarea name="Query" id="msg">
            message
          </textarea>
        </label>

        <input type="submit" id="submit" />
      </form>
    </div>  
    </div>  
      
  )
}
