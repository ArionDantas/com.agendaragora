import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search'
import DomainIcon from '@mui/icons-material/Domain'
import HomeIcon from '@mui/icons-material/Home'
import EventNoteIcon from '@mui/icons-material/EventNote'
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup'

function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="navbar-content">
                <div>
                    <ul className="nav">
                        <li><Link className='link' to="/"><HomeIcon  sx={{ fontSize: 32 }}/></Link></li>
                        <li><Link className='link' to="/account"><AccountCircleIcon sx={{ fontSize: 32 }} /></Link></li>
                        <li><Link className='link' to="/dashboard"><DashboardIcon sx={{ fontSize: 32 }} /></Link></li>
                        <li><Link className='link' to="/search"><SearchIcon sx={{ fontSize: 32 }} /></Link></li>
                        <li><Link className='link' to="/domain"><DomainIcon sx={{ fontSize: 32 }}/></Link></li>
                        <li><Link className='link' to="/event_note"><EventNoteIcon sx={{ fontSize: 32 }}/></Link></li>
                    </ul>
                </div>
                <div className="refresh">
                    <Link className='link' to='/'><WifiProtectedSetupIcon sx={{ fontSize: 32 }} /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar