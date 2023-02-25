import {expect, test} from 'vitest';
import {render, screen, within} from '@testing-library/react';

import Button from '../../app/[lang]/(common)/Button';

test('button', () => {
  render(<Button />);

  const button = within(screen.getByRole('button'));
  expect(button).toBeDefined();
});
