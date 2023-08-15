import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
import FullApp from './FullApp'

ReactDom.createRoot(document.querySelector('#root')).render(<BrowserRouter> <FullApp /></BrowserRouter>)