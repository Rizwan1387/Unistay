import React from 'react';
import DataCard from './DataCard';
import Mus from '../pictures/Mus.jpeg'
import Riz from '../pictures/Riz.jpeg'
import G from '../pictures/G.jpeg'
import AbdulB from '../pictures/AbdulB.jpeg'


const MainComponent = () => {
  // Your data array
  const data = [
    {
      URL: Mus,
      street_address: "904",
      property_title: "901 lofs",
      property_address: "hampton court",
      beds: "2-3",
      'phone number': "98597487895"
    },
    {
      URL: Riz,
      street_address: "904",
      property_title: "901 lofs",
      property_address: "hampton court",
      beds: "2-3",
      'phone number': "98597487895"
    },
    {
      URL: AbdulB,
      street_address: "904",
      property_title: "901 lofs",
      property_address: "hampton court",
      beds: "2-3",
      'phone number': "98597487895"
    },{
        URL: G,
        street_address: "904",
        property_title: "901 lofs",
        property_address: "hampton court",
        beds: "2-3",
        'phone number': "98597487895"
      },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
  <h1>Most Wanted</h1>
  <DataCard data={data} />
</div>


  );
};

export default MainComponent;
