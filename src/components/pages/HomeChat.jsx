import React from 'react'
import SidebarChat from '../SidebarChat'
import Chat from '../Chat'


const HomeChat = () => {

    return (
        <div className='homeChat'>
            <div className="container">
                <SidebarChat/>
                <Chat/>
                
            </div>
        </div>


    )
}

export default HomeChat