### Report on the performance of the first laboratory work on Software Development Methodology and Technology, which was performed by student Serhii Tkachuk of the IM-12 group.
---
To run the application, you need to have node.js installed. The program has two execution modes: interactive and file.

To start the interactive mode, you need to enter the command in the terminal in the project folder  

```
node main.js
```

After that, the program will start, and you can enter the values of the coefficients of the equation, after which the program will show the equation itself and its solution.

To start the file mode, you need to enter the command
```
node main.js <valid_test.txt>
```
And pass the file path with command line arguments. The file must have a certain format that the program will understand. For example, the file should contain the line "1 0 0\n", where a space separates the coefficients, and "\n" means a new line.

There are five files in the folder with tests for testing the operation of the program in file mode.

Revert-commit:  
https://github.com/SergiiTkachuk/methodologies_lab1/commit/7510979edacea5065cf71d387ee12bb8e372578c
