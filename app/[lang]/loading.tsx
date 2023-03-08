'use client';

import * as animationData from '../../public/lotties/dooboo-loading.json';

import {Lottie} from '@crello/react-lottie';
import type {ReactElement} from 'react';
import clsx from 'clsx';

function Loading(): ReactElement {
  return (
    <div
      className={clsx(
        'flex-1 self-stretch p-4',
        'flex flex-row justify-center items-center',
      )}
    >
      <Lottie
        config={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        style={{width: '234px', height: '234px'}}
      />
    </div>
  );
}

export default Loading;
