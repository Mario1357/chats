import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../../firebase";
import { useState } from "react";
import {doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom";
import { db } from "../../firebase";


const Register = () => {
    const [err,setErr] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
       const displayName= e.target[0].value; 
       const email = e.target[1].value;
       const password = e.target[2].value;
       const file = e.target[3].file[0];
  
        try{

        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on(
          (error) => {
            // Handle unsuccessful uploads
            setErr(true);
          }, 
          () => {
           
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await updateProfile(res.user,{
                    displayName,
                    photoURL:downloadURL,

              }); 
              await setDoc(doc(db, "users", res.user.uid),{
                uid:res.user.uid,
                displayName,
                email,
                photoURL: downloadURL
                });

                await setDoc(doc(db, "userChats", res.user.uid), {});
                navigate("/")
            });
          }
        );

        } catch (err){
            setErr(true);
        }

};

return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
       <form>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <span>Add an avatar</span>
          </label>
          <button> Sign up </button>
          {err && <span>Something went wrong</span>}
        </form>
         </div>
         <p>You don't have an account? <Link to="/register">Login</Link></p>
      </div>
   
    
  );
};

export default Register;