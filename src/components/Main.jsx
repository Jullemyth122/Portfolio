import React,{useEffect, useRef, useState} from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Project from './Project'
import Rate from './Rate'
import './css/MainScroll.css'
import './css/Home.css'
import './css/Navbar.css'
import './css/Project.css'
import './css/Rate.css'
import './css/About.css'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import axios from 'axios'

function Main() {

    const [click,setclick] = useState(null)

    const handleClick = (target) => {
        setclick(target)
    }

    const [username,setUsername] = useState("")
    const [callname,setcallname] = useState("")
 
    const [errorname,setErrorname] = useState("")

    const [show,setshow] = useState(true)

    const handleSubmit = e => {
        
        e.preventDefault()
        setErrorname("Please input any username")

        if (username.length >= 10) {
            setErrorname("Please input atleast 10 letters")
        }
        else if (username.length > 0) {
            setcallname(username)
            setshow(false)
        }
        

    }

    const [view,setView] = useState(0)
    //creating function to load ip address from the API
    const getData = async () => {
        const res = axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=ed75d92bb679494d9d911613daf2f0e9')
            .then(response => {
                axios.get('http://localhost:9999/view/')
                    .then(data => {
                        if (data.data[0].ip_address.includes(response.data.ip_address) == false) {
                            data.data[0].view_count += 1
                            setView(data.data[0].view_count)
                            axios.post('http://localhost:9999/view/get/ip/address',{ip_address:[response.data.ip_address],view_count:data.data[0].view_count})
                                .then(response => {
                                console.log(response.data);
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        }
                    })
                    .catch(err => console.log(err))
            console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    

    useEffect(() => {
        axios.get('http://localhost:9999/view')
            .then(data => setView(data.data[0].view_count))
            .catch(err => console.log(err))
        getData()  
    }, [])


    return (
        <div className='container'>
            {show == true ? <>
            <div className="User">

                <form action="" 
                    onSubmit={ e => handleSubmit(e)}  
                >
                    <h2> Input your username </h2>
                    <input 
                        type="text" 
                        name='text'
                        value={ username }
                        onChange={ e => setUsername(e.target.value)}
                    />
                    <h2> {errorname} </h2>

                </form>

            </div>
            </> : <></>}

            {/* Navbar position */}
            <Navbar></Navbar>
            <div className="subcontainer">
                {/* Home */}
                <Fade duration={1000}>
                    <Home username = {callname} views = {view} ></Home>
                </Fade>
                {/* About */}
                <Fade duration={1000}>
                    <About></About>
                </Fade>
                {/* Projects */}
                <Fade duration={1000}>
                    <Project></Project>
                </Fade>
                {/* Rate */}
                <Fade duration={1000}>
                    <Rate></Rate>
                </Fade>
                {/* Contact */}
                <Fade duration={1000}>
                    <Contact></Contact>
                </Fade>
            </div>


            <div className="scrollbar-customize">
                <b>
                <a href="#" onClick={e => handleClick(1)}
                  >
                <Link 
                    activeClass="active"
                    to="scroll-1"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > 1 </Link>
                </a>
                </b>
                <b>
                <a href="#" onClick={e => handleClick(2)}
                >
                <Link 
                    activeClass="active"
                    to="scroll-2"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > 2 </Link>
                </a>
                </b>
                
                <b>
                <a href="#" onClick={e => handleClick(3)}
                >
                <Link 
                    activeClass="active"
                    to="scroll-3"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > 3 </Link>
                </a>
                </b>
                
                <b>
                <a href="#" onClick={e => handleClick(4)}
                >
                <Link 
                    activeClass="active"
                    to="scroll-4"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > 4 </Link>
                </a>
                </b>

                <b>
                <a href="#" onClick={e => handleClick(5)}
                >
                <Link 
                    activeClass="active"
                    to="scroll-5"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                > 5 </Link>
                </a>
                </b>
                
            </div>

        </div>
    )
}

export default Main