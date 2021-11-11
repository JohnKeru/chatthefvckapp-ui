import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
/*
sock.onopen = function() {
    console.log('open');
  }
  stompClient.connect({}, function (frame) {
     console.log('Connected: ' + frame);
     stompClient.subscribe('/topic/public', function (greeting) {
       console.log(greeting);
       //you can execute any function here
     });
  });
  stompClient.send("/app/sendMessage", {},"your message here");
*/