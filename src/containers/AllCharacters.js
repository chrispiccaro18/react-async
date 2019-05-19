import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';
import { characters, totalPages } from '../../data/characters';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    totalPages: null,
    page: 1
  }

  componentDidMount() {
    this.setState({
      characters,
      totalPages
    });
  }

  render() {
    const { characters } = this.state;
    return <Characters characters={characters} />;
  }
}

// eslint-disable-next-line no-unused-vars
function forLater() {
  getCharacters(this.state.page)
    .then(res => {
      const { characters, totalPages } = res;
      return this.setState({
        characters,
        totalPages
      });
    });
}
