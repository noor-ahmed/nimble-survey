import React from 'react';

import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router-dom'

import Login from '../../screens/Login';

describe('Lands on Login page', () => {
  it('returns login page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={ history }>
        <Route exact path="/" component={ Login }></Route>
      </Router>
    );

    expect(history.location.pathname).toBe('/');
  });
});

