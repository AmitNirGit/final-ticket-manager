import React, { useEffect, useState } from 'react';
import Ticket from './Ticket'
const axios = require('axios');

//${props.searchValue}

const TicketContainer = (props) => {
    const [ticketsArray, setTicketsArray] = useState([]);

    const unhiddenTickets = ticketsArray.filter((ticket) => {
        return !ticket.hide;
    })
    let selectedArray = unhiddenTickets;

    if (props.selectedRadioValue === "All") {
        selectedArray = (unhiddenTickets);
    }
    else if (props.selectedRadioValue === "Solved") {
        selectedArray = (unhiddenTickets.filter((ticket) => ticket.done));
    }
    else {
        selectedArray = (unhiddenTickets.filter((ticket) => !ticket.done));
    }

    const getTickets = async () => {
        const { data } = await axios.get(`api/tickets?searchText=${props.searchValue}`);
        setTicketsArray(data);
    }
    const solvedHandler = async (ticketId) => {
        const { data } = await axios.post(`api/tickets/${ticketId}/done`);
        setTicketsArray(data);
    }
    const unsolvedHandler = async (ticketId) => {
        const { data } = await axios.post(`api/tickets/${ticketId}/undone`);
        setTicketsArray(data);
    }
    const hideHandler = (ticketId) => {
        setTicketsArray(() => {
            return ticketsArray.map((ticket) => {
                if (ticketId !== ticket.id) {
                    return ticket;
                }
                else {
                    ticket.hide = true;
                    return ticket;
                }
            })
        });
    }
    const restoreHandler = () => {
        setTicketsArray(() => {
            return ticketsArray.map((ticket) => {
                if (ticket.hide) {
                    ticket.hide = false;
                }
                return ticket;
            })
        });
    }

    useEffect(() => {
        getTickets();
    }, [props.searchValue]);
    const hiddenTicketsCounter = ticketsArray.length - unhiddenTickets.length;

    return (
        <div className='ticketcontainer'>
            <div className='sub-header'>
                <div> showing {selectedArray.length} results</div>
                <div id="hide-section">hidden:
                    <span id='hideTicketsCounter'>{hiddenTicketsCounter}</span>
                    <button id="restoreHideTickets" onClick={restoreHandler}>restore</button>
                </div>

            </div>
            {
                selectedArray.map((ticket) => {
                    return <Ticket solvedHandler={solvedHandler} unsolvedHandler={unsolvedHandler} hideHandler={hideHandler}
                        title={ticket.title} content={ticket.content} userEmail={ticket.userEmail}
                        creationTime={ticket.creationTime} labels={ticket.labels} id={ticket.id} />
                })
            }
        </div>
    );


}


export default TicketContainer;


