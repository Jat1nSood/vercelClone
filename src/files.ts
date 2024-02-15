import { response } from 'express';
import fs from 'fs'
import path from 'path'


export const getAllFiles = (localFolderPath : string) => {

    let result : string[] = [];

    const allFilesAndFolder = fs.readdirSync(localFolderPath);
    allFilesAndFolder.forEach(file =>{
    const fullFilePath = path.join(localFolderPath, file);

    if(fs.statSync(fullFilePath).isDirectory()){
        result = result.concat(getAllFiles
            (fullFilePath));

    }else{
        result.push(fullFilePath)
    }
    })

    return result;

}