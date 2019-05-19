import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';
import { characters, totalPages } from '../../data/characters';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    totalPages: null,
    currentPage: 1
  }

  componentDidMount() {
    this.setState({
      characters,
      totalPages
    });
  }

  render() {
    const { characters, totalPages, currentPage } = this.state;
    return (
      <>
        <h1>{`Total Pages: ${totalPages}, Current Page: ${currentPage}`}</h1>
        <Characters characters={characters} />
      </>
    );
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
