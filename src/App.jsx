import React, { useState , useEffect } from 'react'
import {Routes , Route, Link, Navigate} from 'react-router-dom'
import Home from './Home'
import  icon  from './images/myicon.png'
import axios from 'axios'
import Chat from './Chat'
import Error from './Error'
import User from './User'
import NewChat from './NewChat'


function App() {
  const [name , setName] = useState(null)
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)
  const [chatInfo , setChatInfo] = useState()
  const [vl , setVl] = useState('')

  useEffect(() => {
    axios.get('/.netlify/functions/api/data')
    .then(res => {
      setName(res.data)
      setLoading(false)
      setError(false)
      console.log(res.data)
    })
    .catch(() => {
      setName([])
      setLoading(false)
      setError(true)
    })
  }, [])


  const handleClick = c =>{
    setChatInfo(c)
  }

  return (
    <div className="app">
      <div className="content">
        <div className="left">
          <div className="top">
            <div className="image">
              <Link to ='/User'>
                <img src={icon} alt="mkawy" />
              </Link>
            </div>
            <div className="icons">
              <Link to='/stories' >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-disc" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z" />
                </svg>
              </Link>
              <Link to='/newchat' >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </Link>
              <Link to='' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="half">
            <input type="text" placeholder='البحث عن دردشه أو البدء بدردشة جديده' value={vl} onChange={e => setVl(e.currentTarget.value)}/>
          </div>
          <div className="bottom">
            {error ?
              <div className="error">
                <img src="https://cdn.dribbble.com/users/1967263/screenshots/17038882/media/9d47581e86f28a94613327a899dae45b.png?compress=1&resize=400x300&vertical=top" alt="error message" />
              </div>
              :
              null
            }
            {loading ?
              <div className="load">
                <img src="https://cdn.dribbble.com/users/108183/screenshots/14420202/media/0398828bd84d67fad129e64e8a79f77c.gif" alt='loading gif' />
              </div>
              : 
              vl === '' && name !== null ?
                name.map(p => (
                  <Link key={p.user} onClick={() => handleClick(p)} to={`/chat/${p.id}`}>
                    <div className="con">
                      <div className="image">
                        <img src={p.imgUrl} alt={p.user} />
                      </div>
                      <div className="text">
                        <h3>{p.user}</h3>
                        <h6>{p.state}</h6>
                      </div>
                    </div>
                  </Link>
                ))
              :
              name.filter(f => f.user.startsWith(`${vl}`) === true ).map(p => (
                <Link key={p.user} onClick={() => handleClick(p)} to={`/chat/${p.id}`}>
                  <div className="con">
                    <div className="image">
                      <img src={p.imgUrl} alt={p.user} />
                    </div>
                    <div className="text">
                      <h3>{p.user}</h3>
                      <h6>{p.state}</h6>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className="right">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/chat/:id' element={<Chat chatInfo={chatInfo}/>} />
            <Route path='/User' element={<User icon={icon}/>} />
            <Route path='/newchat' element={<NewChat />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
        <div className="img-not not-app">
          <img src="https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_960_720.png" alt="Site is not Available" />
          <h3>Sorry Site Is not available For Your Phone <br /> Try The App <a rel="noreferrer" href= 'https://www.whatsapp.com/download' target='_blank'>Download</a></h3>
        </div>
      </div>
    </div>
  )
}

export default App