import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default [
  {
    ignores: ['server/generated/**', 'src/types/supabase.ts'],
  },
  // Next.js flat config including React/TS defaults and core web vitals rules
  ...nextCoreWebVitals,
];
