import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Wave from 'react-wavify'

function Home({ username,views }) {
    let pauseStatus = false;

    const [items,setitems] = useState([])
    useEffect(() => {
        axios.get('https://portfolio-backend-xenex.herokuapp.com/likes')
            .then(data => setitems(data.data[0]))
            .catch(err => console.log(err))

    },[])

    const handleLikes = e => {
        items.likes += 1
        
        console.log(items)
        setitems(prevState => {
            return {
                ...prevState,
                likes: items.likes
            }
        })

        axios.post('https://portfolio-backend-xenex.herokuapp.com/likes/add/likes',{ likes:  items.likes})
            .then(res => {})
            .catch(err => console.log(err))
    }

    const handleDislikes = e => {

        items.dislikes += 1
        console.log(items)

        setitems(prevState => {
            return {
                ...prevState,
                dislikes: items.dislikes
            }
        })


        axios.post('https://portfolio-backend-xenex.herokuapp.com/likes/add/dislikes',{ dislikes:items.dislikes})
    }


    return (
        <div className='section'>
            <div id='scroll-1' className="padding-section">

                <div className="top">
                    <div className="views">
                        <h4> Views {views} </h4>
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>
                <div className="body">
                
                    <div className="home-welcome">
                        <div className="number-title">
                            <div className="number">
                                <h3> 1 </h3>
                                <div className="half-circle"></div>
                            </div>
                            <div className="home">
                                <h2> Home </h2>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="welcome-flex">
                            <div className="welcome-user">
                                <div className="welcome">
                                    <h3> Welcome </h3>
                                </div>
                                <b></b>
                                <div className="user">
                                    <h3> { username.length > 0 ? username: "Username"} </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wave-animation">
                        <div>
                            <Wave
                            fill="rgb(48, 230, 175)"
                            paused={pauseStatus}
                            options={{
                                height: 15,
                                amplitude: 5,
                                speed: 0.5,
                                points: 4
                            }}
                            />
                        </div>
                        <div>
                            <Wave
                            fill="rgb(50, 138, 111)"
                            paused={pauseStatus}
                            options={{
                                height: 1,
                                amplitude: 5,
                                speed: 0.3,
                                points: 5
                            }}
                            />
                        </div>
                        <div>
                            <Wave
                            fill="rgb(54, 71, 66)"
                            paused={pauseStatus}
                            options={{
                                height: 10,
                                amplitude: 10,
                                speed: 0.3,
                                points: 3
                            }}
                            />
                        </div>
                        <div>
                            <Wave
                            fill="rgb(21, 26, 24)"
                            paused={pauseStatus}
                            options={{
                                height: 40,
                                amplitude: 10,
                                speed: 0.3,
                                points: 4
                            }}
                            />
                        </div>
                    </div>
                
                </div>

                <div className="bottom">
                    <div className="likes-dislike">
                        <div className="like" onClick={ e => handleLikes(e)}>
                            <h3> Likes : {items.likes} </h3>
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                        </div>
                        <div className="dislike" onClick={ e => handleDislikes(e)}>
                            <h3> Dislikes : {items.dislikes} </h3>
                            <ion-icon name="thumbs-down-outline"></ion-icon>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home