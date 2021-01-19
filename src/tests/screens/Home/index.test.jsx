import React from 'react';

import { render } from '@testing-library/react';

import Home from 'screens/Home';

describe('When users see the HomeScreen', () => {
  it('shows todays date', ()=> {
    const date = new Date();
    const date_options = { weekday: 'long', month: 'long', day: 'numeric' };
    const today = date.toLocaleString('en-EN', date_options).toUpperCase();

    const { getByText } = render(<Home/>);
    const today_date = getByText(today);
    const today_message = getByText('Today');

    expect(today_date).toBeInTheDocument();
    expect(today_message).toBeInTheDocument();
  });

  it('renders an completion message', () => {
    const { getByText } = render(<Home/>);

    const emoji = getByText('😎');
    const completed = getByText('You’ve completed all the survey.');
    const final_message = getByText('Take a moment.');

    expect(emoji).toBeInTheDocument();
    expect(completed).toBeInTheDocument();
    expect(final_message).toBeInTheDocument();
  });
});
