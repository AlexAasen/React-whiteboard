import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import WhiteboardContainer from './components/whiteboard-container';
import request from './crud/requests';

ReactDOM.render(
    (<Provider store={store}>
      <WhiteboardContainer />
    </Provider>),
      document.querySelector('#application')
    );

// request('GET', 'all', function(data){
//   console.log(data);
// }, {
//
// });

// const socket = io.connect('http://localhost:8081');
//
// socket.on('broadcast', function(data){
//   console.log(data);
// });
