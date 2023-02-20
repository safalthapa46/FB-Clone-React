import React from 'react'
import './Left.css'
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material"
import { Users } from '../../DummyData'
import Close from '../Close/Close';

const Left = () => {
  return (
    <div className='left1'>
      <div className="leftWrapper">
        <ul className='ul'>

          <li className='li'>
            <RssFeed className='li_icon' />
            <span className='li_span'>Feed</span>
          </li>


          <li className='li'>
            <Chat className='li_icon' />
            <span className='li_span'>Chat</span>
          </li>

          <li className='li'>
            <PlayCircleFilledOutlined className='li_icon' />
            <span className='li_span'>Vedio</span>
          </li>

          <li className='li'>
            <Group className='li_icon' />
            <span className='li_span'>Groups</span>
          </li>

          <li className='li'>
            <Bookmark className='li_icon' />
            <span className='li_span'>Book Mark</span>
          </li>

          <li className='li'>
            <HelpOutline className='li_icon' />
            <span className='li_span'>Help</span>
          </li>

          <li className='li'>
            <WorkOutline className='li_icon' />
            <span className='li_span'>Work</span>
          </li>

          <li className='li'>
            <Event className='li_icon' />
            <span className='li_span'>Events</span>
          </li>

          <li className='li'>
            <School className='li_icon' />
            <span className='li_span'>Feed</span>
          </li>
        </ul>


        <button className='left_btn'>Show More</button>
        <hr className='hr' />

        
        <ul className='left_friend_ul'>
          {/*  Close lai import hanera users ko sabai lai map hanera iser return gareko */}
         {Users.map((u)=>(
          <Close key={u.id} user={u}/>
         ))}
        </ul>
      </div>
    </div>
  )
}

export default Left

