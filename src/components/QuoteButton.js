import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuote } from '../stores/actions';

const QuoteButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchQuote());
  };

  return (
    <button
      id="new-quote"
      onClick={handleClick}
      className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200"
    >
      New Quote
    </button>
  );
};

export default QuoteButton;
