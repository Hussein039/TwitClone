// import './App.css';
// import Game from './components/game';
// import Tictacto from './components/tictacto';

// function App() {
//   return (
//     <div className="App">
//       {/* <Game /> */}
//       <Tictacto />
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react';
import './components/a.css';



function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  function handleLogin() {
    setIsLoggedIn(true);
    setUsername('John Doe');
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername('');
  }

  return (
    <header>
      <h1>My Twitter Clone</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {isLoggedIn && <p>Welcome, {username}!</p>}
    </header>
  );
}



function MainContent() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  const [username, setUsername] = useState('John Doe');
  const [profileImage, setProfileImage] = useState(
    'https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);

  function handleChange(event) {
    const value = event.target.value;
    const wordCount = value.split(' ').length;
    if (wordCount <= 250) {
      setNewTweet(value);
      setErrorMessage('');
    } else {
      setErrorMessage(`Tweet must be 250 words or less (currently ${wordCount} words)`);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTweets([...tweets, newTweet]);
    setNewTweet('');
  }

  function handleEditProfile() {
    setIsEditing(true);
  }

  function handleSaveProfile() {
    setUsername(newUsername);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setNewUsername(username);
  }



  return (
    <main>
    <aside>
      <img src={profileImage} alt={username} />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newUsername}
            onChange={(event) => setNewUsername(event.target.value)}
          />
          <button onClick={handleSaveProfile}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{username}</h3>
          <button onClick={handleEditProfile}>Edit Profile</button>
        </>
      )}
    </aside>
    <section>
      <h2>Create a new tweet:</h2>
      <form onSubmit={handleSubmit}>
        <textarea value={newTweet} onChange={handleChange} />
        <span>{newTweet.split(' ').length}/250</span>
        <button type="submit" disabled={newTweet.split(' ').length > 250}>
          Tweet
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      <h2>Recent tweets:</h2>
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet}>{tweet}</li>
        ))}
      </ul>
    </section>
  </main>
  );
}


function Footer() {
  return (
    <footer>
      <p>Copyright My Twitter Clone 2021</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
