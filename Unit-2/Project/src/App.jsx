import { useState } from 'react'
import CardSetInfo from './CardSetInfo/CardSetInfo';
import FlashCard from './Flashcard/FlashCard';
import Controls from './Controls/Controls';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const flashcards = [
    { question: 'What does HTML stand for?', answer: 'HyperText Markup Language' },
    { question: 'What is a variable in programming?', answer: 'A container for storing data values.' },
    { question: 'Which JavaScript keyword is used to define a constant?', answer: 'const' },
    { question: 'What is the purpose of a function in programming?', answer: 'A block of code designed to perform a specific task.' },
    { question: 'What is the output of console.log(typeof null) in JavaScript?', answer: 'object' },
    { question: 'What is an array?', answer: 'A data structure used to store multiple values in a single variable.' },
    { question: 'What does CSS stand for?', answer: 'Cascading Style Sheets' },
    { question: 'What is the main purpose of a database?', answer: 'To store and retrieve structured data efficiently.' },
    { question: 'What is the difference between == and === in JavaScript?', answer: '== checks for value equality, while === checks for value and type equality.' },
    { question: 'What is the full form of SQL?', answer: 'Structured Query Language' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const colors = ['#A8E6CF', '#81D4FA', '#FFF3E0', '#FFF9C4', '#F8BBD0']; // Gold, Sky Blue, Coral, Pale Green, Plum
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const showNextCard = () => {
    setIsFlipped(false); // Reset to front side
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="App">
      <CardSetInfo
        title="Programming Knowledge"
        description="Testing your fundamentals"
        totalCards={flashcards.length}
      />
      <FlashCard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        isFlipped={isFlipped}
        onFlip={flipCard}
        color={colors[currentIndex % colors.length]}
      />
      <Controls onNext={showNextCard} />
    </div>
  );
}

export default App;