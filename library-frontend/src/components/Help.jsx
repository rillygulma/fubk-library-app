import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { GoTriangleUp } from 'react-icons/go';
import FAQ from '../assets/faq.png';

const questions = [
  'How can I gain access to use the Library?',
  'How can I find materials in the Library?',
  'How can I obtain my Library Card?',
  'Can I ask my course mate or friend to check out a book with my Library Card?',
  'How many items can I borrow?',
  'What is the loan duration for items checked out?',
];

const answers = [
  'Students and staff of the Federal University Birnin Kebbi can gain access with the university identification cards...',
  'Use the Traditional Card catalogue or the Online Public Access Catalogue (OPAC). Each contains materials held by the Library...',
  'Visit the Circulation Desk at the Main Library, Takeoff Library, or College of Health Science Library...',
  'Federal University Birnin Kebbi Library Cards are non-transferrable. Your card will be confiscated if anyone other than yourself attempts to use your card...',
  'Undergraduates – 4\nPostgraduates – 10\nStaff – 10',
  'Undergraduates may borrow for a period of 2 weeks and renew up to two (2) consecutive times, staff and postgraduates may borrow for 1 month and renew up to two times after the due date stamped on the book...',
];

const Help = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle Expansion for Questions and Answer
  const toggleExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-10 px-4 lg:px-24">
      <div className="flex justify-center items-center my-5 max-h-96">
        <img src={FAQ} alt="FAQ" className="w-1/2 h-1/2" />
      </div>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <button
              onClick={() => toggleExpansion(index)}
              className={`bg-gray-400 border shadow-md rounded-sm mt-20 w-full flex items-center justify-between font-custom font-semibold mb-5 ${
                expandedIndex === index ? 'text-sky-600' : ''
              }`}
            >
              {/* Check if not open Show Plus icon otherwise show Triangle Icon */}
              {question}
              {expandedIndex === index ? <GoTriangleUp className="ml-2 bg-red-700"/> : <FaPlus className="ml-2" /> }
            </button>
            {expandedIndex === index && (
              <div className='text-lg'>
                {/* Your detailed content goes here */}
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
