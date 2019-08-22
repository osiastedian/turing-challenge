import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CategoryFilter from './category-filter';

describe(' CategoryFilter', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<CategoryFilter />);
    expect(baseElement).toBeTruthy();
  });
});
