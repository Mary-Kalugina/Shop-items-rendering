import React from 'react';
import Listing from './components/Listing';
import './App.css';
import Item from './components/Item';
import json from "../public/data.json"

const App: React.FC = () => {

  const itemsArr: Item[] = JSON.parse(JSON.stringify(json));

  return (
    <>
    <Listing items={itemsArr}/>
    </>
  );
}

export default App;
