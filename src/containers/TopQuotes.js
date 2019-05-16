import React, { PureComponent } from 'react';
import Quotes from '../components/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class TopQuotes extends PureComponent {
  state = {
    quotes: []
  }

  componentDidMount() {
    getQuotes()
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
