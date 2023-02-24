import Image from 'next/image';
import type {ReactElement} from 'react';

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
        src={
          tier === 'Challenger'
            ? '/assets/tier_challenger.svg'
            : tier === 'Master'
            ? '/assets/tier_master.svg'
            : tier === 'Diamond'
            ? '/assets/tier_diamond.svg'
            : tier === 'Platinum'
            ? '/assets/tier_platinum.svg'
            : tier === 'Gold'
            ? '/assets/tier_gold.svg'
            : tier === 'Silver'
            ? '/assets/tier_silver.svg'
            : tier === 'Bronze'
            ? '/assets/tier_bronze.svg'
            : '/assets/tier_iron.svg'
        }
        width={20}
        height={20}
      />
      <span className="text-basic items-center">{tier}</span>
    </div>
  );
}
