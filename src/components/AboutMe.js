import React from 'react'
import '../components/AboutMe.css'
import image from '../images/jb.jpg'
const AboutMe = () => {
  return (
    <div className="aboutContainer" id="aboutContainer">
      <div className="about_card">
        <div className="about_left">
          <div className="about_left_header">
            <div className="image"><img src={image} alt="" height="130" width="130" /></div>
            <div className="details">
              <div>
                <strong>Name:</strong>
                <span>Jerald Malacaste Batal</span>
              </div>
              <div>
                <strong>Profile:</strong>
                <span>Aspiring Web Developer</span>
              </div>
              <div>
                <strong>Gmail:</strong>
                <span>btljrld22@gmail.com</span>
              </div>
              <div>
                <strong>Mobile Number:</strong>
                <span>09462469596</span>
              </div>
            </div>
          </div>

          <div className="about_left_body">
            <h1>Proficient</h1>
            <div className="about_left_title" >
              <div>
                <p>REACT JS</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>

              <div>
                <p>CSS</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>

              <div>
                <p>HTML</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>

              <div>
                <p>JAVASCRIPT</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>

              <div>
                <p>RUBY ON RAILS</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>
            </div>
            <h1>Exposure</h1>
            <div className="about_left_title">
              <div>
                <p>NODE JS</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>

              <div>
                <p>EXPRESS JS</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>

              <div>
                <p>FIREBASE</p>
                <span>-----------------------------------------------------------------------------------</span>
              </div>
            </div>
          </div>

        </div>
        <div className="about_right">
          <h1>About Me</h1>
          <p>Hello, my name is Jerald you can call me jb jer or rald, I am 4 years graduate of Bachelor of Science in Hotel and Restuarant Management. I am a career shifteer into software engineer career which I develop my skills and knowledge when it comes to coding and I realized that I have my fashion to build and published a website.</p>
          <p>My career goals is to become one of the most professional web developer and be a fullstack developer someday.</p>
          <p>My hobies is playing basketball , mobile games, computer games, instrumental guitar which I arranged that makes me feel relaxing and I Also watching K Drama, Netflix movies when I feel stuck or bored to code.</p>
        </div>
      </div>
    </div >
  )
}

export default AboutMe
