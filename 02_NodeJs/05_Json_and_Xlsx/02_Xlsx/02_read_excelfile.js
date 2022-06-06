const xlsx = require('xlsx');
const fs = require('fs');

function readExcelFile(filepath,sheetname){
    if(false==fs.existsSync(filepath)){
        return "file not exists!!";
    }
    let workBook = xlsx.readFile(filepath);
    let sheetData = workBook.Sheets[sheetname];
    let data = xlsx.utils.sheet_to_json(sheetData);
    return data;
}
console.log(readExcelFile('./example1.xlsx','Sheet-1'));