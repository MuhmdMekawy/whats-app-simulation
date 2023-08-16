import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'

function Chat() {
  const [name , setName] = useState([
    { id : 1 , user : "Ahmed Fares" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "ولسوف يعطيك ربك فترضي" , sentMsg :"أهلا بك كيف حالك؟" , recMsg :"تمام" , story : "https://images.pexels.com/photos/3222401/pexels-photo-3222401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , phone : "01066392541"} ,
    { id : 2 , user : "AMINO" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "I'm not exist"  , sentMsg : " " , recMsg : "كل سنه وانت طيب يبرو" , story : "" , phone : "1122334455"} ,
    { id : 3 , user : "A⚡⚡Am" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "👷problem solver" , sentMsg : " " , recMsg : " " , story : "" , phone : "+6025163"} ,
    { id : 4 , user : "Kariem Elashram" , imgUrl : "https://cdn-icons-png.flaticon.com/128/560/560216.png" , state : "No Goal .. No Resumption" , sentMsg : " " , recMsg : " " , story : "" , phone : "+2055646"} ,
    { id : 5 , user : "MrWa" , imgUrl : "https://cdn-icons-png.flaticon.com/512/921/921009.png" , state : "ثق بإنني أستطيع أن أجازف بالتخلي عن كل شيء في حين يصبح المكسب نفسي" , sentMsg : " " , recMsg : " " , story : "" , phone : "+6254630"} ,
    { id : 6 , user : "Mahmoud Kamal" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "كن كالغيث إذا وقع نفع وإذا مضي أسعد ❤️"  , sentMsg : " " , recMsg : " " , story : "https://images.pexels.com/photos/4460483/pexels-photo-4460483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" , phone : "+555516161"}, 
    { id : 7 , user : "Sama Ragab" , imgUrl : "https://cdn-icons-png.flaticon.com/512/921/921053.png" , state : "ولسوف يعطيك ربك فترضي" , sentMsg : " " , recMsg : " " , story : "" , phone : "+45123652"} ,
    { id : 8 , user : "Mazona" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "No Pain No gain" , sentMsg : "معاد ماتش الاهلي امتي؟" , recMsg : "أسأل جوجل" , story : "" , phone : "+84621534"} ,
    { id : 9 , user : "Nada Emad" , imgUrl : "https://cdn-icons.flaticon.com/png/512/4134/premium/4134175.png?token=exp=1651133330~hmac=36408d0a238ad3720beec3e2f9c053f0" , state : "القناعه كنز لا يفني" , sentMsg : " " , recMsg : " " , story : "" , phone : "+4587623"} ,
    { id : 10 , user : "Amr Awad" , imgUrl : "https://cdn-icons-png.flaticon.com/512/2922/2922688.png" , state : "فصبر جميل .. والله المستعان على ما تصفون"  , sentMsg : " " , recMsg : " " , story : "" , phone : "+777845230"},
    { id : 11, user : "Hend Tarek" , imgUrl : "https://cdn-icons.flaticon.com/png/512/2335/premium/2335153.png?token=exp=1651133505~hmac=21719f537eae425ecf5eae666260c93a" , state : "إن مع العسر يسرا❤️" , sentMsg : " " , recMsg : " " , story : "" , phone : "+999854620"} ,
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
  const [vl , setVl] = useState('')
  const [chat , setChat] = useState([])
  const [chatId , setChatId] = useState('')

  return (
    <div className="chat">
      <div className="content">
        <div className="top">
        <Link to = '' className="name">
          <div className="image">
            <img src={name !== null && name.filter(f=> f.id === Number(window.sessionStorage.getItem('chatInfo')))[0].imgUrl} alt="user" />
          </div>
          <div className="text">
            <h3>{name !== null && name.filter(f=> f.id === Number(window.sessionStorage.getItem('chatInfo')))[0].user}</h3>
            <p>{name !== null && name.filter(f=> f.id === Number(window.sessionStorage.getItem('chatInfo')))[0].state}</p>
          </div>
        </Link>
        <div className="icon">
            <Link to ='' >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Link>
            <Link to ='' >
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="half">
          <div className="text recieve">
            {name !== null && name.filter(f=> f.id === Number(window.sessionStorage.getItem('chatInfo')))[0].recMsg !== " " && (
              <p>{name !== null && name.filter(f=> f.id === Number(window.sessionStorage.getItem('chatInfo')))[0].recMsg}</p>
            )}
          </div>
          <div className="text send">
            {name !== null && name.filter(f=> f.id === Number(window.sessionStorage.getItem('chatInfo')))[0].sentMsg !== " " && (
              <p>{name !== null && name.filter(f=> f.id === Number(window.sessionStorage.getItem('chatInfo')))[0].sentMsg}</p>
            )}
          </div>
        </div>
        <div className="bottom">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
            <label htmlFor='upload-file' >
              <svg viewBox="0 0 24 24" width="24" height="24" className=""><path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"></path></svg>
              </label>
            <input type="file" id='upload-file' className="upl" />
          </div>
          <div className="input">
            <input type="text" placeholder='كتابة رسالة ... ' value={vl} onChange={e => setVl(e.currentTarget.value)}/>
            <svg style={{ cursor : "pointer"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
          <Link to= ''>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Chat