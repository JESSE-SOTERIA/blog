import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import LoginPage from './loginPage';
import LandingPage from './landingPage';
const inter = Inter({ subsets: ['latin'] })





export default function Main() {
  
const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  function handleLogin(){
      
      setIsLoggedIn(true);
  }
  
  return (
    //display login page if user is not logged in
    isLoggedIn ?   <LandingPage></LandingPage> : <LoginPage handleLogin = {handleLogin} isLoggedIn = {isLoggedIn}></LoginPage>
  )
}
