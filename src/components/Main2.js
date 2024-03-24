import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import axios from 'axios';
const Main2 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/api/data')
        .then(response => {
          // console.log(response.data)
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
          <h1>Apartments</h1>
          <DataCard data={data} />
          
        </div>
        
        
          );
        };
        
        export default Main2;