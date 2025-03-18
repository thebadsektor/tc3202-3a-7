import React, { useState } from 'react'

const Signup = ({ switchToSignin, onSuccess }) => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agree, setAgree] = useState(false)

  const getPasswordStrength = (password) => {
    if (!password) return ''
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      return 'Strong'
    } else if (password.length >= 6) {
      return 'Medium'
    } else {
      return 'Weak'
    }
  }

  const handleSignin = () => {
    onSuccess()
  }

  return (
    <div className='w-full p-8'>
      <h2 className='text-2xl font-bold text-[#2B3A42] mb-4'>Create an Account</h2>
      <input type='text' placeholder='Username' className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 shadow-sm text-[#2B3A42] focus:outline-none focus:ring-1 focus:ring-[#5CD4CC]' />
      <input type='email' placeholder='Email' className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 shadow-sm text-[#2B3A42] focus:outline-none focus:ring-1 focus:ring-[#5CD4CC]' />
      
      {/* Password Field */}
      <input
        type='password'
        placeholder='Password'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-1 shadow-sm text-[#2B3A42] focus:outline-none focus:ring-1 focus:ring-[#5CD4CC]'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {password && (
        <div className='w-full h-1 mt-1 mb-2 rounded-lg overflow-hidden bg-gray-200'>
          <div className={`h-full ${getPasswordStrength(password) === 'Strong' ? 'bg-green-500' : getPasswordStrength(password) === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${password.length * 10}%` }}></div>
        </div>
      )}

      {/* Confirm Password Field */}
      <input
        type='password'
        placeholder='Confirm Password'
        className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-3 mb-1 shadow-sm text-[#2B3A42] focus:outline-none focus:ring-2 focus:ring-[#5CD4CC]'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {confirmPassword && (
        <p className={`text-xs ${confirmPassword === password ? 'text-green-600' : 'text-red-600'}`}>
          {confirmPassword === password ? 'Passwords match' : 'Passwords do not match'}
        </p>
      )}

      <button 
        className='w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition font-semibold mt-4 shadow-md'
        onClick={handleSignin}  
      >
        Sign up
      </button>

      {/* Agreement Checkbox */}
      <div className='flex items-center mt-4'>
        <input
          type='checkbox'
          id='agree'
          className='mr-2'
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        <label htmlFor='agree' className='text-xs text-gray-700'>
          I agree to the <a href='#' className='text-teal-600 font-semibold hover:underline'>Privacy Policy</a> and <a href='#' className='text-teal-600 font-semibold hover:underline'>Terms & Conditions</a>.
        </label>
      </div>

      {/* Switch to Sign in */}
      <p className='text-center mt-4 text-sm'>
        Already have an account? {' '}
        <button onClick={switchToSignin} className='text-teal-600 font-semibold hover:underline'>
          Sign in.
        </button>
      </p>
    </div>
  )
}

export default Signup
