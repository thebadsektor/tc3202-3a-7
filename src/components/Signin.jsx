import React from 'react'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

const Signin = ({ switchToSignup, onSuccess }) => {

    const handleSignin = () => {
        onSuccess() 
      }

  return (
    <div className='w-full p-8'>
      <h2 className='text-2xl text-[#2B3A42] font-bold mb-4'>Sign in to Your Account</h2>

      {/*Sign in Fields */}
      <input type='text' placeholder='Username' className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 shadow-sm text-[#2B3A42]  focus:outline-none focus:ring-1 focus:ring-[#5CD4CC]' />
      <input type='password' placeholder='Password' className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-[#2B3A42] focus:outline-none focus:ring-1 focus:ring-[#5CD4CC]' />

      {/* Forgot Password Link */}
      <div className='text-right mt-2'>
        <button className='text-xs text-teal-600 font-semibold hover:underline'>
          Forgot your password?
        </button>
      </div>
      
      <button 
        className='w-full bg-teal-600 text-[#F8F9FA] py-2 rounded-lg hover:bg-teal-500 transition font-semibold shadow-md mt-2'
        onClick={handleSignin}
      >
        Sign in
      </button>

      {/* Divider */}
      <div className='relative flex items-center my-4'>
        <div className='flex-1 border-t border-gray-300'></div>
        <span className='px-3 text-gray-500'>or</span>
        <div className='flex-1 border-t border-gray-300'></div>
      </div>

      {/* Social Login*/}
      <div className='flex justify-center gap-4 mb-4'>
        <button className='w-9 h-9 flex items-center justify-center rounded-full bg-[#F8F9FA] border border-gray-300 shadow hover:bg-gray-300 transition'>
          <FaGoogle className='text-[#FFC107] text-md' /> {/*Google*/}
        </button>
        <button className='w-9 h-9 flex items-center justify-center rounded-full bg-[#F8F9FA] border border-gray-300 shadow hover:bg-gray-300 transition'>
          <FaFacebookF className='text-[#FFC107] text-md' /> {/*Facebook*/}
        </button>
      </div>

      {/* Switch to Register */}
      <p className='text-center mt-4 text-sm'>
        Don't have an account?{' '}
        <button onClick={switchToSignup} className='text-teal-600 font-semibold hover:underline'>
          Sign up.
        </button>
      </p>
    </div>
  )
}

export default Signin
