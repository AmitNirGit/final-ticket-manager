import React, { useState } from 'react';
import TicketContainer from './components/TicketContainer';
import './App.css';
import ControlPanel from './components/ControlPanel';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedRadioValue, setSelectedRadioValue] = useState('All');

  const searchHandler = (event) => {
    const input = event.currentTarget.value;
    if (input[0] === ' ') input.substring(1);
    setSearchValue(input);
  };

  const handleRadioChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };
  console.log('app render');
  return (
    <div className='app-wrapper'>
      <h1 className='header'>Ticket Manager</h1>
      <ControlPanel
        searchHandler={searchHandler}
        selectedRadioValue={selectedRadioValue}
        handleRadioChange={handleRadioChange}
      />
      <TicketContainer
        searchValue={searchValue}
        selectedRadioValue={selectedRadioValue}
      />
    </div>
  );
}

export default App;
