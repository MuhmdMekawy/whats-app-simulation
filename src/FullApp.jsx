import React, { useState, useEffect } from 'react'
import { Routes, Route,  Navigate } from 'react-router-dom'
import icon from './images/myicon.png'
import axios from 'axios'
import Chat from './Chat'
import Error from './Error'
import User from './User'
import NewChat from './NewChat'
import App from './App'
import Stories from './stories'
import Slider from 'react-slick'

function FullApp() {
  const [name, setName] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [chatInfo, setChatInfo] = useState()

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


  const handleClick = c => {
    setChatInfo(c)
  }
  return (
    <React.Fragment>
      {loading 
      ?
      <div className="full-app">
          <video src="https://cdn.dribbble.com/users/332742/screenshots/14137639/media/2851756bc68b8f1531e9c8416dd6c97a.mp4" autoPlay loop></video>
      </div>
      :
        error 
        ?
        <div className="full-app">
          <div className="img">
              <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1881.jpg?size=338&ext=jpg&ga=GA1.1.577780969.1651136218" alt="Error 404" />
          </div>
        </div>
        :
          <Routes>
            <Route path='/' element={<App />} >
              <Route path='/home' element={<Navigate to='/' />} />
              <Route path='/chat/:id' element={<Chat chatInfo={chatInfo} />} />
              <Route path='/User' element={<User icon={icon} />} />
              <Route path='/newchat' element={<NewChat />} />
              <Route path='*' element={<Error />} />
            </Route>
            <Route path='/stories/' element={<Stories />} />
          </Routes>
      }
      <div className="img-not">
        <img src="https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_960_720.png" alt="Site is not Available" />
        <h3>Sorry Site Is not available For Your Phone <br /> Try The App <a rel="noreferrer" href= 'https://www.whatsapp.com/download' target='_blank'>Download</a></h3>
      </div>
    </React.Fragment>
  )
}

export default FullApp