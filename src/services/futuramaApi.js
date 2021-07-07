const BASE_URL = 'https://futuramaapi.herokuapp.com/api';

export const getQuotes = (count = 5) => {
  return fetch(`${BASE_URL}/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, body]) => {
      if(!ok) throw 'Unable to fetch quotes';
      return body;
    });
};

export const normalizeCharacter = (character) => {
  if(character === character.split('-')) return character;
  let result = '';
  character.split('-').forEach((word, i, splitArr) => {
    if(i < splitArr.length - 1) {
      result += word[0].toUpperCase() + word.slice(1) + ' ';
    } else {
      result += word[0].toUpperCase() + word.slice(1);
    }
  });
  return result;
};
