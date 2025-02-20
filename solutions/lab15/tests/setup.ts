import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { expect, afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
