'use client';

import {init} from '@amplitude/analytics-browser';

const amplitudeKey = process.env.AMPLITUDE_KEY;

export const initAmplitude = (): void => {
  if (amplitudeKey) {
    init(amplitudeKey);
  }
};
