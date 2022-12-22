import React, { useEffect, useState } from 'react';
import InfoCard from '../components/InfoCard';
import Table from '../components/Table';
import { allStatesInfos } from '../services/api';

function Home() {
  const [mostAffected, setMostAffected] = useState({});

  const requestData = async () => {
    const response = await allStatesInfos();
    const filterByCases = response.data.data.reduce((prev, curr) => {
      let highest = prev;
      if (highest.cases > curr.cases) {
        highest = curr;
      }
      return highest;
    });

    setMostAffected(filterByCases);
  };

  useEffect(() => {
    requestData();
  }, []);
  return (
    <div>
      <div>
        <InfoCard
          mainText="Estado mais afetado"
          state={mostAffected.state}
          suspects={mostAffected.suspects}
          cases={mostAffected.cases}
          datetime={mostAffected.datetime}
          deaths={mostAffected.deaths}
          refuses={mostAffected.refuses}
        />
      </div>
      <Table />
    </div>
  );
}

export default Home;
