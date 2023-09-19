'use client';

import {useMediaQuery} from 'usehooks-ts';
import AdFit from './AdFit';
import {useEffect, useState} from 'react';

export default function AdFitResponsive({
  units,
  className,
  adfitClassName,
}: {
  className?: string;
  units: {
    mobile: string;
    pc: string;
  };
  adfitClassName: string;
}): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [loaded]);

  if (loaded) null;

  return (
    <div className={className}>
      {/* Begin: AdFit */}
      {!isMobile ? (
        <div>
          <AdFit
            unit={units.pc}
            height={90}
            width={728}
            className={adfitClassName}
            style={{flex: 1}}
          />
        </div>
      ) : null}
      {isMobile ? (
        <div>
          <AdFit
            unit={units.mobile}
            height={100}
            width={320}
            className={adfitClassName}
            style={{flex: 1}}
          />
        </div>
      ) : null}
    </div>
  );
}
