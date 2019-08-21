import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MainHeader from './main-header';

describe(' MainHeader', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<MainHeader />);
    expect(baseElement).toBeTruthy();
  });
});
