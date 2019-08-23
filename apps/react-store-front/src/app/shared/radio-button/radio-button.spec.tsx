import React from 'react';
import { render, cleanup } from '@testing-library/react';

import RadioButton from './radio-button';

describe(' RadioButton', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<RadioButton />);
    expect(baseElement).toBeTruthy();
  });
});
