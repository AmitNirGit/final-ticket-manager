import React, { useState } from 'react';
import TicketContainer from './components/TicketContainer';
import './App.css';
import ControlPanel from './components/ControlPanel';

function App() {
  //control panel handlers
  const [searchValue, setSearchValue] = useState('');
  const searchHandler = (event) => {
    setSearchValue(event.currentTarget.value);
  };
  // const [selectedLabelValue, setSelectedLabelValue] = useState('coose a label');
  // const handleLabelChange = (event) => {
  //   setSelectedLabelValue(event.target.value);
  // };
  const [selectedRadioValue, setSelectedRadioValue] = useState('All');
  const handleRadioChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };

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
