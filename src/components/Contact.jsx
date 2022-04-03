import React from 'react'

function Contact() {
    return (
        <div className='section'>
            <div id='scroll-5' className="padding-section">

                <div className="title">
                    <div className="number">
                        <h2> 5 </h2>
                    </div>
                    <h2> Contacts </h2>
                </div>

                <div className="contacts">
                    <div className="gmail">
                        <h3><ion-icon name="logo-google"></ion-icon>mythicalxenon12@gmail.com</h3>
                    </div>
                    <div className="contact">
                        
                        <ion-icon name="call-outline"></ion-icon>
                        <div className="number">
                            <h3> 09633266195 </h3>
                            <h3> 09959836943 </h3>        
                        </div>
                    
                    </div>
                </div>
                <div className="social-accounts">
                    <a href="">
                        𝕏𝕖𝕟𝕖𝕩#4942
                        <ion-icon name="logo-discord"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/x_e_n_e_x_1_2/">
                        x_e_n_e_x_1_2
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/myt.vince.3/">
                    myt.vince.3
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>
                <div className="program-account">
                    <a href="https://github.com/Jullemyth122">
                    Jullemyth122
                    <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/myth-xenodo-5b405021a/">
                    myth-xenodo-5b405021a
                    <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact