import React from 'react';
import './App.css';
import Main from '../src/components/Main/Main';
import {CounterProvider} from './components/Context/Context';


function App() {

  
  return (
    <div className="App">
      <CounterProvider>
        <Main/>
      </CounterProvider>
    </div>
  );
}

export default App;
