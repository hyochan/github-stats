'use client';

import type {ReactElement} from 'react';
import Lottie from 'lottie-react';
import clsx from 'clsx';

import animationData from '../../public/lotties/dooboo-loading.json';

function Loading(): ReactElement {
  return (
    <div
      className={clsx(
        'flex-1 self-stretch p-4 bg-paper',
        'flex flex-row justify-center items-center',
      )}
    >
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{width: '234px', height: '234px'}}
      />
    </div>
  );
}

export default Loading;
