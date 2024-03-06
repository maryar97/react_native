import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/licences');
        setData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>FORMES DE BOXES :</h2>
          <ul>
            {data.map((licence) => (
              <li key={licence.id}>
                <strong>Nom :</strong> {licence.nom},{' '}
                <strong>NOm de licence :</strong> {licence.nomlicence}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>

    
  );
};

export default ExampleComponent;
