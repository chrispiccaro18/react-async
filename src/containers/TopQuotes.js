import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from '../components/Quotes';
import { getQuotes } from '../services/futuramaApi';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 10
  }

  state = {
    quotes: []
  }

  componentDidMount() {
    getQuotes(this.props.count)
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
