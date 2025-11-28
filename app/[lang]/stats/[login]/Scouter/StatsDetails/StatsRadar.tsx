'use client';

import type {ReactElement} from 'react';
import {useState, useEffect} from 'react';
import {RadarChart, PolarGrid, PolarAngleAxis, Radar} from 'recharts';

import type {PluginStats} from '../../../../../../server/plugins';
import type {Translates} from '../../../../../../src/localization';

type Props = {
  pluginStats: PluginStats;
  t: Translates['stats'];
};

export default function StatsRadar({pluginStats, t}: Props): ReactElement | null {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setIsClient(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  if (!isClient) {
    return null;
  }

  const radarData = [
    {stat: t.tree, value: Math.round(pluginStats.tree.score * 100)},
    {stat: t.fire, value: Math.round(pluginStats.fire.score * 100)},
    {stat: t.earth, value: Math.round(pluginStats.earth.score * 100)},
    {stat: t.gold, value: Math.round(pluginStats.gold.score * 100)},
    {stat: t.water, value: Math.round(pluginStats.water.score * 100)},
  ];

  return (
    <div className="mt-6">
      <RadarChart
        width={280}
        height={250}
        data={radarData}
        cx="50%"
        cy="50%"
        outerRadius="70%"
      >
        <PolarGrid stroke="#444" />
        <PolarAngleAxis dataKey="stat" tick={{fill: '#888', fontSize: 12}} />
        <Radar
          name="Score"
          dataKey="value"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.4}
          strokeWidth={2}
        />
      </RadarChart>
    </div>
  );
}
