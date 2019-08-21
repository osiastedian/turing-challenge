import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SearchBar from './search-bar';

describe(' SearchBar', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<SearchBar />);
    expect(baseElement).toBeTruthy();
  });
});
