import React from 'react'
import logo from './images/whats back.png'
function Home() {
  return (
    <div className="home">
      <div className="image">
        <img src={logo} alt="whats background logo" />
      </div>
      <div className="title">
        <h3>واتساب ويب </h3><span className='badge bg-secondary'>جديد</span>
      </div>
      <p>يمكنك الآن إرسال الرسائل وتلقّيها دون أن يبقى هاتفك متصلاً بالإنترنت <br /> استخدم واتساب على ما يصل إلى 4 أجهزة مرتبطة وهاتف واحد في وقت واحد</p>
      <hr />
      <h6>Windows يمكنك إجراء مكالمات من خلال الكمبيوتر باستخدام واتساب لنظام <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
      </svg></span> </h6>
      <h6 className='secu'>مشفرة تمامًا بين الطرفين<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      </svg></span> </h6>
    </div>
  )
}

export default Home