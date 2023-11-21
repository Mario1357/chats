import React, { useState } from 'react'
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import {db} from "../firebase";
import { useContext } from 'react';
import {AuthContext} from "../context/AuthContext"

const SearchChat = () => {
    const [username, setUsername] = useState("")

    const [user, setUser] = useState(null)

    const [err, setErr] = useState(false)
    const {currentUser} = useContext(AuthContext)

    const handleSearch = async () => { 
        const q = query(collection(db, "users" ), where ("displayName", "==" , username)
        );

        try{
            

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });

        } catch(err){
            setErr(true)
        }
    };

    const handleKey = e=>{
        e.code === "Enter" && handleSearch();
    }

    const handleSelect = async () => {
        //checar si existe el grupo (chats en el firestore) if not crear uno nuevo
        
        const combinedId = currentUser.id > user.id ? currentUser.id + user.id : user.id + currentUser.id;
           try {
                    const res = await getDoc(doc(db,"chats", combinedId));
            if(!res.exists()){
                //crear chat
                await setDoc(doc(db,"chats", combinedId), {messages:[]});

                //crear user chats
               await updateDoc(doc(db, "userChats", currentUser.id),{
                   [combinedId+".userInfo"]:{
                       id:user.id,
                       displayName: user.displayName,
                       photoURL: user.photoURL
                   },
                   [combinedId+".date"]: serverTimestamp()
               });

               await updateDoc(doc(db, "userChats", user.id),{
                [combinedId+".userInfo"]:{
                    id:currentUser.id,
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL
                },
                [combinedId+".date"]: serverTimestamp()
            });
            }
        }
            catch(err){}

setUser(null);
setUsername("")


    };

    return (
        <div className='searchchat'>
            <div className="searchForm">
                <input type="text" placeholder='Find a Nexus User' onKeyDown={handleKey}  onChange={e=> setUsername(e.target.value) }
                value={username}

                />
                
            </div>
            {
                err&& <span> User not found</span>
            }
           { user &&  <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL}
                alt=" "
                />
                <div className="userChatInfo"> 
                <span>{user.displayName}</span>
               
                </div>   
             </div>}
         </div>
        


    )
}

export default SearchChat