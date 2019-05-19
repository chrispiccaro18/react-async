import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    totalPages: null,
    currentPage: 1
  }

  componentDidMount() {
    getCharacters(this.state.page)
      .then(res => {
        return this.setState({
          characters: res.results,
          totalPages: Math.ceil(res.info.count / res.info.pages)
        });
      });
  }

  render() {
    const { characters, totalPages, currentPage } = this.state;
    return (
      <>
        <h1>Rick and Morty Characters</h1>
        <h2>{`Total Pages: ${totalPages}, Current Page: ${currentPage}`}</h2>
        <Characters characters={characters} />
      </>
    );
  }
}
