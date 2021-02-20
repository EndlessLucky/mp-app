import Head from 'next/head'
import React, {useState} from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
    <Head>
      <title>Minority Programmers</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

<div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
<div className="content text-3xl text-center md:text-left">
</div>

<img
alt='MP' 
width="500"
height= "300"
src = 'https://minorityprogrammers.com/assets/images/mp_asset_icon.svg'
/>

<div className="container mx-auto flex flex-col items-center"> 
  <form className="shadow-2xl w-96 p-16 flex flex-col bg-yellow-500 rounded-tl-lg">
  <p className="text-5xl pb-8 text-white text-left font-medium">
    Welcome!
    </p>
    <input 
  
    type="text" 
    placeholder="🙈 Your name" 
    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" 
    />
    <input 

    type="text" 
    placeholder="👤 Your e-mail" 
    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" 
    />
    <input 
    
    type="password" 
    placeholder="👀 Password" 
    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
    />
    
    
    <button className="w-full bg-pink-600 text-white p-3 rounded-lg font-semibold text-lg">
      Create Account</button>
 
    <button className="w-full bg-blue-700 mt-8 mb-4 text-white p-3 rounded-lg font-semibold text-lg">Sign in</button>
  </form>
  <p className="text-center text-sm my-4">
    <span className="font-semibold text-white text-center w-full"> Diverse, Multidisciplinary, Socially Impactful Network </span>
  </p>
</div>

</div>

</div>

  )
}
