import React from 'react';

const Article = ({ title, date, preview, minutesToRead }) => {

  const defaultDate = "January 1, 1970";

  const generateEmojis = (emoji, count) => Array.from({ length: count }, () => emoji).join('');

  const coffeeCups = Math.ceil(minutesToRead / 5);
  
  const bentoBoxes = Math.ceil(minutesToRead / 10);

  
  const isValidMinutesToRead = typeof minutesToRead === 'number' && minutesToRead >= 0;

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
      {isValidMinutesToRead && (
        <p>
          {minutesToRead === 0 ? '0 min read' : minutesToRead < 30 ? generateEmojis('☕️', coffeeCups) : generateEmojis('🍱', bentoBoxes)} {minutesToRead} min read
        </p>
      )}
    </article>
  );
};

export default Article;
