import React, { PureComponent } from 'react';
import Characters from '../components/Characters';

export default class AllCharacters extends PureComponent {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;
    return <Characters characters={characters} />;
  }
}
