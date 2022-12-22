import axios from 'axios';

const ibgeApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome',
});

export const infosApi = (uf) => axios.create({
  baseURL: `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`,
}).get();
export default ibgeApi;
