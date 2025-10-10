# Lab 20: Microfrontends with Single SPA

In this lab, you'll use the Single SPA framework to create a microfrontend.

## Instructions

1. In an empty directory that's not inside of any other Node project (no **package.json** at a higher level), open a new terminal window and invoke create-single-spa.

```bash
npx create-single-spa --moduleType root-config
```

2. Answer all the questions that create-single-spa asks, choosing the defaults whenever possible.

3. Run **npm start** in your new project and open a browser to **http://localhost:9000**.

You now have a root config and an example application. You'll see some instructions for what to do next in the sample application that's running at port 9000. Read through those instructions. We're going to use Single SPA to run two React applications and share dependencies between them.

4. Open a new terminal window and generate a single-spa application by running:

```bash
npx create-single-spa --moduleType app-parcel
```

5. When you're asked for a directory and a name for the application, name the directory something creative like 'app1' and the app 'my-first-app.'

6. Once it finishes, cd to your new directory and run **npm start**.

7. Open a browser and go to the localhost post that it gives you when it starts up. (probably localhost:8001).

8. Read through this page, but don't follow these instructions just yet.

9. Open **src/index.ejs** in your root config (not in your app1 subdirectory) and find the script element with type="systemjs-importmap". Since all of our microfrontends will use React, we need to add React and ReactDOM to this import map.

10. Go to **https://cdnjs.com/libraries/react** and get the latest link for the React library (it should have **umd** in the URL) and add it to the **importmap**, then do the same for the ReactDOM library (you can just copy the same url and change "react" to "react-dom" in the URL.

11. When you're finished, your importmap should look like this:

```html
<script type="systemjs-importmap">
{
  "imports": {
    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
    "react": "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js",
    "react-dom": "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
  }
}
</script>
```

12. Open **src/microfrontend-layout.html** and find the `<route>` element. Add your new application as a 2nd application. You can get the value for the name property from the **package.json** file in your **app1** directory. For example:

```html
<application name="app1/@minnick/my-first-app"></application>
```

13. In your root config's **src** directory, open **index.ejs** and add your application to the importmap. Note that there are two importmaps in the file, and you should add your application to both. Here's an example of what you should add:

```json
"@minnick/my-first-project": "//localhost:8081/minnick-my-first-app.js",
```

14. Stop both your root config and you application and restart them. In your browser, you should now see a message saying that your application is mounted. It will look like this:

@minnick/my-first-app is mounted!

15. Remove the sample application from your **src/index.ejs** so your new application is the only one being rendered.

16. Create a second application and render that one in addition to the first.

## Bonus Lab: Authentication with JWT

In this lab, you'll learn how to implement authentication in the container component and then pass an authentication token to micro frontends.

1. Read the following article to learn about implementing JWT in React

https://www.alibabacloud.com/blog/how-to-implement-authentication-in-reactjs-using-jwt_595820

2. Use this technique, or another of your choosing, to implement authentication and create a protected "Account Info" area in the bookstore app.

## Bonus Lab: React Asteroids

Convert the JavaScript application you built in Lab 4 to a React application.