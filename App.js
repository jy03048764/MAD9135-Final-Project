import React from "react";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import Main from "./Main";
import {createStore, applyMiddleware,compose} from "redux";
import reducers from "./reducers";

let State = {};
const store = createStore(reducers, State, applyMiddleware(thunk));
export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store} >
      <Main />
      </Provider>
    )
  }
}
