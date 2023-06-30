import 'next/font/google';

import {render, screen, within} from '@testing-library/react';
import {beforeAll, expect, test, vi} from 'vitest';

import Button from '../../../../src/components/uis/Button';

beforeAll(() => {
  vi.mock('next/font/google', () => {
    const mock = vi.mocked;

    return {Inter: mock};
  });
});

test('button', () => {
  render(<Button />);

  const button = within(screen.getByRole('button'));
  expect(button).toBeDefined();
});
