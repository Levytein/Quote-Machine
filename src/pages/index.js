import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Quote from '../components/Quote';
import QuoteButton from '../components/QuoteButton';
import { fetchQuote } from '../stores/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <div id="quote-box" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Random Quote Generator</h1>
      <Quote />
      <QuoteButton />
    </div>
  );
};

export default Home;
