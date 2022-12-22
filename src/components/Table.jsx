import React, { useEffect, useState } from 'react';
import ibgeApi from '../services/api';

function Table() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [dataFilter, setDataFilter] = useState([]);

  const dataRequest = async () => {
    const response = await ibgeApi.get();
    setData(response);
    setIsLoading(false);
    console.log(data);
    return response;
  };

  useEffect(() => {
    dataRequest();
  }, []);
  return (
    <table>
      {
        isLoading ? (<p>Loading...</p>)
          : (
            <tr>
              {
          data[0].map((d) => <td>{ Object.keys(d) }</td>)
        }
            </tr>
          )
      }
    </table>
  );
}

export default Table;
