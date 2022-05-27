✓#Wcat

It is used to display or makeacopy content of one or more files in the terminal

## Commands:
- wcat filepath=>displays content of the file in the terminal
- wcat filepath1 filepath2 filepath3 ...=>displays content of all files in the terminal(contactina form)in the given order.
- wcat -s filepath=>convert big line breaks intoasingular line break
- wcat -n filepath=>give numbering to all the lines
 5- wcat -b filepath=>give numbering to non-empty lines
 6- wcat filepath>filename2path=>put all the content of filename into filename2 by overriding and also creates filename2 if it doesn't exist.
 7- wcat filename2path >> filename 2path=>append all the content of filename into filename2 ..
 8- node wcat -s filename>filename2=>get the file content of filename remove large spaces and save output in filename2
 We can mix and match the options.

 ## Edge cases:

 1- If file entered is not found then it gives file does not exist error.
 2- -n and -b are2options available together then command should give you an error
