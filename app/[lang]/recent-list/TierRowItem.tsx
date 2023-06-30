import type {ReactElement} from 'react';
import Image from 'next/image';

import {getTierSvg} from '~/src/utils/functions';

export type Tier =
  | 'Iron'
  | 'Bronze'
  | 'Silver'
  | 'Gold'
  | 'Platinum'
  | 'Diamond'
  | 'Master'
  | 'Challenger';

export default function TierRowItem({tier}: {tier: Tier}): ReactElement {
  return (
    <div
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image
        className="mr-2"
        alt="challenger"
        src={getTierSvg(tier)}
        width={20}
        height={20}
      />
      <span className="text-basic items-center">{tier}</span>
    </div>
  );
}
