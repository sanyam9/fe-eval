import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <HomePage/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
