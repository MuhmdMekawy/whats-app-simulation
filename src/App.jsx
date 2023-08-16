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
  const [name , setName] = useState([
    { id : 1 , user : "Ahmed Fares" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "ولسوف يعطيك ربك فترضي" , sentMsg :"أهلا بك كيف حالك؟" , recMsg :"تمام" , story : "https://images.pexels.com/photos/3222401/pexels-photo-3222401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , phone : "01066392541"} ,
    { id : 2 , user : "AMINO" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "I'm not exist"  , sentMsg : " " , recMsg : "كل سنه وانت طيب يبرو" , story : "" , phone : "1122334455"} ,
    { id : 3 , user : "A⚡⚡Am" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "👷problem solver" , sentMsg : " " , recMsg : " " , story : "" , phone : "+6025163"} ,
    { id : 4 , user : "Kariem Elashram" , imgUrl : "https://cdn-icons-png.flaticon.com/128/560/560216.png" , state : "No Goal .. No Resumption" , sentMsg : " " , recMsg : " " , story : "" , phone : "+2055646"} ,
    { id : 5 , user : "MrWa" , imgUrl : "https://cdn-icons-png.flaticon.com/512/921/921009.png" , state : "ثق بإنني أستطيع أن أجازف بالتخلي عن كل شيء في حين يصبح المكسب نفسي" , sentMsg : " " , recMsg : " " , story : "" , phone : "+6254630"} ,
    { id : 6 , user : "Mahmoud Kamal" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "كن كالغيث إذا وقع نفع وإذا مضي أسعد ❤️"  , sentMsg : " " , recMsg : " " , story : "https://images.pexels.com/photos/4460483/pexels-photo-4460483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , phone : "+555516161"}, 
    { id : 7 , user : "Sama Ragab" , imgUrl : "https://cdn-icons-png.flaticon.com/512/921/921053.png" , state : "ولسوف يعطيك ربك فترضي" , sentMsg : " " , recMsg : " " , story : "" , phone : "+45123652"} ,
    { id : 8 , user : "Mazona" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "No Pain No gain" , sentMsg : "معاد ماتش الاهلي امتي؟" , recMsg : "أسأل جوجل" , story : "" , phone : "+84621534"} ,
    { id : 9 , user : "Nada Emad" , imgUrl : "https://cdn-icons-png.flaticon.com/512/921/921053.png" , state : "القناعه كنز لا يفني" , sentMsg : " " , recMsg : " " , story : "" , phone : "+4587623"} ,
    { id : 10 , user : "Amr Awad" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "فصبر جميل .. والله المستعان على ما تصفون"  , sentMsg : " " , recMsg : " " , story : "" , phone : "+777845230"},
    { id : 11, user : "Hend Salem" , imgUrl : "https://cdn-icons-png.flaticon.com/512/921/921053.png" , state : "إن مع العسر يسرا❤️" , sentMsg : " " , recMsg : " " , story : "" , phone : "+999854620"} ,
    { id : 12 , user : "Huda Ali" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "القناعة دليل الأمانة، والأمانة دليل الشكر، والشكر دليل الزيادة، والزيادة دليل بقاء النعمة، والحياة دليل الخير كله." , sentMsg : " رساله مستلمه" , recMsg : " " , story : "" , phone : "+78877114"} ,
    { id : 13 , user : "Mohamed Eleraqy" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "وهِب لي يا الله : قلبًا نقيا تقياً ، يخشاك سِراً وعلانية" , sentMsg : " " , recMsg : " " , story : "https://images.pexels.com/photos/5981369/pexels-photo-5981369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , phone : "+33032152"} 
    ,{ id: 14, user: "Saad Ali", imgUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "أهلا بك أنا استخدم واتساب" , sentMsg : " " , recMsg : " " , story : "https://images.pexels.com/photos/7409749/pexels-photo-7409749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" , phone : "66323462005"}
    , { id: 15, user: "Sara Ragheb", imgUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png", state: "أهلا بك أنا استخدم واتساب" , sentMsg : " " , recMsg : " Sent Message" , story : "" , phone : "+44152223"}
    , { id: 16, user: "Baraa Fady", imgUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png", state: "أهلا بك أنا استخدم واتساب" , sentMsg : " " , recMsg : " " , story : "https://images.pexels.com/photos/2985016/pexels-photo-2985016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , phone : "+2215222462"}
    , { id: 17, user: "Shady kamel", imgUrl: "https://cdn-icons-png.flaticon.com/128/921/921071.png", state: "أهلا بك أنا استخدم واتساب" , sentMsg : " " , recMsg : " " , story : "" , phone : "+03035462"}
    , { id: 18, user: "Sally Saied", imgUrl: "https://cdn-icons-png.flaticon.com/128/949/949635.png", state: "أهلا بك أنا استخدم واتساب" , sentMsg : " " , recMsg : " " , story : "" , phone : "+74568215"}
    , { id: 19, user: "Waleed Reda", imgUrl: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png", state: "أهلا بك أنا استخدم واتساب" , sentMsg : " " , recMsg : " " , story : ""  , phone : "+203222354"}
    , { id: 20, user: "Shadya Ahmed", imgUrl: "https://cdn-icons-png.flaticon.com/128/3667/3667325.png", state: "أهلا بك أنا استخدم واتساب", sentMsg : " " , recMsg : " " , story : "" , phone : "+0951364752"}
  ])
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(false)
  const [chatInfo , setChatInfo] = useState()
  const [vl , setVl] = useState('')



  const handleClick = c =>{
    window.sessionStorage.setItem('chatInfo', c.id)
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
              {/* <Link to='' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </Link> */}
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
                  <a key={p.user} onClick={() => handleClick(p)} href={`/chat/${p.id}`}>
                    <div className="con">
                      <div className="image">
                        <img src={p.imgUrl} alt={p.user} />
                      </div>
                      <div className="text">
                        <h3>{p.user}</h3>
                        <h6>{p.state}</h6>
                      </div>
                    </div>
                  </a>
                ))
              :
              name.filter(f => f.user.startsWith(`${vl}`) === true ).map(p => (
                <a key={p.user} onClick={() => handleClick(p)} href={`/chat/${p.id}`}>
                  <div className="con">
                    <div className="image">
                      <img src={p.imgUrl} alt={p.user} />
                    </div>
                    <div className="text">
                      <h3>{p.user}</h3>
                      <h6>{p.state}</h6>
                    </div>
                  </div>
                </a>
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