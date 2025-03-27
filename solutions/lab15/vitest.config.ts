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
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/generated/**/*.ts',
        'src/hooks/*.tsx',
        'src/hooks/*.ts',
        'src/main.jsx',
        'src/Globals.d.ts',
      ],
      reporter: ['text', 'html'],
    },
  },
});
