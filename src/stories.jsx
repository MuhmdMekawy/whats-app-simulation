import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from './images/myicon.png'
import Story from './story'

function Stories() {
  const [name , setName] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [story , setStory] = useState()



  useEffect(() => {
    axios.get('../.netlify/functions/api/data')
      .then(res => {
        setName(res.data)
        setLoading(false)
        setError(false)
      })
      .catch(() => {
        setName([])
        setLoading(false)
        setError(true)
      })
  }, [])


  // console.log(story)

  const handleClick = c => {
    setStory(c.story)
    const time = setTimeout(handleStory , 10000)
  }

  const handleStory = () =>{
    setStory(undefined)
  }

  return (
    <div className="stories">
      <div className="content">
        <Link to='/home'>
            <div className="badge bg-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
              </svg>
            </div>
          </Link>
        <div className="s-left">
          <div className="top">
          </div>
          <hr />
          <div className="bottom">
            {name.filter(f => f.story !== "").map(p=> (
              <Link key={p.id} onClick={() => handleClick(p)} to=''>
                <div className="con">
                  <div className="right">
                    <div className="image">
                      <img src={p.story} alt="user" />
                    </div>
                  </div>
                  <div className="left">
                    <h3>{p.user}</h3>
                    <h6>مده اضافه الاستوري</h6>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="s-right">
          <Story story={story} />
        </div>
      </div>
    </div>
  )
}

export default Stories