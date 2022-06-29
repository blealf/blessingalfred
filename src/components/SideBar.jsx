import React from 'react'
import '../assets/styles/SideBar.scss'
import { AiOutlineMail } from 'react-icons/ai'
import  { BsPhone } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div className="side-bar-wrapper">
      <div className="side-bar">
        <div className="side-bar-header">
          <div className="profile-pic">
            <img 
              src="https://picsum.photos/200"
              alt="profile"/>
          </div>
          <h1 className="name">Blessing alfred</h1>
          <p className="role">Web developer</p>
        </div>
        <div className="side-bar-links">
          <ul>
            <li>
              <div className="link-icon"><AiOutlineMail /></div>
              <div>
                <p>Email</p>
                <a href="mailto:blealf@gmail.com">blealf@gmail.com</a>
              </div>
            </li>
            <li>
              <div className="link-icon"><BsPhone /></div>
              <div>
                <p>Phone</p>
                <a href="phone:blealf@gmail.com">+2348039829130</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar