import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {auth} from './firebase1';
import './Login.css';
import {login} from './features/userSlice';


const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");
    const[profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                diaplayName: userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }))
        })
        .catch(err =>alert(err))

    };

    const register = () =>{
        if(!name){
            return alert("Please enter the Full Name!");
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic,
            })
            .then(() =>{
                dispatch(
                    login({
                    email:userAuth.user.email,
                    uid: userAuth.uid,
                    displayName: name,
                    photoUrl: profilePic,
                }));
            });
        })
        .catch((err) => alert(err));
       
    };

    return (
        <div className ="login">
            <img src = "https://www.amocrm.com/static/images/pages/integrations/logo/linkedin.png"
            alt= ""
            />
            <form>
                <input type = "text" placeholder = "Full Name (required for registration)" value = {name} onChange = {e => setName(e.target.value)}/>
                <input type = "text" placeholder = "Profile pic URL (optional)" value={profilePic} onChange = {e => setProfilePic(e.target.value)} />
                <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} />
                <input type = "password" placeholder = "Password" value = {password} onChange = {e => setPassword(e.target.value)}/>
                <button type= "submit" onClick = {loginToApp}>Sign In</button>
            </form>
            <p>Not a member? {" "}
                <span className = "login__register" onClick = {register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
