import React from 'react'
import Post from '../Post/Post'
import Share from '../share/Share'
import './Center.css'
import {Posts} from '../../DummyData'

const Center = () => {
  return (
    <div className='center1'>
      <div className='center_div'>
        <Share />
        {/* for each post from dummy we map and pass it to the post */}
        {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Center
