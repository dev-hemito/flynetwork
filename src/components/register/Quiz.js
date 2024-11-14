// src/components/Quiz.js
'use client'
import React, { useState, useEffect } from 'react';
import { FaClock, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const quizData = {
  "Best Strategist": [
    { question: "What is the first step in strategic planning?", options: ["Developing tactics", "Identifying goals and objectives", "Hiring staff", "Launching a marketing campaign"], correct: "Identifying goals and objectives" },
    { question: "What does a SWOT analysis help with?", options: ["Deciding office design", "Assessing strengths, weaknesses, opportunities, and threats", "Choosing business locations", "Hiring employees"], correct: "Assessing strengths, weaknesses, opportunities, and threats" },
    { question: "Which of the following is essential in decision-making for a strategist?", options: ["Following instincts only", "Using data and evidence", "Avoiding input from others", "Focusing only on short-term gains"], correct: "Using data and evidence" },
    { question: "What is the key benefit of long-term planning?", options: ["Providing clear direction and focus for the future", "Reacting to immediate challenges only", "Decreasing flexibility", "Minimizing resources"], correct: "Providing clear direction and focus for the future" },
    { question: "In strategy, what does 'competitive advantage' mean?", options: ["The factor that sets your business apart from competitors", "Having the most expensive products", "Hiring more staff than your competitors", "Cutting costs on all fronts"], correct: "The factor that sets your business apart from competitors" },
    { question: "Which of these is an important trait of a good strategist?", options: ["Critical thinking and adaptability", "Stubbornness in decision-making", "Avoiding risks at all costs", "Preferring to work alone"], correct: "Critical thinking and adaptability" },
    { question: "Which factor is essential for successful strategy execution?", options: ["Ignoring market trends", "Effective communication with the team", "Relying solely on upper management", "Focusing only on profits"], correct: "Effective communication with the team" },
    { question: "Which of the following defines a visionary strategy?", options: ["A plan that anticipates future trends and innovations", "A strategy based only on the current market", "A focus on cutting costs", "A plan without a timeline"], correct: "A plan that anticipates future trends and innovations" },
    { question: "What is a key characteristic of an agile strategy?", options: ["Flexibility to adapt to changes quickly", "Inability to adjust", "Rigidity in following a set plan", "Focus on short-term profit only"], correct: "Flexibility to adapt to changes quickly" },
    { question: "How can a strategist best assess the success of their strategy?", options: ["Ignoring results until the project ends", "Tracking key performance indicators (KPIs) regularly", "Relying on employee feedback only", "Observing competitors only"], correct: "Tracking key performance indicators (KPIs) regularly" }
  ],
  "Best Financial Talent": [
    { question: "Which financial statement provides an overview of a company's assets, liabilities, and equity?", options: ["Income Statement", "Cash Flow Statement", "Balance Sheet", "Statement of Retained Earnings"], correct: "Balance Sheet" },
    { question: "What is the formula for calculating net profit?", options: ["Revenue - Liabilities", "Revenue - Expenses", "Expenses - Liabilities", "Revenue + Assets"], correct: "Revenue - Expenses" },
    { question: "Which of the following is a fixed cost?", options: ["Utility bills", "Raw materials", "Rent", "Wages of hourly workers"], correct: "Rent" },
    { question: "What is the purpose of financial forecasting?", options: ["Predicting future financial outcomes", "Evaluating past performance", "Hiring more employees", "Determining current expenses"], correct: "Predicting future financial outcomes" },
    { question: "Which financial ratio is used to measure a company's profitability?", options: ["Debt-to-equity ratio", "Net profit margin", "Current ratio", "Inventory turnover"], correct: "Net profit margin" },
    { question: "What does liquidity mean in financial terms?", options: ["How fast a company can grow", "The ability to meet short-term financial obligations", "The number of employees in the company", "Profitability over time"], correct: "The ability to meet short-term financial obligations" },
    { question: "What is the goal of budgeting in business finance?", options: ["To allocate resources efficiently and control expenses", "To increase sales", "To improve employee morale", "To expand office space"], correct: "To allocate resources efficiently and control expenses" },
    { question: "Which of the following helps a business improve its cash flow?", options: ["Reducing operating expenses", "Increasing fixed costs", "Hiring more employees", "Delaying payments to suppliers indefinitely"], correct: "Reducing operating expenses" },
    { question: "Which term describes the process of analyzing a company's financial health by looking at financial ratios?", options: ["Marketing analysis", "Operations management", "Financial analysis", "Brand evaluation"], correct: "Financial analysis" },
    { question: "What should you track to ensure financial stability?", options: ["Social media likes", "Revenue, expenses, and profit margins", "Employee birthdays", "Office décor"], correct: "Revenue, expenses, and profit margins" }
  ],
  "Best Marketer": [
    { question: "What is the primary goal of marketing?", options: ["To create and deliver value to customers", "To manage employee satisfaction", "To reduce product costs", "To increase production levels"], correct: "To create and deliver value to customers" },
    { question: "Which of the following is part of the marketing mix (4 Ps)?", options: ["Profit", "People", "Product", "Process"], correct: "Product" },
    { question: "What does 'brand positioning' refer to?", options: ["The placement of the logo on the packaging", "The space a brand occupies in the minds of consumers", "A company's physical office location", "The size of the advertising budget"], correct: "The space a brand occupies in the minds of consumers" },
    { question: "Which of the following best defines target market segmentation?", options: ["Dividing a broad audience into distinct groups based on shared characteristics", "Creating a single message for all potential customers", "Lowering product prices for all consumers", "Redesigning products based on random feedback"], correct: "Dividing a broad audience into distinct groups based on shared characteristics" },
    { question: "Which tool is most commonly used to measure customer satisfaction?", options: ["Price tracking", "Surveys and feedback forms", "Marketing campaigns", "Inventory reports"], correct: "Surveys and feedback forms" },
    { question: "What does SEO stand for in digital marketing?", options: ["Social Engagement Opportunity", "Sales Evaluation Overview", "Search Engine Optimization", "Strategic Email Operation"], correct: "Search Engine Optimization" },
    { question: "Which of the following is a key advantage of social media marketing?", options: ["Higher manufacturing costs", "Direct interaction with customers in real-time", "Decreased brand visibility", "Reduced product quality"], correct: "Direct interaction with customers in real-time" },
    { question: "What is a key factor in successful brand storytelling?", options: ["Only using facts and statistics", "Focusing on the company's internal processes", "Creating an emotional connection with the audience", "Using only text, no visuals"], correct: "Creating an emotional connection with the audience" },
    { question: "Which of these marketing strategies focuses on retaining existing customers?", options: ["Acquisition marketing", "Loyalty marketing", "Guerrilla marketing", "Influencer marketing"], correct: "Loyalty marketing" },
    { question: "Which metric is commonly used to evaluate the effectiveness of an online marketing campaign?", options: ["Employee engagement", "Inventory levels", "Click-through rate (CTR)", "Office location"], correct: "Click-through rate (CTR)" }
  ],
  "Best Leadership Talent": [
    { question: "What is the primary role of a leader in an organization?", options: ["To follow orders from others", "To inspire and guide their team towards achieving goals", "To manage employee schedules", "To minimize communication within the team"], correct: "To inspire and guide their team towards achieving goals" },
    { question: "Which leadership style focuses on building strong relationships with team members?", options: ["Autocratic", "Servant leadership", "Laissez-faire", "Transactional"], correct: "Servant leadership" },
    { question: "What is emotional intelligence in the context of leadership?", options: ["The ability to memorize facts", "The ability to understand and manage one's own emotions and those of others", "The capacity to analyze data", "The talent for public speaking"], correct: "The ability to understand and manage one's own emotions and those of others" },
    { question: "Which of the following is a key characteristic of an effective leader?", options: ["Rigidity in decision-making", "Adaptability to change", "Avoiding conflict", "Preferring to work alone"], correct: "Adaptability to change" },
    { question: "What is the purpose of setting a vision for a team?", options: ["To restrict team members' creativity", "To provide direction and inspire team members", "To establish strict rules and regulations", "To create competition among team members"], correct: "To provide direction and inspire team members" },
    { question: "Which of the following best describes transformational leadership?", options: ["A style that inspires and motivates followers to achieve extraordinary outcomes", "A style focused solely on managing tasks", "A style that emphasizes maintaining the status quo", "A style that avoids making tough decisions"], correct: "A style that inspires and motivates followers to achieve extraordinary outcomes" },
    { question: "What is a common method for leaders to communicate effectively with their teams?", options: ["Only sending emails", "Holding regular team meetings and encouraging open dialogue", "Relying solely on memos", "Avoiding one-on-one conversations"], correct: "Holding regular team meetings and encouraging open dialogue" },
    { question: "Which leadership skill involves resolving conflicts within a team?", options: ["Delegation", "Conflict resolution", "Time management", "Goal setting"], correct: "Conflict resolution" },
    { question: "What is the significance of feedback in leadership?", options: ["To criticize team members", "To promote growth and improvement among team members", "To create a negative environment", "To ensure compliance with rules"], correct: "To promote growth and improvement among team members" },
    { question: "What is the most important quality a leader should exhibit during a crisis?", options: ["Indecision", "Calmness and clarity of communication", "Ignoring the team's concerns", "Overreacting to situations"], correct: "Calmness and clarity of communication" }
  ],
  "Best Business Pitch": [
    { question: "What is the primary goal of a business pitch?", options: ["To explain every detail of the business plan", "To persuade potential investors or clients to take action", "To show how much money you need", "To describe your personal background"], correct: "To persuade potential investors or clients to take action" },
    { question: "Which component is crucial in the introduction of a business pitch?", options: ["A detailed financial analysis", "An engaging hook that captures attention", "A long personal story", "A summary of the competition"], correct: "An engaging hook that captures attention" },
    { question: "What should be included in the problem statement of a business pitch?", options: ["A description of your team", "A clear articulation of the problem your business addresses", "A list of your business achievements", "A discussion of market trends"], correct: "A clear articulation of the problem your business addresses" },
    { question: "How should the solution section of a pitch be presented?", options: ["With vague explanations", "With clear, specific details about your product or service", "As a comparison with competitors", "As an afterthought"], correct: "With clear, specific details about your product or service" },
    { question: "Which of the following is essential when discussing your target market?", options: ["Personal opinions about the market", "Data and research supporting your target market's potential", "Just mentioning demographics", "Ignoring the target market entirely"], correct: "Data and research supporting your target market's potential" },
    { question: "What is a common mistake to avoid in a business pitch?", options: ["Focusing on customer benefits", "Overloading slides with too much information", "Practicing the pitch beforehand", "Engaging the audience"], correct: "Overloading slides with too much information" },
    { question: "Which financial information is important to include in a pitch?", options: ["Projected revenue and expenses", "Personal financial history", "The exact amount of funding needed", "Future stock prices"], correct: "Projected revenue and expenses" },
    { question: "What role does storytelling play in a business pitch?", options: ["It has no role", "It helps to create an emotional connection with the audience", "It makes the pitch longer", "It distracts from the main points"], correct: "It helps to create an emotional connection with the audience" },
    { question: "What should a strong conclusion of a pitch include?", options: ["A summary of all details discussed", "A clear call to action for the audience", "Personal anecdotes", "An apology for any mistakes"], correct: "A clear call to action for the audience" },
    { question: "What is the best way to handle questions during a pitch?", options: ["Avoid answering questions", "Listen carefully and answer confidently", "Give vague answers", "Ignore the questions"], correct: "Listen carefully and answer confidently" }
  ],
  "Best Human Management": [
    { question: "What is the most important skill for managing people?", options: ["Avoiding communication", "Empathy and active listening", "Micromanaging", "Ignoring feedback"], correct: "Empathy and active listening" },
    { question: "How can a manager build trust within a team?", options: ["By being transparent and approachable", "By being secretive", "By criticizing team members", "By avoiding team meetings"], correct: "By being transparent and approachable" },
    { question: "What's a key factor in conflict resolution?", options: ["Ignoring the conflict", "Finding a fair solution for all parties involved", "Blaming one side", "Avoiding discussions"], correct: "Finding a fair solution for all parties involved" },
    { question: "What is an effective way to motivate a team?", options: ["Micromanaging them", "Ignoring their concerns", "Recognizing their achievements", "Taking credit for their work"], correct: "Recognizing their achievements" },
    { question: "Which leadership style involves empowering team members to make decisions?", options: ["Authoritarian", "Democratic", "Laissez-faire", "Autocratic"], correct: "Democratic" },
    { question: "How can a manager effectively deal with underperforming employees?", options: ["Ignoring the problem", "Providing constructive feedback and support", "Publicly criticizing them", "Letting them go immediately"], correct: "Providing constructive feedback and support" },
    { question: "What's the most important aspect of team collaboration?", options: ["Open communication and shared goals", "Each member working independently", "Having the same opinions", "Focusing only on individual goals"], correct: "Open communication and shared goals" },
    { question: "Which practice helps create a positive work environment?", options: ["Constantly changing expectations", "Providing recognition and opportunities for growth", "Ignoring employee input", "Punishing mistakes publicly"], correct: "Providing recognition and opportunities for growth" },
    { question: "What is a good way to manage a diverse team?", options: ["Treating everyone the same regardless of their needs", "Avoiding discussions about differences", "Encouraging inclusion and understanding individual strengths", "Assigning tasks based on stereotypes"], correct: "Encouraging inclusion and understanding individual strengths" },
    { question: "How can you ensure effective communication within a team?", options: ["Only sending instructions by email", "Holding regular meetings and encouraging feedback", "Avoiding face-to-face interaction", "Relying solely on text messages"], correct: "Holding regular meetings and encouraging feedback" }
  ]
};

const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export default function QuizForm({ category, userData, onComplete }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    // Shuffle questions on component mount
    const categoryQuestions = [...quizData[category]];
    setQuestions(shuffleArray(categoryQuestions));
  }, [category]);

  useEffect(() => {
    if (currentQuestion >= questions.length) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, questions.length]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setIsCompleted(true);
      const qualified = score >= 7;
      onComplete({ score, qualified });
    } else {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer('');
      setTimeLeft(30);
    }
  };

  if (!questions.length) return null;

  if (isCompleted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-4">Your Score: {score}/10</p>
          {score >= 7 ? (
            <>
              <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
              <p className="text-green-400 mb-2">Congratulations!</p>
              <p>You've qualified for the second round. We'll contact you shortly.</p>
            </>
          ) : (
            <>
              <FaTimesCircle className="text-purple-600 text-5xl mx-auto mb-4" />
              <p>Thank you for participating. Keep Looking and try again next time!</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Question {currentQuestion + 1}/10</h2>
          <div className="flex items-center text-gray-300">
            <FaClock className="mr-2" />
            <span>{timeLeft}s</span>
          </div>
        </div>
        <div className="mb-6">
          <p className="text-lg text-white">{questions[currentQuestion].question}</p>
        </div>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-3 text-left rounded-lg transition-colors ${selectedAnswer === option
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
          {selectedAnswer && (
            <button
              onClick={handleNextQuestion}
              className="w-full bg-green-800 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}