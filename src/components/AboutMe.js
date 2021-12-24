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
                <strong>Name: </strong>
                <span> Jerald Malacaste Batal</span>
              </div>
              <div>
                <strong>Profile: </strong>
                <span> Aspiring Web Developer</span>
              </div>
              <div>
                <strong>Gmail: </strong>
                <span> btljrld22@gmail.com</span>
              </div>
              <div>
                <strong>Mobile Number: </strong>
                <span> 09462469596</span>
              </div>
            </div>
          </div>

          <div className="about_left_body">
            <h1>Proficient</h1>
            <div className="about_left_title" >
              <div>
                <p>REACT JS</p>
                <p className="reactJs">
                  <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 80%', borderRadius: '50px' }}></strong>
                  <strong style={{ color: 'gray', position: 'absolute', right: '0' }}>80%</strong>
                </p>
              </div>

              <div>
                <p>CSS</p>
                <p className="reactJs">
                  <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 65%', borderRadius: '50px' }}></strong>
                  <strong style={{ color: 'gray', position: 'absolute', right: '0' }}>65%</strong>
                </p>
              </div>

              <div>
                <p>HTML</p>
                <p className="reactJs">
                  <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 90%', borderRadius: '50px' }}>
                  </strong><strong style={{ color: 'gray', position: 'absolute', right: '0' }}>90%</strong>
                </p>
              </div>

              <div>
                <p>JAVASCRIPT</p>
                <p className="reactJs">
                  <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 60%', borderRadius: '50px' }}></strong>
                  <strong style={{ color: 'gray', position: 'absolute', right: '0' }}>60%</strong>
                </p>
              </div>

              <div>
                <p>RUBY ON RAILS</p>
                <p className="reactJs">
                  <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 55%', borderRadius: '50px' }}></strong>
                  <strong style={{ color: 'gray', position: 'absolute', right: '0' }}>55%</strong>
                </p>
              </div>
            </div>
            <h1>Exposure</h1>
            <div className="about_left_title">
              <div>
                <p>NODE JS</p>
                <p className="reactJs">
                  <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 50%', borderRadius: '50px' }}></strong>
                  <strong style={{ color: 'gray', position: 'absolute', right: '0' }}>50%</strong>
                </p>
              </div>

              <div>
                <p>EXPRESS JS</p>
                <p className="reactJs">
                  <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 50%', borderRadius: '50px' }}></strong>
                  <strong style={{ color: 'gray', position: 'absolute', right: '0' }}>50%</strong>
                </p>
              </div>

              <div>
                <p>MonggoDB</p>
                <p className="reactJs"> <strong style={{ backgroundColor: 'cyan', padding: '0px 0px 0px 45%', borderRadius: '50px', height: '1px' }}></strong>
                  <strong style={{ color: 'gray', position: 'absolute', right: '0' }}>45%</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="about_right">
          <h1>About Me</h1>
          <p>Hello, my name is Jerald you can call me jb jer or rald, I am 4 years graduate of Bachelor of Science in Hotel and Restuarant Management. I am a career shifteer into software engineer career which I develope my skills and knowledge when it comes to coding and I realized that I have my fashion to build and published a website.
            My career goals is to become one of the most professional web developer and be a fullstack developer someday.
            My hobbies is playing basketball , mobile games, computer games, instrumental guitar which I arranged that makes me feel relaxing and I Also watching K Drama, Netflix movies when I feel stuck or boring to code.
          </p>
        </div>
      </div>
    </div >
  )
}

export default AboutMe
