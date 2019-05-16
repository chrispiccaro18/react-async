
const BASE_URL = 'https://futuramaapi.herokuapp.com/api';
export const getQuotes = (count = 5) => {
  return fetch(`${BASE_URL}/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, body]) => {
      if(!ok) throw 'Unable to fetch quotes';
      return body;
    });
};
