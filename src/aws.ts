import {S3} from 'aws-sdk'
import fs from 'fs'


const s3 = new S3({

    accessKeyId : "AKIA2QXZ5RXBLQQ2OKTF",
    secretAccessKey : "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"

})

//File Path is where where we want to upload the file in s3 ( folder structure in s3)
export const uploadFile = async(loaclFilePath : string, filePath : string) =>{

    console.log("here")
    const fileContent = fs.readFileSync(loaclFilePath);
    
    const response = s3.upload({
        Body : fileContent,
        Bucket : "jatinvercel",
        Key : filePath
    }).promise();

    console.log(response)
}