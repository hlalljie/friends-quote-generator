# Friends Quote generator
Generates quotes from the hit TV show Friends. Take a ride on the nostalgia train.

## Run the Quote Generator
Fork or clone this repository. This is created on React App so if it doesn't work right away refer to [Getting Started with Create React App](#getting-started-with-create-react-app) below.

## Make Personalized edits
This application allows for editing quotes, images, and color pallete. Any edits you make will probbaly be in the App.js file in the src folder.

### Add or Edit Quotes
In App.js there is a global quotes array that contains an object for each quote. Each object contains a string for the quote and a string for the name of the author. IMPORTANT: Make sure your author name is spelled correctly as the name of the author is used to find which image should be displayed. There are already a couple quotes added so you can follow the same format when adding new posts.

### Adding or Editing Images
Images are all online urls so you can find an image online (or locally) and swap it in for the character you'd like. You can also add new characters by adding a quote and an image for the new character. To swap or add an image you can go to the global "images" object near the top of App.js. Follow the same conventions as the current images to swap in an image of your own. Currently images are centered horizontally and aligned to the top of the image (so the bottom or sides of the image will crop out). To do more custom placement you will need to make changes in App.css though this is not currently supported (it is on the backlog though). To change the backgrouns image for the entire app, you will also need to go to App.css. There, you change the background url in #app to another image url.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
