import React from 'react';

const TruncatedText = ({ text, maxLength }) => {
  const truncateText = (str, max) => {
    return str.length > max ? str.slice(0, max) + '...' : str;
  };

  return (
    <p>{truncateText(text, maxLength)}</p>
  );
};

export default TruncatedText;
