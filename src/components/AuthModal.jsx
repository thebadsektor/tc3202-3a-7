import React, { useState, useEffect } from 'react'
 import { AiOutlineClose } from 'react-icons/ai'
 import { motion } from 'framer-motion'
 import { useNavigate } from 'react-router-dom'
 import Signin from './Signin'
 import Signup from './Signup'
 import imageFile from '../assets/e-learning-2.jpg'
 
 const AuthModal = ({ onClose }) => {
   const [isSignin, setIsSignin] = useState(true)
   const navigate = useNavigate()
   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768)
 
   const handleAuthSuccess = () => {
     localStorage.setItem('hasSeenInstruction', 'false')
     onClose()
     navigate('/dashboard', { state: { showModal: true } })
   }
   
   useEffect(() => {
     const handleResize = () => {
       setIsLargeScreen(window.innerWidth >= 768)
     }
 
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
   }, [])
 
   return (
     <div className="fixed inset-0 flex items-center justify-center z-40">
       {/* Background Overlay */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 0.5 }}
         transition={{ duration: 0.5 }}
         className="absolute inset-0 bg-black z-20"
         onClick={onClose} 
       />
 
       {/* Auth Modal */}
       <motion.div
         initial={{ opacity: 0, scale: 0.8, y: 50 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         transition={{ duration: 0.8, ease: 'easeInOut' }}
         className='fixed inset-0 flex items-center justify-center z-30 p-4'
       >
         <div className='bg-[#F8F9FA] shadow-lg rounded-3xl flex overflow-hidden w-[900px] h-[500px] relative'>
           
           {/* Close Button */}
           <button
             onClick={onClose}
             className='absolute top-4 right-4 bg-opacity-70 text-[#F8F9FA] bg-black p-2 rounded-full z-50 hover:bg-opacity-90 transition duration-300 cursor-pointer'
           >
             <AiOutlineClose className='text-md' />
           </button>
 
           {/* Background Image */}
           <div
             className='hidden md:block absolute inset-0 w-full h-full bg-cover bg-no-repeat opacity-50'
             style={{ backgroundImage: `url(${imageFile})`, backgroundSize: 'cover' }}
           />
 
           {/* Forms Container */}
           <div className='flex flex-col md:flex-row w-full relative z-10'>
             
             {/* Login/Register Section for Desktop */}
             {isLargeScreen ? (
               <motion.div
                 initial={{ x: isSignin ? '100%' : '0%' }}
                 animate={{ x: isSignin ? '100%' : '0%' }}
                 transition={{ duration: 0.8, ease: 'easeInOut' }}
                 className='w-1/2 flex items-center justify-center p-10 bg-[#F8F9FA]'
               >
                 {isSignin ? (
                   <Signin switchToSignup={() => setIsSignin(false)} onSuccess={handleAuthSuccess} />
                 ) : (
                   <Signup switchToSignin={() => setIsSignin(true)} onSuccess={handleAuthSuccess} />
                 )}
               </motion.div>
             ) : (
               // No animation on small screens (stacked layout)
               <div className='w-full flex items-center justify-center p-6 bg-[#F8F9FA]'>
                 {isSignin ? (
                   <Signin switchToSignup={() => setIsSignin(false)} onSuccess={handleAuthSuccess} />
                 ) : (
                   <Signup switchToSignin={() => setIsSignin(true)} onSuccess={handleAuthSuccess} />
                 )}
               </div>
             )}
 
           </div>
         </div>
       </motion.div>
     </div>
   )
 }
 
 export default AuthModal