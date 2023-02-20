import React from 'react'
import './Close.css'

const Close = ({user}) => {
  return (
    <div>
       <li className="left_friend_li">
         {/* user vanne prop uuta Left vanne file  bata lerayera users bata name ra img taneko*/}
      <img className="left_friend_img" src={user.profilePicture} alt="" />
      <span className="left_friend_name">{user.username}</span>
    </li>
    </div>
  )
}

export default Close
