import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function NewChat() {
  const [vl , setVl] = useState('')
  const [name, setName] = useState([])
  const [error, setError] = useState(false)  

  useEffect(() => {
    axios.get('/.netlify/functions/api/data')
    .then(res => {
      setName(res.data)
      // console.log(res.data)
      setError(false)
    })
    .catch(() => {
      setName([])
      setError(true)
    })
  }, [])

  return (
    <div className="newchat">
      <div className="content">
        <div className="top">
          <Link to='/'>
            <div className="icon-back">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z" />
              </svg>
            </div>
          </Link>
          <h4>دردشه جديده</h4>
        </div>
        <div className="half">
          <div className="input">
            <input type="text" value={vl} onChange={e => setVl(e.currentTarget.value)} autoFocus placeholder='البحث ف جهات الاتصال' />
          </div>
        </div>
        {error ?
          <div className="error">
            <h2>SomeThing Went Wrong</h2>
          </div>
          :
          null
        }
        <div className="bottom">
          {name.filter(f => f.user.startsWith(`${vl}`) === true).map(p => (
            <Link key={p.user} to=''>
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewChat