const BASE_URL = 'https://rickandmortyapi.com/api';

export function getCharacters(page = 1) {
  return fetch(`${BASE_URL}/characters/?page=${page}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, body]) => {
      if(!ok) throw 'Unable to fetch characters';
      return body.results;
    });
}
