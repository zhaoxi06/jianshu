import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { IconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <IconFontStyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
