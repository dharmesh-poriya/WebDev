const data = require('./example.json');
const xlsx = require('xlsx');
function writeExcelFile(filepath,json,sheetname){
    let newBook = xlsx.utils.book_new();
    let newSheet = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newBook,newSheet,sheetname);
    xlsx.writeFile(newBook,filepath);
}
writeExcelFile('./example1.xlsx',data,'sheet1')
// book_new() is use to create new excel file

// sheet_add_json() is use to add json data to excel file

// book_append_sheet() is use to add sheet to excel file

// writeFile() is use to write excel file

