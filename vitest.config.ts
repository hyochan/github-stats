import {defineConfig} from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  plugins: [react()],
  resolve: {
    alias: {
      '@next': path.resolve(__dirname, './node_modules/@next'),
      '~': path.resolve(__dirname, './src'),
      '@/public': path.resolve(__dirname, './public'),
      '@/app': path.resolve(__dirname, './app/[lang]'),
      '@/server': path.resolve(__dirname, './server'),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
