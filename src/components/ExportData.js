import React from 'react'
import { CSVLink } from 'react-csv'
import Button from 'react-bootstrap/Button'


function ExportData(props) {

  return (
  <CSVLink
    data={props.value}
    filename={"my-file.csv"}
    className="btn btn-primary"
    target="_blank"
  >
    Download me
  </CSVLink>
  );
}	

export default ExportData