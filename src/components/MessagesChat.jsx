import React, { useContext, useState } from 'react'
import Message from "./MessageChat"
import { ChatContext } from '../context/ChatContext';
import { useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const MessagesChat = () => {

    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(db,"chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () =>{
            unSub();
        };

    }, [data.chatId]);

    return (
        <div className="messages">
            {messages.map((m)=> (
                <Message message={m} key={m.id}/>
         ))}
        </div>

    );
};

export default MessagesChat


