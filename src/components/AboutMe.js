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
          <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
          <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
          <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
        </div>
      </div>
    </div >
  )
}

export default AboutMe
