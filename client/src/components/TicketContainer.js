import React, { useEffect, useState } from 'react';
import Ticket from './Ticket'
const axios = require('axios');

const TicketContainer = (props) => {
    const [ticketsArray, setTicketsArray] = useState([]);
    async function getTickets() {
        const { data } = await axios.get(`api/tickets/${props.searchValue}`);
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

    useEffect(() => {
        getTickets();
    }, [props.searchValue]);

    const solved = ticketsArray.filter((ticket) => {
        return ticket.done === true;
    })
    const unsolved = ticketsArray.filter((ticket) => {
        return ticket.done !== true;
    })

    if (props.selectedRadioValue === "All") {
        return (
            <div className='ticketcontainer'>
                {
                    ticketsArray.map((ticket) => {
                        {
                            return <Ticket solvedHandler={solvedHandler} unsolvedHandler={unsolvedHandler} title={ticket.title} content={ticket.content} userEmail={ticket.userEmail} creationTime={ticket.creationTime} labels={ticket.labels} id={ticket.id} />
                        }
                    })
                }
            </div>
        )
    };
    if (props.selectedRadioValue === "Solved") {
        return (
            <div className='ticketcontainer'>
                {
                    solved.map((ticket) => {
                        {
                            return <Ticket solvedHandler={solvedHandler} unsolvedHandler={unsolvedHandler} title={ticket.title} content={ticket.content} userEmail={ticket.userEmail} creationTime={ticket.creationTime} labels={ticket.labels} id={ticket.id} />
                        }
                    })
                }
            </div>
        )
    };
    if (props.selectedRadioValue === "Unsolved") {
        return (
            <div className='ticketcontainer'>
                {
                    unsolved.map((ticket) => {
                        {
                            return <Ticket solvedHandler={solvedHandler} unsolvedHandler={unsolvedHandler} title={ticket.title} content={ticket.content} userEmail={ticket.userEmail} creationTime={ticket.creationTime} labels={ticket.labels} id={ticket.id} />
                        }
                    })
                }
            </div>
        )
    };

}

export default TicketContainer;


