import React from 'react'

function ExportData(props) {

let obj = [
    [
      "New Visitor",
      "(not set)",
      "(not set)",
      "0"
    ],
    [
      "New Visitor",
      "(not set)",
      "(not set)",
      "mobile"
    ],
    [
      "New Visitor",
      "(not set)",
      "(not set)",
      "mobile"
    ],
    [
      "New Visitor",
      "(not set)",
      "(not set)",
      "mobile",
    ]
  ]
  let csv = obj.join('\n')
	const data = "data:text/plain;charset=UTF-8," + csv;

  return (
		<a class="btn btn-info" role="button" href={data}
   		download="data.csv">
  		Download
		</a>
  );
}	

export default ExportData