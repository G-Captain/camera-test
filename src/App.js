import React from 'react';
import TicketPhotoPicker from './components/TicketPhotoPicker/TicketPhotoPicker.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCamera, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
library.add( faCamera, faTimes, faArrowLeft);


function App() {
  return (
    
    <div className='App'>
      <TicketPhotoPicker>
      </TicketPhotoPicker>
    </div>
  );
}

export default App;
