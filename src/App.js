import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feeds from './Feeds';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase1';
import { useDispatch } from 'react-redux';
import {login, logout} from './features/userSlice'
import Widgets from './Widgets';

function App() {

  const dispatch = useDispatch();

  const user= useSelector(selectUser);
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(
          login({
            email: userAuth.email,
            uid:userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      } else{
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />):(

      <div className="app__body">
        <Sidebar />
        <Feeds />
        <Widgets />
      </div>

      )}

      
      
    </div>
  );
}

export default App;
