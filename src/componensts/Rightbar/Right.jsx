
import React from 'react'
import './Right.css'
import { Users } from '../../DummyData'
import Online from '../Online/Online'

const Right = () => {
  return (
    <div className='right1'>
      <div className="wrapper">
        <div className="birthday">
          <img className='bdImg' src="assets/gift.png" alt="" />
          <span className='bdText'>
            <b>Sakshyam Thapa</b> and
            <b> 2 other </b>
            have birthday today!
          </span>
        </div>
        <img className='ad' src="assets/ad.png" alt="" />
        <h4 className='onlineTitle'> Online Freinds </h4>
        <ul className='list'>
          {/* online lai import hanera users ko sabai lai map hanera iser return gareko */}
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Right
