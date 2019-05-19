const BASE_URL = 'https://rickandmortyapi.com/api';

export function getCharacters(page = 1) {
  return fetch(`${BASE_URL}/character/?page=${page}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, body]) => {
      if(!ok) throw 'Unable to fetch characters';
      return {
        characters: body.results,
        totalPages: Math.ceil(body.info.count / body.info.pages)
      };
    });
}
