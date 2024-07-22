// index.js
const htmlDocx = require("html-docx-js");
const { saveAs } = require("file-saver");

const handleExportToWord = (tableRef, title = "document") => {
  const tableHtml = tableRef.current.outerHTML;
  const converted = htmlDocx.asBlob(tableHtml);
  saveAs(converted, `${title}.docx`);
};

module.exports = handleExportToWord;
