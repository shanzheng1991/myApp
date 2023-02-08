import { Component } from 'react'

import dva from "./dva.js";
import models from "./models";
import './app.less'

// 初始化dva
// const dvaApp = dva.createApp({
//   initialState: {},
//   models: models
// });
// const store = dvaApp.getStore();
class App extends Component {

  componentDidMount () {

  }

  componentDidShow () {}

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return (
      // <Provider store={store}>
        this.props.children
      // </Provider>
    );
  }
}


export default App
