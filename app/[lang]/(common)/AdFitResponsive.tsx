'use client';

import { useMediaQuery } from "usehooks-ts";
import AdFit from "./AdFit";

export default function AdFitResponsive({className}: {className?: string}): JSX.Element {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return <div className={className}>
    {/* Begin: AdFit */}
    {!isMobile ? (
      <div>
        <AdFit
          unit="DAN-SEcRVdSHkh05H0jO"
          height={90}
          width={728}
          className="adfit-top"
          style={{
            flex: 1,
          }}
        />
      </div>
    ) : null}
    {isMobile ? (
      <div>
        <AdFit
          unit="DAN-dAqcoLWvKpYEtbtq"
          height={100}
          width={320}
          className="adfit-top-mobile"
          style={{
            flex: 1,
          }}
        />
      </div>
    ) : null}
  </div>
}