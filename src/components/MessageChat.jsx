import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const MessageChat = ({MessageChat}) => {

    const {currentUser} = useContext(AuthContext)

    const {data} = useContext(ChatContext)

    return (
        <div className='message owner' >
           {/*   <div className="messageInfo">
            <img src=
            />

            <span> Just now</span>
            </div>
            <div className="mesageContent">
                <p>Hello</p>
               
             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"/>  


            </div>
            */} 
        </div>


    )
}

export default MessageChat