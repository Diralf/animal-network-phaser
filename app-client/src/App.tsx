import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import MediaViewport from "./components/MediaViewport/MediaViewport";

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const call = async () => {
      const response = await axios.get('/api');

      setMessage(response.data);
    };
    call();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MediaViewport/>
    </div>
  );
}

export default App;
