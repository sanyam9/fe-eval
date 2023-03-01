import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';
import { ERROR_ROUTE, EVENT_ROUTE, HOME_ROUTE } from './constants/routes';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path={HOME_ROUTE} element={<HomePage />} />
            <Route path={`${EVENT_ROUTE}/:id`} element={<EventPage />} />
            <Route
              path={`${ERROR_ROUTE}/:errorCode?`}
              element={<ErrorPage />}
            />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </header>
    </div>
  );
}

export default App;
