import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CategoryItem from './category-item';

describe(' CategoryItem', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<CategoryItem />);
    expect(baseElement).toBeTruthy();
  });
});
