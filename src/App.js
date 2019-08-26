import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Weather from "./components/weather.js"
import { inputReducer } from "./components/reducer.js"

const store = createStore(
    inputReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

function App() {
  return (
    <Provider store={store}>
        <Weather />
    </Provider>
  );
}

export default App;
