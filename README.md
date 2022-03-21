# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## State Management

Redux is the state management used for this project. [Redux Documentation](https://redux.js.org/)
Redux Thunk is the middelware used for all redux operation. [Redux Thunk Documentation](https://github.com/reduxjs/redux-thunk)

## Styling

Styled components is used as the tool used for styling [Styled Components](https://styled-components.com/)

```js
const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;
```

## Navigation

React Router Dom v6 is the library used for navigation [React Router Dom](https://reactrouter.com/docs/en/v6/getting-started/overview)

## HTTP Client

Axios is the library used for HTTP Client [Axios](https://github.com/axios/axios)

## Testing

React Testing Library is the tool used for unit & integration testing. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Mocking Store

To mock all the redux state management beahvior Redux Mock Store is the tool used [Redux Mock Store](https://github.com/reduxjs/redux-mock-store)
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
