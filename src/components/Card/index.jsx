/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Card.css';
import { getFormattedDate, getTimeZone } from '../../utils/common';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_RECORD_LIKE } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import { EVENT_ROUTE } from '../../constants/routes';

function Card(props) {
  const navigate = useNavigate();

  const [isBookmark, setIsBookmark] = useState(props.isBookmarked);
  const [isRegister, setIsRegister] = useState(props.isRegistered);
  const [areSeatsAvailable, setAreSeatsAvailable] = useState(
    props.areSeatsAvailable,
  );

  const toggleBookmarkHandler = async (e) => {
    e.stopPropagation();
    const request = {
      data: {
        isBookmarked: !isBookmark,
      },
    };
    await makeRequest(UPDATE_RECORD_LIKE(props.id), request);
    setIsBookmark(!isBookmark);
  };

  return (
    <div
      onClick={() => navigate(`${EVENT_ROUTE}/${props.id}`)}
      className='card-wrapper'
    >
      <div className='card-img'>
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <div className='card-body'>
        <p className='event-title'>{props.name.toUpperCase()}</p>
        <p className='event-description'>{props.description}</p>
        <div className='venue-date'>
          <p className='venue'>
            <strong>VENUE:</strong> {props.venue}
          </p>
          <p className='date'>
            <strong>DATE:</strong> {getFormattedDate(props.datetime)}{' '}
            {getTimeZone(props.timezone)}
          </p>
        </div>
      </div>
      <div className='card-footer'>
        {isRegister ? (
          <div className='register-seats'>
            <i className='fa-solid fa-circle-check'/>
            <p>REGISTERED</p>
          </div>
        ) : !areSeatsAvailable ? (
          <div className='seats'>
            <i className='fa-solid fa-circle-xmark' />
            <p>NO SEATS AVAILABLE</p>
          </div>
        ) : (
          <p></p>
        )}
        <div onClick={toggleBookmarkHandler} className='bookmark'>
          <i
            className={
              isBookmark ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'
            }
          />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  venue: PropTypes.string,
  datetime: PropTypes.string,
  timezone: PropTypes.string,
  areSeatsAvailable: PropTypes.bool,
  isRegistered: PropTypes.bool,
  isBookmarked: PropTypes.bool,
  imgUrl: PropTypes.string,
};

export default Card;
