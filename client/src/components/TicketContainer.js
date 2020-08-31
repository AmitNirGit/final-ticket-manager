import React, { useEffect, useState } from 'react';
import Ticket from './Ticket';
import { get, post } from '../lib/restService';
import Popup from './Popup';

const TicketContainer = (props) => {
  const [ticketsArray, setTicketsArray] = useState([]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const unhiddenTickets = ticketsArray.filter((ticket) => !ticket.hide);
  let selectedArray = unhiddenTickets;

  if (props.selectedRadioValue === 'All') {
    selectedArray = unhiddenTickets;
  } else if (props.selectedRadioValue === 'Solved') {
    selectedArray = unhiddenTickets.filter((ticket) => ticket.done);
  } else {
    selectedArray = unhiddenTickets.filter((ticket) => !ticket.done);
  }

  const getTickets = async () => {
    const { data } = await get(`api/tickets?searchText=${props.searchValue}`);
    setTicketsArray(data);
  };
  const solvedHandler = async (ticketId) => {
    const { data } = await post(`api/tickets/${ticketId}/done`);
    togglePopUp(isPopUpOpen);
    setTicketsArray(data);
  };
  const unsolvedHandler = async (ticketId) => {
    const { data } = await post(`api/tickets/${ticketId}/undone`);
    togglePopUp(isPopUpOpen);
    setTicketsArray(data);
  };
  const hideHandler = (ticketId) => {
    setTicketsArray(() =>
      ticketsArray.map((ticket) => {
        if (ticketId !== ticket.id) {
          return ticket;
        }
        ticket.hide = true;
        return ticket;
      })
    );
  };
  const restoreHandler = () => {
    setTicketsArray(() =>
      ticketsArray.map((ticket) => {
        if (ticket.hide) {
          ticket.hide = false;
        }
        return ticket;
      })
    );
  };
  const hiddenTicketsCounter = ticketsArray.length - unhiddenTickets.length;
  useEffect(() => {
    getTickets();
  }, [props.searchValue]);

  const togglePopUp = () => {
    setIsPopUpOpen((prev) => !prev);
  };

  const togglePopUpAway = () => {
    setIsPopUpOpen(false);
  };
  console.log(' ticket container render');
  return (
    <>
      {isPopUpOpen ? (
        <Popup togglePopUpAway={togglePopUpAway} isPopUpOpen={isPopUpOpen} />
      ) : null}

      <div className='sub-header'>
        <div>showing {selectedArray.length} results</div>
        {hiddenTicketsCounter ? (
          <div id='hide-section'>
            *hidden:
            <span id='hideTicketsCounter'>{hiddenTicketsCounter}</span>
            <a id='restoreHideTickets' onClick={restoreHandler}>
              <b>restore</b>
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className='ticketcontainer'>
        {selectedArray.map((ticket, index) => (
          <Ticket
            key={`key${index}`}
            solvedHandler={solvedHandler}
            unsolvedHandler={unsolvedHandler}
            hideHandler={hideHandler}
            ticket={ticket}
          />
        ))}
      </div>
    </>
  );
};

export default TicketContainer;
