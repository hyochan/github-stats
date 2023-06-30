import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@next': path.resolve(__dirname, './node_modules/@next'),
      '~/*': path.resolve(__dirname, './*'),
      '~/public/*': path.resolve(__dirname, './public/*'),
      '~/app/*': path.resolve(__dirname, './app/[lang]/*'),
      '~/server/*': path.resolve(__dirname, './server/*'),
      '~/src/*': path.resolve(__dirname, './src/*'),
    },
  },
  test: {
    environment: 'jsdom',
  },
});
