import React, { useState } from 'react';

function MainContent() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');

  function handleChange(event) {
    setNewTweet(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTweets([...tweets, newTweet]);
    setNewTweet('');
  }

  return (
    <main>
      <h2>Create a new tweet:</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={newTweet} onChange={handleChange} />
        <button type="submit">Tweet</button>
      </form>
      <h2>Recent tweets:</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet}>{tweet}</li>
        ))}
      </ul>
    </main>
  );
}
