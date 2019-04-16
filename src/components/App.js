import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/bootstrap.min.css';
import LinkList from './LinkList';
import DataTab from './DataTab';

function Hero() {
  return (<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Hello</h1>
    </div>
  </div>);
}

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
      	<Hero />
      	<LinkList />
      	<DataTab />
      </div>
    );
  }
}

export default App;
