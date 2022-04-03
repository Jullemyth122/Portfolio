import React from 'react'
import img1 from './assets-link/1.png'
import img2 from './assets-link/2.png'
import img3 from './assets-link/3.png'
import img4 from './assets-link/4.png'
import img5 from './assets-link/5.png'
import img6 from './assets-link/6.png'


function Project() {
    return (
        <div  className='section'>
            <div id='scroll-3' className="padding-section">
                
                <div className="title">
                    <h2> 3 </h2>
                    <h2> Projects </h2>
                </div>

                <div className="block-items">
                    <div className="box">
                        <img src={img1} alt="" />
                        <div className="link">
                            <a href="https://xenodochial-jennings-259d27.netlify.app/">
                                <ion-icon name="link-outline"></ion-icon>         
                                <h4> Frontend </h4>                     
                            </a>
                        </div>
                        
                    </div>
                    <div className="box">
                        <img src={img2} alt="" />
                        <div className="link">
                            <a href="https://hardcore-hermann-d5b875.netlify.app">
                                <ion-icon name="link-outline"></ion-icon>                                
                                <h4> Frontend </h4>                     

                            </a>
                        </div>

                    </div>
                    <div className="box">
                        <img src={img3} alt="" />
                        <div className="link">
                            
                            <a href="https://elated-agnesi-01b70d.netlify.app/">
                                <ion-icon name="link-outline"></ion-icon>                                
                                <h4> Frontend </h4> 
                            </a>
                        </div>

                    </div>
                    <div className="box">
                        <img src={img4} alt="" />
                        <div className="link">
                            <a href="https://stoic-williams-2441f7.netlify.app/">
                                <ion-icon name="link-outline"></ion-icon> 
                                <h4> Frontend </h4>                                
                            </a>
                        </div>

                    </div>
                    <div className="box">
                        <img src={img5} alt="" />
                        <div className="link">
                            <a href="https://trusting-volhard-c43d9a.netlify.app/">
                                <ion-icon name="link-outline"></ion-icon>    
                                <h4> Frontend </h4>                             
                            </a>
                        </div>

                    </div>
                    <div className="box">
                        <img src={img6} alt="" />
                        <div className="link">
                            <a href="https://your-message-to-xenex.herokuapp.com/">
                                <ion-icon name="link-outline"></ion-icon>       
                                <h4> Full Stack </h4>                         
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project