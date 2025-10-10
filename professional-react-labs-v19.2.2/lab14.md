# Lab 14: Converting to TypeScript

In this lab, you'll convert the React bookstore to use TypeScript.

## Instructions

1. Install Typescript

```bash
npm install typescript --save-dev
```

2. Install types for React and ReactDom

```bash
npm install @types/react @types/react-dom --save-dev
```

3. In package.json, modify the dev and build scripts to compile the Typescript before running the app:

```json
"dev": "tsc && vite",
"build": "tsc && vite build",
```

4. Create a file named tsconfig.json at the root of your project, with the following content:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "allowImportingTsExtensions": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

5. Rename App.jsx to App.tsx and update the link to App from main.js.

You should now see a lot of red underlining in VS Code.

6. Create a new folder named types inside src.

7. Make a file in types named book.tsx and create an interface for Book:

```tsx
export interface Book {
  id: string;
  title: string;
  author?: string;
  published?: string;
  country?: string;
  lang?: string;
  pages?: string;
  image?: string;
  url?: string;
  price: string;
}
```

8. Import the Book type from types/book.tsx into App.tsx.

9. Assign types to any state variables that you haven't extracted into custom hooks yet:

```tsx
const [itemsInCart, setItemsInCart] = useState<Array<Book>>([]);
```

10. Assign types to the parameters of addToCart and removeFromCart. For example:

```tsx
function addToCart(product: Book) {
```

11. Test out the app to make sure it still works.

12. Rename ProductList.jsx to ProductList.tsx

13. Install the CSS modules typescript plugin

```bash
npm install typescript-plugin-css-modules --save-dev
```

14. Rename Footer.jsx to Footer.tsx

15. Add the following import to Footer.tsx:

```tsx
import { CSSProperties } from 'react';
```

16. Annotate footerStyle using the CSSProperties interface:

```tsx
const footerStyle: CSSProperties =
```

17. Add the css modules typescript plugin to the compilerOptions object in tsconfig.json:

```json
"plugins": [{ "name": "typescript-plugin-css-modules"}]
```

18. Create a new file named Globals.d.ts inside src, with the following content:

```typescript
declare module '*.module.css';
```

19. Create a new file in /types named product.ts and make an interface called ProductProps that contains the props received by ProductList.

```typescript
import { Book } from './book';

export type ProductProps = Book & {
  inCart: boolean;
  addToCart: (product: Book) => void;
  removeFromCart: (id: string) => void;
};
```

Function types in the interface need to have their parameters and return values. If the function doesn't return anything, use void. For example:

```typescript
addToCart: (id: string) => void;
```

20. Import ProductProps into ProductList and specify the type of the props object received by ProductList:

```tsx
function ProductList(props: ProductProps) {
```

21. Convert the rest of the components to TypeScript.