import type {ReactElement} from 'react';
import Image from 'next/image';

import {getTierSvg} from '../../../src/utils/functions';

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
    <div className="flex flex-row items-center">
      <Image
        className="mr-2 max-[480px]:mr-0 shrink-0"
        alt={tier}
        src={getTierSvg(tier)}
        width={20}
        height={20}
      />
      <span className="text-basic items-center max-[480px]:hidden">{tier}</span>
    </div>
  );
}
