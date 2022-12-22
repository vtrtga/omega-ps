import React, { useEffect, useState } from 'react';
import ibgeApi from '../services/api';

function Table() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [dataFilter, setDataFilter] = useState([]);

  // eslint-disable-next-line consistent-return
  const dataRequest = async () => {
    try {
      const response = await ibgeApi.get();
      if (response.data.length > 0) {
        setData(response.data);
      }
      setIsLoading(false);
      console.log(response.data);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dataRequest();
  }, [setData]);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
      isLoading ? (<p>Loading...</p>)
        : (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Região</th>
                <th>Sigla</th>
              </tr>
            </thead>
            <tbody>

              {
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome}</td>
                  <td>{item.regiao.nome}</td>
                  <td>{item.sigla}</td>
                </tr>
              ))
          }
            </tbody>
          </table>
        )
      }
    </>
  );
}

export default Table;
