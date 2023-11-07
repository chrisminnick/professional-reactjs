# Lab 4.5: Convert to TypeScript

1. Open a terminal window and create a new project using Vite:

`npm create vite@latest`

2. When vite asks for a name for the project, use react-bookstore-typescript

3. Select react as the framework

4. Select typescript

5. Install the dependencies

`cd react-bookstore-typescript`

`npm install`

6. Copy the App, Header, Main, ProductList, Product, Cart, CartItem, and Footer components, plus your tests, from react-bookstore/src to react-bookstore-typescript/src

7. Delete the App.tsx file that was created by Vite

8. Rename Main.jsx to MainContainer.tsx and fix the import statement in App.js

9. Rename your all of your custom components to have the .tsx extensions.

10. Enter `npm run dev` to start the development server.

11. Look for files in VS Code that are now red (there should be only one if the above steps have been done correctly). These have Typescript errors. See if you can fix them (by searching Google or looking at the solutions/lab04-typescript folder).
