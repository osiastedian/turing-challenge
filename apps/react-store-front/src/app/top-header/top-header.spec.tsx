import React from 'react';
import { render, cleanup } from '@testing-library/react';

import TopHeader from './top-header';

describe(' TopHeader', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<TopHeader />);
    expect(baseElement).toBeTruthy();
  });
});
