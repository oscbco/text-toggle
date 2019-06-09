import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import TextToggle from './TextToggle';

afterEach(cleanup);

describe('inline-select', () => {
  it('shows correct item', () => {
    const { queryAllByText } = render(
      <TextToggle defaultItem='dark'
        leftItem={{
          value: 'dark',
          label: 'DARK'
        }}
        rightItem={{
          value: 'light',
          label: 'LIGHT'
        }} />
    );
    expect(queryAllByText('DARK').length).toBe(2);
  });
});
