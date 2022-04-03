import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Rate() {

    const [commentlist,setcommentlist] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost:9999/rates')
            .then(data => setcommentlist(data.data))
            .catch(err => console.log(err))

    },[])

    const [comment,setcomment] = useState("")

    const [range,setRange] = useState(0)

    const handleSubmit = e => {

        e.preventDefault()
        console.log(comment)
        console.log(range)
        setcommentlist(prevState => [...prevState,{comment:comment,rate:range}])

        axios.post('http://localhost:9999/rates/add',{comment:comment,rate:range})
            .then(message => console.log(message))
            .catch(err => console.log(err))

    }

    const handleRange = target => {
        setRange(target)
    }

    return (
        <div className='section'>
            <div  id='scroll-4' className="padding-section">
                
                <div className="title">
                    <div className="number">
                        <h2> 4 </h2>
                        <div class="night">
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                            <div class="shooting_star"></div>
                        </div>                    
                    </div>

                    <h2> Rate </h2>
                </div>
                
                <div className="comment">

                    <form action="" onSubmit={e => handleSubmit(e)}>
                        
                        <textarea type="text" 
                            name='comment'
                            value={comment}
                            onChange={ e => setcomment(e.target.value)}
                            rows="30"
                            cols="30"
                        />

                        <div className="stars">
                            <div className="star" onClick={e => handleRange(1)} 
                                style={ range > 0? {color:'gray'} : {color:'rgb(48, 230, 175)'}}>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <div className="star" onClick={e => handleRange(2)}
                                style= {range > 1? {color:'gray'} : {color:'rgb(48, 230, 175)'}}
                            >
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <div className="star" onClick={e => handleRange(3)}
                                style= {range > 2? {color:'gray'} : {color:'rgb(48, 230, 175)'}}
                            >
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <div className="star" onClick={e => handleRange(4)}
                                style= {range > 3? {color:'gray'} : {color:'rgb(48, 230, 175)'}}
                            >
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <div className="star" onClick={e => handleRange(5)}
                                style= {range > 4? {color:'gray'} : {color:'rgb(48, 230, 175)'}}
                            >
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                        </div>
                        <button type='submit'> Rate </button>

                    </form>

                </div>

                <div className="comment-list">
                    {commentlist.map((item,idx) => {
                        return(
                            <div className='comment-box'>
                                <h3>
                                    {item.comment}
                                </h3>
                                <h4>
                                    {item.rate}
                                </h4>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Rate