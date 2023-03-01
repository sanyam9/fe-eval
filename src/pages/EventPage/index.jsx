/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  GET_EVENT_BY_ID,
  UPDATE_RECORD_LIKE,
} from '../../constants/apiEndPoints';
import { getFormattedDate, getTimeZone } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';
import './EventPage.css';

function EventPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [isBookmark, setIsBookmark] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [areSeatsAvailable, setAreSeatsAvailable] = useState(false);

  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id)).then((response) => {
      setEvent(response);
      setIsBookmark(response.isBookmarked);
      setIsRegister(response.isRegistered);
      setAreSeatsAvailable(response.areSeatsAvailable);
    });
  }, []);

  const toggleBookmarkHandler = async () => {
    const request = {
      data: {
        isBookmarked: !isBookmark,
      },
    };
    await makeRequest(UPDATE_RECORD_LIKE(event.id), request);
    setIsBookmark(!isBookmark);
  };

  const toggleRegisterHandler = async () => {
    const request = {
      data: {
        isRegistered: !isRegister,
      },
    };
    await makeRequest(UPDATE_RECORD_LIKE(event.id), request);
    setIsRegister(!isRegister);
  };

  if (event === null) {
    return (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <div className='event-wrapper'>
        <div className='event-img'>
          <img src={event.imgUrl} alt={event.name} />
        </div>
        <div className='ep-event-body'>
          <p className='ep-event-title'>{event.name.toUpperCase()}</p>
          <p className='ep-event-description'>{event.description}</p>
          <div className='ep-venue-date'>
            <p className='ep-venue'>
              <strong>VENUE:</strong> {event.venue}
            </p>
            <p className='ep-date'>
              <strong>DATE:</strong> {getFormattedDate(event.datetime)}{' '}
              {getTimeZone(event.timezone)}
            </p>
          </div>
        </div>
        <div className='ep-card-footer'>
          {isRegister ? (
            <div className='ep-register-seats'>
              <i className={'fa-solid fa-circle-check'} />
              <p>REGISTERED</p>
            </div>
          ) : (
            <div />
          )}
          <div onClick={toggleBookmarkHandler} className='ep-bookmark'>
            <i
              className={
                !isBookmark ? 'fa-regular fa-bookmark' : 'fa-solid fa-bookmark'
              }
            />
          </div>
        </div>
       {areSeatsAvailable ? <button onClick={toggleRegisterHandler} className='register-button'>
          {isRegister ? 'UNREGISTER' : 'REGISTER'}
        </button> : <></> }
      </div>
    </div>
  );
}

export default EventPage;
