const fs = require('fs');
const pdfreader = require("pdfreader");


fs.readFile("sample.pdf", (err, pdfBuffer) => {
  // pdfBuffer contains the file content
  new pdfreader().parseBuffer(pdfBuffer, function (err, item) {
    if (err) callback(err);
    else if (!item) callback();
    else if (item.text) console.log(item.text);
  });
})