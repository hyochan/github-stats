export const RANK_CHALLENGER_VALUE = 1;
export const RANK_MASTER_VALUE = 10;
export const RANK_DIAMOND_VALUE = 25;
export const RANK_PLATINUM_VALUE = 35;
export const RANK_GOLD_VALUE = 45;
export const RANK_SILVER_VALUE = 60;
export const RANK_BRONZE_VALUE = 80;
export const RANK_IRON_VALUE = 100;

export const TOTAL_VALUES =
  RANK_CHALLENGER_VALUE +
  RANK_MASTER_VALUE +
  RANK_DIAMOND_VALUE +
  RANK_PLATINUM_VALUE +
  RANK_GOLD_VALUE +
  RANK_SILVER_VALUE +
  RANK_BRONZE_VALUE +
  RANK_IRON_VALUE;

// https://stackoverflow.com/a/5263759/10629172
export function normalCdf(mean: number, sigma: number, to: number): number {
  var z = (to - mean) / Math.sqrt(2 * sigma * sigma);
  var t = 1 / (1 + 0.3275911 * Math.abs(z));
  var a1 = 0.254829592;
  var a2 = -0.284496736;
  var a3 = 1.421413741;
  var a4 = -1.453152027;
  var a5 = 1.061405429;
  var erf =
    1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
  var sign = 1;
  if (z < 0) {
    sign = -1;
  }

  return (1 / 2) * (1 + sign * erf);
}

export const convertToHundreds = (sum: number, allOffsets: number): number => {
  const cdf = normalCdf(sum, TOTAL_VALUES, allOffsets);
  const val = (cdf * 100 * 100) / 50;

  if (val > 100) {
    return 0;
  }

  const score = 100 - val;

  return score;
};

export function diffHours(dt1: Date, dt2: Date): number {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;

  return Math.abs(Math.round(diff));
}

export function diffMonths(d1: Date, d2: Date): number {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();

  return months <= 0 ? 0 : months;
}
