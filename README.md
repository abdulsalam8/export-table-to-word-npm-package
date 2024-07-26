# expor-table-to-word

A utility to export HTML tables to Word documents.

[![NPM](https://nodei.co/npm/table-to-word.png)](https://npmjs.org/package/table-to-word)

---

## Installation

Install the package using npm or yarn:

```sh
npm install table-to-word
# or
yarn add table-to-word


import React, { useRef } from 'react';
import handleExportToWord from 'table-to-word';

function App() {
  const tableRef = useRef(null);

  return (
    <div className="App">
      <table ref={tableRef}>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleExportToWord(tableRef, 'example-table')}>Export to Word</button>
    </div>
  );
}

export default App;


import handleExportToWord from 'table-to-word';

// Assume tableRef is a reference to your HTML table element
const tableRef = useRef(null);
const title = 'example-table';

handleExportToWord(tableRef, title);








