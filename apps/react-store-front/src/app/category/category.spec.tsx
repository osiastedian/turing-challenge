import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Category from './category';

describe(' Category', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Category />);
    expect(baseElement).toBeTruthy();
  });
});
