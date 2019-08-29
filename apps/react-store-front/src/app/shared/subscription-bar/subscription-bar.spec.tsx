import React from 'react';
import { render, cleanup } from '@testing-library/react';

import SubscriptionBar from './subscription-bar';

describe(' SubscriptionBar', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<SubscriptionBar />);
    expect(baseElement).toBeTruthy();
  });
});
