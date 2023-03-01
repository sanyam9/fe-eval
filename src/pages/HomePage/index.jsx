import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { GET_EVENTS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './HomePage.css';

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    makeRequest(GET_EVENTS).then((response) => {
      setEvents(response);
    });
  }, []);

  return (
    <div className='homepage-wrapper'>
      <header>
        <div className='filter-search'>
          <div className='filter'>
            <i className='fa-solid fa-filter'></i>
            <p>
              <strong>FILTER</strong>
            </p>
            <i className='fa-solid fa-chevron-up'></i>
          </div>
          <div className='search'>
            <input type='text' placeholder='EVENT NAME' />
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <div className='filter-radiobuttons'>
          <input type='radio' value='all' /> ALL
          <input type='radio' value='bookmarked' /> BOOKMARKED
          <input type='radio' value='registered' /> REGISTERED
          <input type='radio' value='seats' /> SEATS AVAILABLE
        </div>
        <div className='cards'>
          {events.map((eachCard) => (
            <Card key={eachCard.id} {...eachCard} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
