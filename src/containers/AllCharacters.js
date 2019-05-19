import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import PagingButtons from '../components/PagingButtons';
import { getCharacters } from '../services/rickAndMortyApi';

export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    totalPages: 20,
    currentPage: 1
  }

  componentDidMount() {
    console.log('mounted');
    // getCharacters(this.state.page)
    //   .then(res => {
    //     return this.setState({
    //       characters: res.results,
    //       totalPages: Math.ceil(res.info.count / res.info.pages)
    //     });
    //   });
  }

  handleNextButton = () => {
    this.setState(state => {
      return {
        currentPage: state.currentPage + 1
      };
    });
  }
  
  handlePrevButton = () => {
    this.setState(state => {
      return {
        currentPage: state.currentPage - 1
      };
    });
  }

  render() {
    const { characters, totalPages, currentPage } = this.state;
    const { handleNextButton, handlePrevButton } = this;
    const pagingButtonsProps = { handleNextButton, handlePrevButton, currentPage, totalPages };
    return (
      <>
        <h1>Rick and Morty Characters</h1>
        <h2>{`Total Pages: ${totalPages}, Current Page: ${currentPage}`}</h2>
        <PagingButtons {...pagingButtonsProps} />
        <Characters characters={characters} />
      </>
    );
  }
}
