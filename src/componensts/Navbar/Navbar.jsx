import React from 'react'
import './Navbar.css'
import { Search, Person, ChatBubble, Notifications } from '@mui/icons-material'


const Navbar = () => {
    return (
        <div className='top-container'>
            <div className="left">
                <span className='heading'>Facebook</span>
            </div>

            <div className="center">
                    <div className="search">
                        <Search className='search-icon' />
                        <input placeholder='search friends or videos' className='searchInput' />
                </div>
            </div>

            <div className="right">
                <div className="links">
                    <span className='link'>Homepage</span>
                    <span className='link'>Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="icon">
                        <Person />
                        <span className='badge'>1</span>
                    </div>
                    <div className="icon">
                        <ChatBubble />
                        <span className='badge'>2</span>
                    </div>
                    <div className="icon">
                        <Notifications />
                        <span className='badge'>5</span>
                    </div>
                </div>
                <img src="/assets/person/1.JPG" alt="" className='img' />

            </div>
        </div>
    )
}

export default Navbar
