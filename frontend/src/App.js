import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://a01vercel-client.vercel.app/'
        );
        if (response.status === 200) {
          setName(response.data.name);
        } else {
          console.log('La richiesta non ha avuto successo');
        }
      } catch (error) {
        console.error('Errore durante la richiesta al server:', error);
      }
    };

    fetchData(); // Effettua la richiesta al backend quando il componente viene montato
  }, []); // Assicura che useEffect venga eseguito solo una volta al caricamento del componente

  return (
    <>
      <h1>Coomit!</h1>
      {name ? <h1>Hello {name}!</h1> : <p>Loading...</p>}
      <h4>{window.location.href}</h4>
    </>
  );
};

export default App;
