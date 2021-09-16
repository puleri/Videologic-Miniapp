import React, { useState, useEffect } from 'react'
import './Testing.css';

export default function Testing() {
  const [added, setAdded] = useState(false)
  const [tableContents, setTableContents] = useState([])

// On load
  useEffect(() => {
      fetch(`http://localhost:9000/docroot/test_case_index.php`, {
        method: 'GET',
      })
      .then(res => res.json())
      .then(response => {
        // set state by spreading response
        setTableContents(tableContents => [...tableContents, response])
      })
      .then(console.log('table contents are', tableContents))
      .catch(err=> {
        console.log(err)
      });

  }, [])


const tableContentsHTML = tableContents.map((el, i) => (
  <td key={i}>
    {el.id ? 'yes' : 'no'}
  </td>
))


  return (
    <>
      <h2 style={{margin: "20px 50px",textAlign:'left'}}>Test Case Planning and Execution</h2>

      <div className="test-case-create">
        <input placeholder="test description..."/>
        <input placeholder="date..."/>
        <input placeholder="expected results..."/>
        <input placeholder="actual results..."/>
        <input placeholder="pass/fail..."/>
        <input placeholder="additional notes..."/>
      </div>

      <div className="test-case-notes">

      </div>

      <div className="test-case-table">
        <table>
          {tableContentsHTML}
        </table>
      </div>
    </>
  )
}
