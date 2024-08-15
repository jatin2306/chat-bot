import React from 'react'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ChatList from './ChatList'
import ChatInterface from './ChatInterFace'
import Sidebar from './SideBar'
import Login from './Login'
const App = () => {
  return (
<div className='h-screen flex'>
  {/* <Login/> */}
<Sidebar/>
<ChatList/>
<ChatInterface/>
</div>
  )
}

export default App