import {expect, test} from 'vitest';

import SectionHowItWorks from '../../app/[lang]/(home)/SectionHowItWorks';
import {getTranslates} from '../../src/localization';
import {render} from '@testing-library/react';

test('button', async () => {
  const {home} = await getTranslates('en');
  const el = render(<SectionHowItWorks t={home} />);

  expect(el).toBeTruthy();
});
