import {render} from '@testing-library/react';
import {beforeAll, expect, test, vi} from 'vitest';

import SectionHowItWorks from '../../../app/[lang]/(home)/SectionHowItWorks';
import {getTranslates} from '../../../src/localization';

beforeAll(() => {
  vi.mock('next/font/google', () => {
    const mock = vi.mocked;

    return {Inter: mock};
  });
});

test('button', async () => {
  const {home} = await getTranslates('en');
  const el = render(<SectionHowItWorks t={home} />);

  expect(el).toBeTruthy();
});
