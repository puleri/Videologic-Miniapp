import React, { useState, useEffect } from 'react'
import './Testing.css';

export default function Testing() {

  function indexCases() {
    fetch(`http://localhost:9000/docroot/test_case_index.php`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      // setTableContents({ users: response })
    })
    .catch(err=> {
      console.log(err)
    });
  }
  useEffect(() => {
    indexCases()
  }, [])

  const [tableContents, setTableContents] = useState([])

  return (
    <>
      <h2 style={{margin: "20px 50px",textAlign:'left'}}>Test Case Planning and Execution</h2>

      <div className="test-case-create">

      </div>

      <div className="test-case-notes">

      </div>

      <div className="test-case-table">
        <table>
          {tableContents}
        </table>
      </div>
    </>
  )
}
