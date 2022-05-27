function helpCommand(){
    console.log(`
    List of commands:
        • node filename.js tree "directory path"
        • node filename.js organize "directory path"
        • node filename.js help
    `);
}

module.exports ={
    helpKey: helpCommand
}