import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true); // Aggiunto uno stato per gestire il caricamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://a01vercel-api.vercel.app'
        );
        if (response.status === 200) {
          setName(response.data.name);
        } else {
          console.log('La richiesta non ha avuto successo');
        }
      } catch (error) {
        console.error('Errore durante la richiesta al server:', error);
      } finally {
        setLoading(false); // Imposta lo stato di caricamento su false quando la richiesta è completata
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Coomit last update #4</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {name ? <h1>Hello {name}!</h1> : <p>No data available</p>}
          <h4>{window.location.href}</h4>
        </>
      )}
    </>
  );
};

export default App;
