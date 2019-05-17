import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    page: 1
  }

  componentDidMount() {
    getCharacters(this.state.page)
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return <Characters characters={characters} />;
  }
}
