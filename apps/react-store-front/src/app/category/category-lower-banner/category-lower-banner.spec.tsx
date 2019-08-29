import React from 'react';
import { render, cleanup } from '@testing-library/react';

import CategoryLowerBanner from './category-lower-banner';

describe(' CategoryLowerBanner', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<CategoryLowerBanner />);
    expect(baseElement).toBeTruthy();
  });
});
