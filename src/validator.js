import { existsSync } from 'fs';

const validateFilePath = (filePath) => {
    if (!existsSync(filePath)) {
        console.log(`Error: file ${filePath} does not exist`);
        process.exit(404);
    }
};

const validateFileStructure = (data) => {
    const FORMAT_REGEXP = /^([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)\s([+-]?([0-9]*[.])?[0-9]+)(\r)?\n$/;
    if (!data.match(FORMAT_REGEXP)) {
        console.log(`Error: invalid file format`); 
        process.exit(400);
    }
};

const validateANotZero = (a) => {
    if (a === 0) {
        console.log(`Error: a cannot be 0`);
        process.exit(400);
    }
};

const checkNumberIsNotDecimal = (number) => {
    const INVALID_NUMBER_REGEXP = /([A-Za-z])+/g;
    return number.toString().match(INVALID_NUMBER_REGEXP);
}

export { validateFilePath, validateFileStructure, validateANotZero, checkNumberIsNotDecimal };