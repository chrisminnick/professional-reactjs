# Lab 03: Create More Components and Writing Tests

In this lab, you’ll make your React application more modular by turning the main parts of the view into components, then you’ll create simple tests for your new components.

## Part 1: Making new components

1. Using what you learned from creating **Footer.jsx**, make **Header.jsx** and **ClickCounter.jsx** to replace code in **App.jsx**.

At the end of this lab, your page should look the same as it does at the beginning when opened in a browser.

Your finished return statement in **App.jsx** should match this:

```javascript
return (
  <div className="App">
    <Header />
    <ClickCounter />
    <Footer />
  </div>
);
```

Note: For the ClickCounter component to continue working, you’ll need to move the `useState` import and the initialization of the `count` and `setCount` variables to **ClickCounter.jsx**.

## Part 2: Writing tests

To get started with testing, you’ll need to install several dependencies, add a testing configuration to the Vite config file, and create a new test script in `package.json`. Follow these steps:

1. Install vitest and several other dependencies by running the following npm install commands in the terminal:

```bash
npm install --save-dev vitest
npm install --save-dev jsdom
npm install --save-dev @testing-library/jest-dom
npm install --save-dev @testing-library/react
npm install --save-dev @vitest/coverage-v8
```

2. Add the testing config to `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: { globals: true, environment: 'jsdom' },
});
```

3. Add a test script to `package.json`:

```json
"scripts": {
  "dev": "vite",
  "test": "vitest --environment jsdom"
}
```

4. Create a new file named `App.test.jsx` inside `src`.

5. Enter the following code into `App.test.jsx`:

```javascript
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App.jsx';

describe('App Component', () => {
  it('Renders', () => {
    render(<App />);
    let element = screen.getByText(/Bookstore/i);
    expect(element).toBeInTheDocument();
  });
});
```

6. Run your test script and confirm that your test passes:

```bash
npm run test
```

7. Make copies of **App.test.jsx** for testing **Footer.jsx**, **Header.jsx**, and **ClickCounter.jsx**.

8. Modify the contents of the new files to test that the new components render.

9. Run your tests by entering the following in the command line:

```bash
npm run test
```

10. Make sure that all the tests pass.
