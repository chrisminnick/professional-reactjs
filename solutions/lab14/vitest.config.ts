import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      enabled: true,
      include: ['src/**/*.{js,jsx,ts,tsx}'], // specify files to include
      exclude: [
        'src/generated/**/*.ts',
        'src/components/Book.tsx',
        'src/hooks/*.js',
        'src/Globals.d.ts',
        'src/main.tsx',
      ], // specify files to exclude
      reporter: ['text', 'html'], // customize reporters.
    },
  },
});
