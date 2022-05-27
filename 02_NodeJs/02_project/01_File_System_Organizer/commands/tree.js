function treeCommand(directoryPath){
    // console.log("Tree path implemented for : " + directoryPath);
    if(directoryPath == undefined){
        // console.log("Please provide a directory path");
        // process.cwd() returns the current working directory
        treeHelper(process.cwd(),"");
        return;
    }
    let doesExist = fs.existsSync(directoryPath);
    if(!doesExist){
        console.log("Directory does not exist");
        return;
    }
    treeHelper(directoryPath,"");
}

function treeHelper(directoryPath,indent){
    let isFile = fs.lstatSync(directoryPath).isFile();
    if(isFile){
        let fileName = path.basename(directoryPath);
        console.log(indent + "├──" + fileName);
        return;
    }
    let dirName = path.basename(directoryPath);
    console.log(indent + "└──" + dirName);
    let childrens = fs.readdirSync(directoryPath);
    for(let i=0;i<childrens.length;i++){
        let child = childrens[i];
        let childPath = path.join(directoryPath,child);
        treeHelper(childPath, indent + "\t");
    }
}

module.exports = {
    treeKey: treeCommand
}