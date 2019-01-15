import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
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
        <BrowserRouter>
          <div>
            <Route exact path='/' render={()=><div>Home</div>} />
            <Route exact path='/detail' render={()=><div>detail</div>} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
