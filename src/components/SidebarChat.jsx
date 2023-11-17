import React from 'react'
import NavbarChat from './NavbarChat'
import SearchChat from './SearchChat'
import Chats from './Chats'

const SidebarChat = () => {

    return (
        <div className='sidebarchat'>
            <NavbarChat/>
            <SearchChat/>
            <Chats/>
            </div>
       


    );
};

export default SidebarChat;