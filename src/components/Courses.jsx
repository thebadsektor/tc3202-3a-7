import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion'

const categories = ['English', 'Mathematics', 'Science']

const Courses = () => {
  
  return (
    <div className='min-h-screen bg-[#F8F9FA] flex flex-col items-center py-24 px-4'>
      
      {/* Title & Subtitle */}
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold'>Courses</h1>
        <p className='text-gray-500 text-lg'>Subtitle</p>
      </div>

      {/*Scrolling*/}
      <div className='w-full overflow-hidden py-4'>
      <motion.div
        className='flex space-x-12 text-lg font-semibold whitespace-nowrap'
        animate={{ x: ['0%', '-100%'] }} 
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
      >
        {[...categories, ...categories, ...categories, ...categories, ...categories, ...categories].map((category, index) => (
          <span key={index} className='px-6 cursor-pointer hover:text-gray-700 min-w-max'>
            {category}
          </span>
        ))}
      </motion.div>
    </div>

      {/* Course Cards Container */}
      <div className='w-full max-w-5xl flex flex-wrap gap-6 justify-center'>
        
        {/* Large Featured Course */}
        <div className='w-full h-64 bg-gray-300 rounded-xl p-6 flex flex-col justify-end shadow-md'>
          <h2 className='text-2xl font-bold'>Course Title</h2>
          <p className='text-gray-600'>Short Summary</p>
        </div>

        {/* Smaller Course Cards */}
        <div className='flex space-x-4'>
          {[1, 2].map((_, index) => (
            <div key={index} className='relative bg-gray-300 w-56 h-60 rounded-xl p-4 shadow-md flex flex-col justify-end'>
              {/* Corner Icon */}
              <div className='absolute top-3 right-3 bg-yellow-400 rounded-full p-2 shadow'>
                <AiOutlineArrowUp className='text-[#F8F9FA]' />
              </div>

              <h3 className='text-lg font-semibold'>Course Title</h3>
              <p className='text-gray-600'>Short description</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
