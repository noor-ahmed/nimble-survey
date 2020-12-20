import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import 'App.scss';
import { AuthProvider } from 'contexts/auth';
import RouteList from 'routes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <RouteList />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
