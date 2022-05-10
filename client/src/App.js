import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">     
      <video className='video' controls src='http://localhost:8080/stream/test.mp4'/>
    </div>
  );
}

export default App;
