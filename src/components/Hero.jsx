import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Hero = ({ setShowAuth }) => {
  return (
    <div className='relative h-[700px] bg-gradient-to-b from-[#5CD4CC] via-[#B2ECE6] to-[#F8F9FA] clip-shape m-4 flex justify-center items-center'>
      {/* Login/Register Button */}
      <div className='absolute top-8 right-5 z-50'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className='relative bg-[#E3F7F4] px-5 py-3 rounded-full shadow-lg border border-gray-300 flex items-center justify-center hover:bg-[#D6F0EC] transition-transform duration-300 cursor-pointer'
          onClick={() => setShowAuth(true)}
        >
          <span className='text-[#2B3A42] font-medium mr-6 text-sm'>
            Sign in / Sign up
          </span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className='absolute right-0 flex items-center justify-center w-10 h-10 bg-[#FFC107] rounded-full shadow-md hover:bg-[#FF8C42] transition-all duration-300 cursor-pointer'
          >
            <AiOutlineArrowRight className='text-[#F8F9FA] text-lg hover:text-[#2B3A42]' />
          </motion.span>
        </motion.button>
      </div>

      {/* Content */}
      <div className='container relative mx-auto px-4 mb-35'>
        <div className='relative flex flex-col items-center justify-center text-center z-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-2xl'
          >
            <h6 className='text-lg font-semibold text-[#4F4F4F] uppercase tracking-wide'>
              We Adapt, We Learn
            </h6>

            <h1 className='text-7xl md:text-8xl font-bold tracking-tighter mb-4 text-[#333333]'>
              NeoPaideia
            </h1>

            <p className='text-[#4F4F4F] max-w-lg mx-auto leading-relaxed mb-6'>
              Unlock personalized learning experiences designed to fit your
              unique needs. Learn at your own pace with our adaptive technology.
            </p>

            {/* Get Started Button */}
            <Link to='/dashboard'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className='px-6 py-3 bg-[#E3F7F4] rounded-full shadow-md text-[#2B3A42] font-bold hover:bg-[#D6F0EC] transition-colors cursor-pointer'
              >
                Get Started
              </motion.button>
            </Link>  
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
