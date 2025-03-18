import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TestInstructionModal from '../components/TestInstructionModal'

const Dashboard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [modal, setModal] = useState(null)

  useEffect(() => {
    const hasSeenInstruction = localStorage.getItem('hasSeenInstruction')

    if (location.state?.showModal && hasSeenInstruction !== 'true') {
      setModal('instruction')
    }
  }, [location])

  const handleProceed = () => {
    localStorage.setItem('hasSeenInstruction', 'true')
    setModal(null)
    navigate('/first-test')
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4'>Dashboard</h1>

      {/* Show only instruction modal */}
      {modal === 'instruction' && <TestInstructionModal onProceed={handleProceed} onClose={() => setModal(null)} />}
    </div>
  )
}

export default Dashboard
