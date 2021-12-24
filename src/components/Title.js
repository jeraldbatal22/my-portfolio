import React, { useEffect } from 'react'
import Typed from 'typed.js'
import '../components/Title.css'

const Title = () => {


  useEffect(() => {
    var options = {
      strings: ['Jerald Malacaste Batal', 'React Js Web Developer', 'Jr Web Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 100
    };

    new Typed('.autoInput', options);
    // return () => {
    //   typed.destroy();
    // }
  }, [])

  return (
    <div className="title_container">
      <div className="title_body">
        <h1>I am <span className='autoInput'></span> </h1>
        {/* <h2>Hello, I'm Jerald Malacaste Batal Aspiring Web Developer</h2> */}
      </div>
    </div>
  )
}

export default Title
