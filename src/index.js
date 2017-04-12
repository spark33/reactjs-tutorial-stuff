import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function Clock() {
  return <h2>It is {new Date().toLocaleTimeString()}.</h2>
}

// It calls ReactDOM.render() every second from a setInterval() callback.
setInterval(Clock, 1000);

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

function Welcome(props) {
  return <h5>Hello, {props.name}!</h5>;
}

const element = <Welcome name="Sean" />;
// ReactDOM.render(
//   element,
//   document.getElementById('welcome')
// );

function App() {
  return (
    <div>
      <Welcome name="Sean" />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
