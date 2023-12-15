import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await axios.get('https://a01vercel-client.vercel.app/');
      if (response.status === 200) {
        setName(response.data.name);
      } else {
        console.log('non ha avuto successo');
      }
    } catch (error) {
      console.error('Errore durante la richiesta al server:', error);
    }
  };
  fetchMessage();
  return (
    <>
      <h1>Coomit!</h1>
      <h1>Hello {name}!</h1>

      <h4>{window.location.href}</h4>
    </>
  );
};

export default App;
