import React from 'react'
import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'

const Share = () => {
    return (
        <div className='share'>
            <div className='ShareWrapper'>
                <div className='shareTop'>
                    <img src='/assets/person/1.JPG' alt='/' className='sharetop_img' />
                    <input className='sharetop_input'
                        placeholder='What is on your mind Safal? '
                    />
                </div>
                <hr className='sharehr' />
                <div className='ShareBottom'>
                    <div className='shareoptions'>
                        <div className='shareoption'>
                            <PermMedia htmlColor='green' className='shareicon' />
                            <span className='sharebottom_text'>Photo or video</span>
                        </div>
                        <div className='shareoption'>
                            <Label htmlColor='blue' className='shareicon' />
                            <span className='sharebottom_text'>Tag</span>
                        </div>
                        <div className='shareoption'>
                            <Room htmlColor='tomato' className='shareicon' />
                            <span className='sharebottom_text'>Location</span>
                        </div>
                        <div className='shareoption'>
                            <EmojiEmotions htmlColor='goldenrod' className='shareicon' />
                            <span className='sharebottom_text'>Fellings</span>
                        </div>
                    </div>
                    <button className='sharebtn'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
