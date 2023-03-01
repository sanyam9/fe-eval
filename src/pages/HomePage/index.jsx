import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { GET_EVENTS } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './HomePage.css';

function HomePage() {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    makeRequest(GET_EVENTS).then((response) => {
      setAllEvents(response);
      setFilteredEvents(response);
    });
  }, []);

  const toggleFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  const allFilterHandler = () => {
    setFilteredEvents(allEvents);
  };

  const bookmarkedFilterHandler = () => {
    setFilteredEvents(
      allEvents.filter((eachEvent) => eachEvent.isBookmarked === false),
    );
  };

  const registeredFilterHandler = () => {
    setFilteredEvents(
      allEvents.filter((eachEvent) => eachEvent.isRegistered === true),
    );
  };

  const seatsFilterHandler = () => {
    setFilteredEvents(
      allEvents.filter((eachEvent) => eachEvent.areSeatsAvailable === true),
    );
  };

  if (allEvents.length === 0) {
    return (
      <div className='loading'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='homepage-wrapper'>
      <header>
        <div className='filter-search'>
          <div className='filter'>
            <i className='fa-solid fa-filter'></i>
            <p>
              <strong>FILTER</strong>
            </p>
            <i
              onClick={toggleFilterHandler}
              className={
                showFilter
                  ? 'fa-solid fa-chevron-up'
                  : 'fa-solid fa-chevron-down'
              }
            ></i>
          </div>
          <div className='search'>
            <input type='text' placeholder='EVENT NAME' />
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        {showFilter && (
          <div className='filter-radiobuttons'>
            <div className='rb-col-left'>
              <span>
                <input
                  onChange={allFilterHandler}
                  type='radio'
                  value='all'
                  name='filter'
                />{' '}
                ALL
              </span>
              <span>
                <input
                  onChange={registeredFilterHandler}
                  type='radio'
                  value='registered'
                  name='filter'
                />{' '}
                REGISTERED
              </span>
            </div>
            <div className='rb-col-right'>
              <span>
                BOOKMARKED{' '}
                <input
                  onChange={bookmarkedFilterHandler}
                  type='radio'
                  value='bookmarked'
                  name='filter'
                />
              </span>
              <span>
                SEATS AVAILABLE{' '}
                <input
                  onChange={seatsFilterHandler}
                  type='radio'
                  value='seats'
                  name='filter'
                />
              </span>
            </div>
          </div>
        )}
        <div className='cards'>
          {filteredEvents.map((eachCard) => (
            <Card key={eachCard.id} {...eachCard} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
