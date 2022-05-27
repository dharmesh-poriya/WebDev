for making any command globally follow below steps:
1. first go to that directory where your application code is there.
2. then open terminal in that folder and run this command : "npm init -y"
3. running above command one package.json file will be created
4. in that file create one property like this :
    "bin" : {
        "anyname" : "file name in where all application code handle"
    }
5. after doing this run this command : "npm link"
6. now we can run anyname command in any terminal of our system
7. if we want change the name then just change it and run this command : "npm unlink"
8. "npm link"
9. rename successfully!!😁