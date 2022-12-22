import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { infosApi } from '../services/api';
import InfoCard from '../components/InfoCard';
import Button from '../components/Button';

function Infos() {
  const { id } = useParams();
  const navigate = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const response = async () => {
    const infos = await infosApi(id);
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
      <Button onClick={() => navigate.push('/')} btnText="Home" />
    </div>
  );
}

export default Infos;
