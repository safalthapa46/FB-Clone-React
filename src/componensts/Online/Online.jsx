import React from 'react'
import './Online.css'

const Online = ({user}) => {
  return (
    <div>
      <li className='friendList'>
            <div className="onlineContainer">
                {/* user vanne prop uuta  online vanne file bata lerayera users bata name ra img taneko*/}
              <img className='onlineSathi' src={user.profilePicture} alt="" />
              <span className='rightBarOnline'></span>
            </div>
            <span className='onlineSathiName'>{user.username}</span>
          </li>
    </div>
  )
}

export default Online
