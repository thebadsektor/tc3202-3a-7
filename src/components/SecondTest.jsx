import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const questionBank = {
  Math: [
    { id: 1, text: 'What is 5 + 7?' },
    { id: 2, text: 'Solve for x: 2x = 10' },
    { id: 3, text: 'What is the square root of 81?' }
  ],
  Science: [
    { id: 1, text: 'What is the chemical symbol for water?' },
    { id: 2, text: 'Which planet is known as the Red Planet?' },
    { id: 3, text: 'What gas do plants absorb from the atmosphere?' }
  ],
  History: [
    { id: 1, text: 'Who was the first president of the United States?' },
    { id: 2, text: 'Which year did World War II end?' },
    { id: 3, text: 'What was the name of the ship that carried the Pilgrims to America?' }
  ],
}

const SecondTest = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const selectedSubject = queryParams.get('subject')

  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  
  useEffect(() => {
    if (selectedSubject && questionBank[selectedSubject]) {
      setQuestions(questionBank[selectedSubject])
    } else {
      navigate('/second-test')
    }
  }, [selectedSubject, navigate])

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmit = () => {
    console.log('User answers:', answers)
    alert('Test submitted! Processing results...')
    navigate('/result'); 
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-[#E3F7F4] p-6'>
      <h1 className='text-3xl font-semibold text-teal-600 mb-4'>
        {selectedSubject} Test
      </h1>
      <p className='text-lg text-gray-600 mb-8'>Answer the following questions.</p>

      <div className='w-full max-w-2xl flex flex-col'>
        {questions.map((question) => (
          <div key={question.id} className='mb-6 p-6 border-2 rounded-lg shadow-sm bg-white'>
            <h2 className="text-lg font-medium text-gray-800 mb-3">{question.text}</h2>
            <div className="flex gap-4">
              {["A", "B", "C", "D"].map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(question.id, option)}
                  className={`px-4 py-2 rounded-md border-2 transition-all ${
                    answers[question.id] === option
                      ? "bg-teal-500 text-white border-teal-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length < questions.length}
        className={`mt-6 px-8 py-3 text-lg font-semibold rounded-xl transition-all ${
          Object.keys(answers).length < questions.length
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-yellow-500 text-white hover:bg-yellow-600"
        }`}
      >
        Submit Test
      </button>
    </div>
  );
};

export default SecondTest;
