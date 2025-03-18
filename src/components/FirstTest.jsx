import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'

const FirstTest = () => {
  const navigate = useNavigate();
  const questions = [
    { id: 1, text: 'You regularly make new friends.' },
    { id: 2, text: 'Complex and novel ideas excite you more than simple and straightforward ones.' },
    { id: 3, text: 'You like to schedule everything in advance.' },
    { id: 4, text: 'You often feel overwhelmed by social situations.' },
    { id: 5, text: 'You prefer to work alone rather than in a team.' },
    { id: 6, text: 'You trust your intuition more than logical analysis.' },
    { id: 7, text: 'You are very detail-oriented in your tasks.' },
    { id: 8, text: 'You enjoy exploring abstract theories and concepts.' },
    { id: 9, text: 'You often take initiative in social situations.' }
  ];

  const [currentPage, setCurrentPage] = useState(0)
  const [answers, setAnswers] = useState({})
  const [hoveredButton, setHoveredButton] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const questionsPerPage = 3

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const nextPage = () => {
    if ((currentPage + 1) * questionsPerPage < questions.length) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const handleProceedToDashboard = () => {
    navigate("/dashboard")
  }

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  )

  const isNextDisabled = currentQuestions.some((q) => !answers[q.id])
  const isSubmitDisabled = Object.keys(answers).length < questions.length

  return (
    <div className='min-h-screen flex flex-col items-center justify-between p-6 w-full bg-[#E3F7F4]'>
      {!showResults ? (
        <>
          {/* Progress Bar */}
          <div className='w-full px-10'>
            <div className='w-full bg-gray-200 h-3 rounded-full mb-4'>
              <div
                className='bg-teal-500 h-3 rounded-full transition-all duration-300'
                style={{ width: `${(Object.keys(answers).length / questions.length) * 100}%` }}
              ></div>
            </div>
            <p className='text-center text-xl text-gray-700 mb-4'>
              Question {Object.keys(answers).length}/{questions.length}
            </p>
          </div>
          {/* Questions */}
          <div className='w-full max-w-2xl flex-grow flex flex-col justify-center px-6 md:px-8'>
            {currentQuestions.map((question) => (
              <div
                key={question.id}
                className={`mb-6 p-6 border-2 rounded-lg shadow-sm w-full transition-all duration-300
                ${answers[question.id] ? 'border-teal-500' : 'border-gray-300 opacity-50'}`}
              >
                <h2 className='text-lg font-medium text-[#333333] text-center mb-3'>
                  {question.text}
                </h2>
                <div className='flex justify-center items-center gap-2 md:gap-3 flex-wrap'>
                  <span className='text-[#4CAF50] font-medium'>Agree</span>
                  {[1, 2, 3, 4, 5].map((value, index) => (
                    <button
                      key={value}
                      onClick={() => handleAnswerSelect(question.id, value)}
                      onMouseEnter={() => setHoveredButton(`${question.id}-${value}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                      className={`relative rounded-full border-2 flex items-center justify-center transition-all duration-200 ease-in-out hover:scale-110
                        ${
                          answers[question.id] === value
                            ? value < 3
                              ? 'bg-[#4CAF50] border-[#4CAF50] text-[#F8F9FA]'
                              : value > 3
                              ? 'bg-[#E53935] border-[#E53935] text-[#F8F9FA]'
                              : 'bg-gray-400 border-gray-400 text-[#F8F9FA]'
                            : hoveredButton === `${question.id}-${value}`
                            ? value < 3
                              ? 'bg-[#4CAF50] border-[#4CAF50] text-[#F8F9FA] opacity-30'
                              : value > 3
                              ? 'bg-[#E53935] border-[#E53935] text-[#F8F9FA] opacity-30'
                              : 'bg-gray-400 border-gray-400 text-[#F8F9FA] opacity-30'
                            : 'border-gray-400 bg-[#F8F9FA]'
                        }
                        ${index === 0 || index === 4 ? 'w-6 h-6 md:w-8 md:h-8' : index === 1 || index === 3 ? 'w-5 h-5 md:w-6 md:h-6' : 'w-4 h-4 md:w-5 md:h-5'}`}
                    >
                      {(answers[question.id] === value || hoveredButton === `${question.id}-${value}`) && (
                        <AiOutlineCheck className='w-4 h-4 text-[#F8F9FA]' />
                      )}
                    </button>
                  ))}
                  <span className='text-[#E53935] font-medium'>Disagree</span>
                </div>
              </div>
            ))}
          </div>
          {/* Footer Navigation */}
          <div className='w-full flex justify-between px-10 mt-6'>
            <div className='w-1/2'>
              {currentPage > 0 && (
                <button
                  onClick={prevPage}
                  className='px-8 py-3 text-md font-semibold text-gray-700 bg-gray-300 rounded-xl shadow-md transition-all duration-200 hover:bg-gray-400 hover:text-white'
                >
                  Previous
                </button>
              )}
            </div>
            <div className='w-1/2 flex justify-end'>
              {currentPage === Math.ceil(questions.length / questionsPerPage) - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitDisabled}
                  className={`px-8 py-3 text-md font-semibold rounded-xl shadow-md transition-all duration-200 ${
                    isSubmitDisabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-yellow-500 text-white hover:bg-yellow-600 hover:shadow-lg'
                  }`}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={nextPage}
                  disabled={isNextDisabled}
                  className={`px-8 py-3 text-md font-semibold rounded-xl shadow-md transition-all duration-200 ${
                    isNextDisabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-yellow-500 text-white hover:bg-yellow-600 hover:shadow-lg'
                  }`}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-2xl font-semibold text-gray-800'>Test Completed!</h2>
          <p className='text-lg text-gray-600 mt-2'>Your results will be processed.</p>
          <button
            onClick={handleProceedToDashboard}
            className='mt-6 px-8 py-3 text-lg font-semibold rounded-xl bg-teal-500 text-white hover:bg-teal-600 transition-all'
          >
            Proceed to Dashboard
          </button>
        </div>
      )}
    </div>
  )
}

export default FirstTest
