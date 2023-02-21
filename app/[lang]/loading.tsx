'use client';

import * as animationData from '../../public/lotties/dooboo-loading.json';

import {Lottie} from '@crello/react-lottie';
import type {ReactElement} from 'react';

function Loading(): ReactElement {
  return (
    <div className="self-stretch flex flex-row justify-center items-center">
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
