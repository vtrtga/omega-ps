import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ibgeApi from '../services/api';
import '../styles/Table.css';

function Table() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);

  // eslint-disable-next-line consistent-return
  const dataRequest = async () => {
    try {
      const response = await ibgeApi.get();
      if (response.data.length > 0) {
        setData(response.data);
        setDataFilter(response.data);
      }
      setIsLoading(false);
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeInput = ({ target }) => {
    const { value } = target;
    const statesFilter = data.filter(({ nome }) => nome.toLowerCase().match(value.toLowerCase()));
    setDataFilter(statesFilter);
  };

  useEffect(() => {
    dataRequest();
  }, [setData, setDataFilter]);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      Filtrar por estado:
      <input onChange={onChangeInput} />
      {
      isLoading ? (<p>Loading...</p>)
        : (
          <table className="table-container">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Região</th>
                <th>Sigla</th>
              </tr>
            </thead>
            <tbody>

              {
              dataFilter.map((item) => (
                <tr key={item.id}>
                  <Link
                    style={{
                      textDecoration: 'none',
                    }}
                    to={`/infos/${item.sigla.toLowerCase()}`}
                  >
                    <td>{item.nome}</td>
                  </Link>
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
