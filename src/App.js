import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import 'App.scss';
import RouteList from 'routes';

function App() {
  return (
    <Router>
      <div className="app">
        <RouteList />
      </div>
    </Router>
  );
}

export default App;
