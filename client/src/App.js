import React, { useEffect, useState } from 'react';
import TicketContainer from './components/TicketContainer';
import './App.css';
import ControlPanel from './components/ControlPanel';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (event) => {
    setSearchValue(event.currentTarget.value);

  }
  return (
    <div className='app-wrapper'>
      <h1 className='header'>Ticket Manager</h1>
      <ControlPanel searchHandler={searchHandler} />
      <TicketContainer searchValue={searchValue} />
    </div>
  );
}

export default App;

