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



### Instructions for Adding README.md to Your Project

1. **Create README.md**: Create a `README.md` file in the root directory of your package and copy the above content into it.

2. **Ensure README is Included in package.json**: Make sure your `package.json` file references the README file. This is usually done automatically, but you can verify that it’s included.

### package.json

```json
{
  "name": "export-table-to-word",
  "version": "1.0.0",
  "description": "A utility to export HTML tables to Word documents",
  "main": "index.js",
  "scripts": {
    "test": "npm test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/abdulsalam8/export-table-to-word-npm-package.git"
  },
  "keywords": [
    "html",
    "table",
    "word",
    "export",
    "reactjs"
  ],
  "author": "abdulsalam Abubakar",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/abdulsalam8/export-table-to-word-npm-package/issues"
  },
  "homepage": "https://github.com/abdulsalam8/export-table-to-word-npm-package#readme",
  "dependencies": {
    "file-saver": "^2.0.5",
    "html-docx-js": "^0.3.1"
  }
}




