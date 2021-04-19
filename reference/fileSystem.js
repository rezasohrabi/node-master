const fs = require('fs');
const path = require('path');

const DIRECTORY = 'createDirectory';
const FILE = 'file.txt';

const createDirectory = () => {
    fs.mkdir(
        path.join(__dirname, DIRECTORY),
        {recursive: true},
        error => {
            if(error) throw error;
            console.log('Directory Created!');
        }
    )
}

const readFromFile = () => {
    fs.readFile(
        path.join(__dirname, DIRECTORY, FILE),
        'utf8',
        (error, data) => {
            if(error) throw error;
            console.log('File Data:', data);
            console.log('.............................');
        }
    );
}

const renameFile = () => {
    fs.rename(
        path.join(__dirname, DIRECTORY, FILE),
        path.join(__dirname, DIRECTORY, 'renamedFile.txt'),
        error => {
            if(error) throw error;
            console.log('File is Renamed');
        }
    )

}

const writeToFile = () => {
    fs.writeFile(
        path.join(__dirname, DIRECTORY, FILE),
        'this must be written to file',
        error => {
            if(error) throw error;
            console.log('File Is Written');

            readFromFile();
            renameFile();

        }
    );
}

createDirectory();
writeToFile();
