
import React from 'react';
import ReactTable from "react-table";

import "react-tabs/style/react-tabs.css";
import 'react-table/react-table.css'

const DataTable = (props) => {
  const data = [{
    name: 'Tanner Linsley',
    age: props.value,
    friend: {
      name: 'Jason Mxxxxxaurer',
      age: 23,
    }
  },{
    name: 'Tanner Ls',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  }]
 
  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }]

	return(<ReactTable
	    data={data}
	    columns={columns}
	    minRows={0}
	  />);
};

export default DataTable
