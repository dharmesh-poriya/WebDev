function organizeCommand(directoryPath){
    // console.log("orgnization implemented for : " + directoryPath);
    if(directoryPath === undefined){
        // console.log("Please enter a directory path");
        directoryPath = process.cwd();
    }
    let doesExist = fs.existsSync(directoryPath);
    if(!doesExist){
        console.log("Directory does not exist");
        return;
    }
    let destPath = path.join(directoryPath,"Organized_Files");
    if(!fs.existsSync(destPath)){
        fs.mkdirSync(destPath);
    }
    organizeHelper(directoryPath, destPath);
}

function organizeHelper(srcPath, destPath){
    let files = fs.readdirSync(srcPath);
    // console.log(files);
    for(let i=0;i<files.length;i++){
        let file = files[i];
        let file_path = path.join(srcPath,file);
        let isFile = fs.lstatSync(file_path).isFile();
        if(isFile){
            let category = getCategory(file);
            // console.log(category);

            moveFiles(file_path,destPath,category);
        }
    }
}

function getCategory(file){
    let ext = path.extname(file).slice(1);
    // console.log(ext);
    for(let key in types){
        if(types[key].includes(ext))
            return key;
    }
    return "other";
}

function moveFiles(src_file_path, dest_file_path, category){
    let dest_path_category = path.join(dest_file_path,category);
    if(!fs.existsSync(dest_path_category)){
        fs.mkdirSync(dest_path_category);
    }

    let file_name = path.basename(src_file_path);
    let dest_path_file = path.join(dest_path_category,file_name);
    fs.copyFileSync(src_file_path,dest_path_file);
    console.log("File moved to " + dest_path_file);
    // if we want to cut the file then we can use fs.unlinkSync(file_path);
    fs.unlinkSync(src_file_path);
}

module.exports = {
    organizeKey: organizeCommand
}