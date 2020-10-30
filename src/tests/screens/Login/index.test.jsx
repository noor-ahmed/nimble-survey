import React from 'react';

import { render } from '@testing-library/react';

import { Login } from '../../../screens/Login';

describe('When visited the Login Page', () => {
  const logoLabel = 'Sign in to Nimble';

  it('prints Logo Label', () => {
    const { getByText } = render(<Login />);
    const linkElement = getByText(logoLabel);
    expect(linkElement).toBeInTheDocument();
  });
});
