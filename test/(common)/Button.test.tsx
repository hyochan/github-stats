import '@next/font/google';

import {beforeAll, expect, test, vi} from 'vitest';
import {render, screen, within} from '@testing-library/react';

import Button from '../../app/[lang]/(common)/Button';

beforeAll(() => {
  vi.mock('@next/font/google', () => {
    const mock = vi.mocked;

    return {Inter: mock};
  });
});

test('button', () => {
  render(<Button />);

  const button = within(screen.getByRole('button'));
  expect(button).toBeDefined();
});
