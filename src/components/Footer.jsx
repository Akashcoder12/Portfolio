import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer>
       <div className='footer-details'>
          <a href="https://github.com/Akashcoder12" target="_blank" rel="noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/akash-gupta-a1a123250/" target="_blank" rel="noreferrer">LinkedIn</a> 
          
          <p>&copy; {new Date().getFullYear()} Akash Gupta. All rights reserved.</p>
       </div>
    </footer>
  )
}
