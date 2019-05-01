import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/bootstrap.min.css';
import LinkList from './LinkList';
import DataTab from './DataTab';
import DateFilter from './DateFilter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
    }

    this.handleChange = this.handleChange.bind(this);    
  }

  handleChange(value, event) {
    this.setState({ value });
  }


  render() {
    return (
      <div className="container-fluid">
      	<DateFilter dateFilter={this.handleChange} value={this.state.value}/>
        <LinkList value={this.state.value}/>
      	<DataTab value={this.state.value}/>
      </div>
    );
  }
}

export default App;
