import React from 'react';
import { render, cleanup } from '@testing-library/react';

import RangeSlider from './range-slider';

describe(' RangeSlider', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<RangeSlider />);
    expect(baseElement).toBeTruthy();
  });
});
