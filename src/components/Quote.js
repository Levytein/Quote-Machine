import React from 'react';
import { useSelector } from 'react-redux';

const Quote = () => {
  const { loading, quote, error } = useSelector(state => state);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
    quote.author
  )}&content=${encodeURIComponent(quote.text)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <p id="text" className="text-lg font-semibold text-gray-700">{quote.text}</p>
      <p id="author" className="mt-2 text-right text-gray-500"><em>- {quote.author || "Unknown"}</em></p>
      <div className="mt-4 flex justify-center space-x-4">
        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200"
        >
          Share on Twitter
        </a>
        <a
          href={tumblrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-200"
        >
          Share on Tumblr
        </a>
      </div>
    </div>
  );
};

export default Quote;
