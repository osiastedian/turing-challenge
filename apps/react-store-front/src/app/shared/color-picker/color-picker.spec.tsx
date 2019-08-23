import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ColorPicker from './color-picker';

describe(' ColorPicker', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ColorPicker />);
    expect(baseElement).toBeTruthy();
  });
});
