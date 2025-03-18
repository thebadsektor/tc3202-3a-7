import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const InstructionModal = ({ onProceed, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-40'>
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
        className='absolute inset-0 bg-black z-20'
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='fixed inset-0 flex items-center justify-center z-30 p-4'
      >
        <div className='bg-[#F8F9FA] shadow-lg rounded-3xl p-8 w-[500px] text-center relative'>
          {/* Close Button */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 bg-opacity-70 text-black bg-gray-300 p-2 rounded-full z-50 hover:bg-opacity-90 transition duration-300 cursor-pointer'
          >
            <AiOutlineClose className='text-md' />
          </button>

          {/* Instruction Content */}
          <h2 className='text-xl font-bold mb-4'>Welcome to Your Dashboard</h2>
          <p className='text-gray-600 mb-6'>
            Before proceeding, please answer a few test questions to help us identify your needs.
          </p>

          {/* Action Buttons */}
          <div className='flex justify-center gap-4'>
            <button
              onClick={onClose}
              className='bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition'
            >
              Cancel
            </button>
            <button
              onClick={onProceed}
              className='bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition'
            >
              Proceed
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default InstructionModal
