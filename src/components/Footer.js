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
            <a href="https://www.facebook.com/jeraldbatal22"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/jeraldbatal/"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/jeraldbatal22/"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/jeraldbatal22"><i className="fab fa-github"></i></a>

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
          <p>Hello, my name is Jerald. You can call me JB, Jer, or Rald. I am 4 years graduated in Bachelor of Science degree in Hotel and Restaurant Management. I recently made a career shift into the field of software engineering to further develop my coding skills and knowledge. I discovered a passion for building and publishing websites along the way. My career goal is to become a highly skilled and professional web developer, with aspirations of becoming a full-stack developer in the future. In my free time, I enjoy playing basketball, mobile games, and computer games. I also find relaxation in playing the guitar instrumentally and arranging music. Additionally, I like to watch K-Dramas and Netflix movies when I feel stuck or bored with coding.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
