import React from 'react'
import pic1 from './assets/react-logo.png'
import pic2 from './assets/node.png'
import pic3 from './assets/css3.png'
import pic4 from './assets/python.png'
import pic5 from './assets/express.png'
import pic6 from './assets/mongodb.png'
import pic7 from './assets/html5.png'
import pic8 from './assets/mysql.png'

function About() {
  
    return (
        <div className='section'>
            <div id='scroll-2' className="padding-section">

                <div className="top">
                    <div className="top-left">

                        <div className="about-animation">

                            <div className="number-about">
                                <div className="number">
                                    <h3> 2 </h3>
                                    <span></span>
                                </div>
                                <div className="about">
                                    <h2> About </h2>
                                    <span></span>

                                </div>
                            </div>

                            <div className="animation">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
             

                            </div>

                        </div>

                    </div>
                </div>

                <div className="bottom">
                    <div className="bottom-left">

                        <div className="title">
                            <h1> Tech Stack </h1>
                        </div>
                        <div className="tech-items">
                            <div className="items">
                                <div className="box">   
                                    <h2> React</h2>
                                    <img src={pic1} alt="" />
                                    <b></b>
                                </div>
                                <div className="box">
                                    <h2> Express.js </h2>
                                    <img src={pic5} alt="" />
                                    <b></b>

                                </div>
                                <div className="box">
                                    <h2> Node.js </h2>
                                    <img src={pic2} alt="" />
                                    <b></b>

                                </div>
                                <div className="box">
                                    <h2> MongoDB </h2>
                                    <img src={pic6} alt="" />

                                    <b></b>

                                </div>
                                <div className="box">
                                    <h2> HTML5 </h2>
                                    <img src={pic7} alt="" />
                                    <b></b>

                                </div>
                                <div className="box">
                                    <h2> Python </h2>
                                    <img src={pic4} alt="" />
                                    <b></b>


                                </div>
                                <div className="box">
                                    <h2>  MySQL </h2>
                                    <img src={pic8} alt="" />
                                    <b></b>

                                </div>
                                <div className="box">
                                    <h2> CSS3 </h2>
                                    <img src={pic3} alt="" />
                                    <b></b>

                                </div>
                            </div>
                            <div className="scroll-bar-box">
                                
                            </div>


                        </div>

                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default About