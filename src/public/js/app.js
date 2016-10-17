import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import WhiteboardContainer from './components/whiteboard-container';

ReactDOM.render(
    (<Provider store={store}>
      <WhiteboardContainer />
    </Provider>),
    document.querySelector('#application')
  );
