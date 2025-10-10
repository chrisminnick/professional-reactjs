# Lab 01: Get Started with Vite / React

1. Open a new Terminal in VSCode.

2. Use Vite to make a new React project. This will be the project we’ll be working on for most of the labs in this course.

```bash
npm create vite@latest react-bookstore -- --template react
```

If this produces an error, you most likely need to upgrade the version of node and npm on your computer (see the setup instructions).

3. Go into the new directory.

```bash
cd react-bookstore
```

4. Install the dependencies.

```bash
npm install
```

5. Test that everything was installed and works.

```bash
npm run dev
```

After a moment, you’ll see a URL in the terminal. Ctrl-Click the URL to open it in your default browser, or open a browser and go to the URL manually.

If the app was successfully created, you should see the following page:

![A screenshot of a computer Description automatically generated](media/image3.png)

6. Find **App.jsx** inside the **src** directory and open it for editing.

7. Inside the return statement, delete the `<div>` containing the Vite and React logos.

8. Delete the logo import statements from the beginning of the file.

9. Change the text inside the `<h1>` element to `Welcome to React Bookstore`.

10. Create a new `<p>` element below the `<h1>` you added and change its content to a welcome message, such as the following:

```
We have several books. Feel free to browse for as long as you like. Click on a cover image to see details, or click the Add to Cart button to add a book to your shopping cart.
```

11. Open App.css and delete everything except for the first CSS rule:

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
```

12. Open index.css and delete the following rule:

```css
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
```

13. Return to your web browser and notice that the text has been automatically refreshed (if your app is still running).

If it doesn’t refresh, click the browser refresh button, or return to your Terminal emulator and restart the development server (using `npm run dev`).

14. Click the button to see the counter increase. Exciting!

15. Delete the text below the counter.

If you get an error, make sure that all your opening tags have matching tags.

![A screenshot of a computer Description automatically generated](media/image4.png)
