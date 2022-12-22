import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { infosApi } from '../services/api';
import InfoCard from '../components/InfoCard';

function Infos() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const response = async () => {
    const infos = await infosApi(id);
    console.log(id);
    console.log(infos);
    setIsLoading(false);
    setData(infos.data);
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <div>
      {
        isLoading ? <p>Loading...</p>
          : (
            <div>
              <InfoCard
                cases={data.cases}
                state={data.state}
                deaths={data.deaths}
                suspects={data.suspects}
                refuses={data.refuses}
                datetime={data.datetime}
              />
            </div>
          )
      }
    </div>
  );
}

export default Infos;
