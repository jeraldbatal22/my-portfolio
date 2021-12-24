import React from 'react'
import '../components/Footer.css'
const Footer = () => {

  const sendMessageHandler = () => {
    alert('This feature is not yet available!')
  }

  return (
    <footer id='contact'>
      <div className='footerContent'>
        <div className='leftFooter'>
          <label>Socail Media Platform</label>
          <div className='groupIcon'>
            <a href="https://www.facebook.com/jeraldbatal22"><i class="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/jeraldbatal/"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/jeraldbatal22/"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/jeraldbatal22"><i class="fab fa-github"></i></a>

          </div>
        </div>
        <div className='centerFooter'>
          <h1>Send FeedBack</h1>
          <div className='formGroup'>
            <label>Email</label>
            <input type="text" value="jbjrld22@gmail.com" disabled />
          </div>
          <div className='formGroup'>
            <label>Message</label>
            <textarea type="textarea" rows="6" cols="50" />
          </div>
          <div className='formGroup'>
            <button onClick={sendMessageHandler}>Send</button>
          </div>
        </div>
        <div className='rightFooter'>
          <h1>About Me</h1>
          <p>Hello, my name is Jerald you can call me jb jer or rald, I am 4 years graduate of Bachelor of Science in Hotel and Restuarant Management. I am a career shifteer into software engineer career which I develop my skills and knowledge when it comes to coding and I realized that I have my fashion to build and published a website.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
