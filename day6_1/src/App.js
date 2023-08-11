import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const root = ReactDOM.createRoot(document.getElementById('root'));



//Root level componenet
const APP = () => {
  return (
    <div className="app">
      <Header  />
      <Body />
      <Footer />
    </div>
  );
};

root.render(<APP />);
