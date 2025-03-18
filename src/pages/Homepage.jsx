import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Video from '../components/Video'
import Courses from '../components/Courses'
import Features from '../components/Features'
import AuthModal from '../components/AuthModal'

function HomePage() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <>
        <div className='relative min-h-screen bg-[#F8F9FA] pt-2'>
            <Navbar/>
            <section id='home'><Hero setShowAuth={setShowAuth} /></section>
            <Video />
            <section id='courses'><Courses /></section>
            <section id='features'><Features /></section>


            {/* Show AuthModal if showAuth is true */}
            {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
        </div>
    </>
  )
}

export default HomePage
