import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Footer from './footer';

describe(' Footer', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
});
