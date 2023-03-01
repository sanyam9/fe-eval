import React from 'react'
import './Card.css'
import { getFormattedDate, getTimeZone } from '../../utils/common';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <div className='card-wrapper'>
      <div className='card-img'>
        <img src={props.imgUrl} alt={props.name}/>
      </div>
      <div className='card-body'>
        <p className='event-title'>{props.name.toUpperCase()}</p>
        <p className='event-description'>{props.description}</p>
        <div className='venue-date'>
          <p className='venue'><strong>VENUE:</strong> {props.venue}</p>
          <p className='date'><strong>DATE:</strong> {getFormattedDate(props.datetime)} {getTimeZone(props.timezone)}</p>
        </div>
      </div>
      <div className='card-footer'>
        <div className='register'>
        <i className='fa-solid fa-circle-check'/>
        <p>REGISTERED</p>
        </div>
        <div className='bookmark'>
          <i className='fa-solid fa-bookmark'/>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  venue: PropTypes.string,
  datetime: PropTypes.string,
  timezone: PropTypes.string,
  imgUrl: PropTypes.string
}

export default Card