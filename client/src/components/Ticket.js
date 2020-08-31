import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

const Ticket = (props) => {
  const {
    title,
    content,
    userEmail,
    creationTime,
    labels,
    id,
    done,
  } = props.ticket;
  return (
    <div className='ticket'>
      {done ? (
        <div>
          <mark>solved</mark>
        </div>
      ) : (
        <div>
          <p className='unsolved'>unsolved</p>
        </div>
      )}
      <div className='ticket-title'>{title}</div>
      <div className='ticket-description'>{content}</div>
      <div className='ticket-foot'>
        <span>
          Email:
          {userEmail}
        </span>{' '}
        ||
        <span>
          Creation time:
          {Date(creationTime)}
        </span>{' '}
      </div>
      <div className='labels'>
        {labels !== undefined
          ? labels.map((label) => (
              <span key={label} className='label'>
                {label}
              </span>
            ))
          : null}
      </div>
      <div className='ticket-buttons'>
        <ButtonGroup
          size='large'
          variant='text'
          aria-label='text primary button group'>
          <Button
            onClick={() => {
              props.solvedHandler(id);
            }}>
            Solved
          </Button>
          <Button
            onClick={() => {
              props.unsolvedHandler(id);
            }}>
            unsolved
          </Button>
          <Button
            className='hideTicketButton'
            onClick={() => {
              props.hideHandler(id);
            }}>
            Hide
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Ticket;
