import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CategoryHeader from './category-header';

describe(' CategoryHeader', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<CategoryHeader />);
    expect(baseElement).toBeTruthy();
  });
});
