// remove others characters from string except alphabets and space
str.replace(/[^a-zA-Z ]/g, "")


// creating new directory
// if use ES module then add this two line for using __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function makeNewDirectory(dirname){
    if(!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
    }
}

// Excel write
function writeExcelFile(filepath,json,sheetname){
    let newBook = xlsx.utils.book_new();
    let newSheet = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newBook,newSheet,sheetname);
    xlsx.writeFile(newBook,filepath);
}

// Excel read
function readExcelFile(filepath,sheetname){
    if(false==fs.existsSync(filepath)){
        return "file not exists!!";
    }
    let workBook = xlsx.readFile(filepath);
    let sheetData = workBook.Sheets[sheetname];
    let data = xlsx.utils.sheet_to_json(sheetData);
    return data;
}

