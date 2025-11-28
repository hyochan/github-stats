'use client';

import type {ReactElement} from 'react';
import {useState, useEffect, useCallback} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import type {LegendPayload} from 'recharts';

import type {MonthlyContribution} from '../../../../../../server/services/githubService';

type LineKey = 'commits' | 'pullRequests' | 'reviews';

type Props = {
  monthlyContributions?: MonthlyContribution[];
  isLoading?: boolean;
};

export default function StatsChart({
  monthlyContributions,
  isLoading,
}: Props): ReactElement | null {
  // Use lazy initialization to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false);
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);
  const [activeLines, setActiveLines] = useState<Set<LineKey>>(
    new Set(['commits', 'pullRequests', 'reviews']),
  );

  useEffect(() => {
    // Use requestAnimationFrame to defer state update and avoid React 19 warning
    const rafId = requestAnimationFrame(() => {
      setIsClient(true);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleLegendMouseEnter = useCallback((data: LegendPayload) => {
    if (data?.dataKey !== undefined && data?.dataKey !== null) {
      setHoveredLine(String(data.dataKey));
    }
  }, []);

  const handleLegendMouseLeave = useCallback(() => {
    setHoveredLine(null);
  }, []);

  const handleLegendClick = useCallback((data: LegendPayload) => {
    if (data?.dataKey) {
      const key = String(data.dataKey) as LineKey;
      setActiveLines((prev) => {
        // If clicking on the only active line, reset to show all
        if (prev.size === 1 && prev.has(key)) {
          return new Set(['commits', 'pullRequests', 'reviews']);
        }
        // Otherwise, show only the clicked line
        return new Set([key]);
      });
    }
  }, []);

  const getLineOpacity = (dataKey: string) => {
    // If line is not active, hide it
    if (!activeLines.has(dataKey as LineKey)) {
      return 0;
    }
    // Use hover effect when hovering
    if (!hoveredLine) return 1;
    return hoveredLine === dataKey ? 1 : 0.15;
  };

  const isLineVisible = (dataKey: LineKey) => {
    return activeLines.has(dataKey);
  };

  // Format month for display (YYYY-MM -> MMM)
  const formatMonth = (month: string): string => {
    const [, monthNum] = month.split('-');
    const monthIndex = parseInt(monthNum, 10) - 1;
    if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
      return month;
    }
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return months[monthIndex];
  };

  const chartData = monthlyContributions?.map((item) => ({
    month: formatMonth(item.month),
    commits: item.commits,
    pullRequests: item.pullRequests,
    reviews: item.reviews,
  }));

  // Don't render if no data or not on client
  if (!isClient || !chartData || chartData.length === 0) {
    return null;
  }

  // Calculate max value for Y axis based on active lines only
  const maxValue = Math.max(
    ...chartData.flatMap((d) => {
      const values: number[] = [];
      if (activeLines.has('commits')) values.push(d.commits);
      if (activeLines.has('pullRequests')) values.push(d.pullRequests);
      if (activeLines.has('reviews')) values.push(d.reviews);
      return values.length > 0 ? values : [0];
    }),
  );
  const yAxisMax = Math.ceil(maxValue * 1.1) || 10;

  return (
    <div
      className="mt-8 w-full max-w-full min-w-0 transition-opacity duration-300"
      style={{
        opacity: isLoading ? 0.4 : 1,
        filter: isLoading ? 'blur(1px)' : 'none',
      }}
    >
      <div className="w-full max-w-full overflow-x-auto overflow-y-hidden">
        <div className="min-w-[640px]">
          <LineChart
            width={Math.max(640, chartData.length * 60)}
            height={300}
            data={chartData}
            margin={{top: 10, right: 30, left: 10, bottom: 20}}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis
              dataKey="month"
              tick={{fontSize: 11, fill: '#888'}}
              tickLine={false}
              axisLine={false}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              tick={{fontSize: 12, fill: '#888'}}
              tickLine={false}
              axisLine={false}
              domain={[0, yAxisMax]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Legend
              onMouseEnter={handleLegendMouseEnter}
              onMouseLeave={handleLegendMouseLeave}
              onClick={handleLegendClick}
              wrapperStyle={{cursor: 'pointer'}}
            />
            {isLineVisible('commits') && (
              <Line
                type="monotone"
                dataKey="commits"
                name="Commits"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{fill: '#22c55e', strokeWidth: 2, r: 3}}
                activeDot={{r: 5, fill: '#22c55e'}}
                strokeOpacity={getLineOpacity('commits')}
              />
            )}
            {isLineVisible('pullRequests') && (
              <Line
                type="monotone"
                dataKey="pullRequests"
                name="Pull Requests"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{fill: '#3b82f6', strokeWidth: 2, r: 3}}
                activeDot={{r: 5, fill: '#3b82f6'}}
                strokeOpacity={getLineOpacity('pullRequests')}
              />
            )}
            {isLineVisible('reviews') && (
              <Line
                type="monotone"
                dataKey="reviews"
                name="Reviews"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{fill: '#f59e0b', strokeWidth: 2, r: 3}}
                activeDot={{r: 5, fill: '#f59e0b'}}
                strokeOpacity={getLineOpacity('reviews')}
              />
            )}
          </LineChart>
        </div>
      </div>
    </div>
  );
}
