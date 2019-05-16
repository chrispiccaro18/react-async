import React from 'react';
// import TopQuotes from '../containers/TopQuotes';
import Quotes from './Quotes';
import dummyData from '../../data/quotes';
import '../main.css';

export default function App() {
  return (
    // <TopQuotes />
    <Quotes quotes={dummyData} />
  );
}
