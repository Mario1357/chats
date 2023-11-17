import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const NavbarChat = () => {

        const {currentUser } = useContext(AuthContext)
    return (
        <div className='navbarchat'>
           <span className="logo">Your TecNexus Chat</span>
           <div className="user">
            <img src={currentUser.photoURL }  atl=""/>
            <span>{currentUser.displayName}</span>
            <button onClick={( ) => signOut(auth) }  >LogOut</button>
            </div>
        </div>

    )
}

export default NavbarChat