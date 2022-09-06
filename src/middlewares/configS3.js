import {S3Client, PutObjectCommand, ListObjectsCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import settings from '../config/settings.js';
import fs from 'fs';
import { getSignedUrl} from '@aws-sdk/s3-request-presigner'

const cliente = new S3Client({
    region: settings.AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: settings.AWS_PUBLIC_ACCESS_KEY,
        secretAccessKey: settings.AWS_SECRET_ACCESS_KEY
    }
});

export async function uploadFile(file){
    const stream = fs.createReadStream(file.tempFilePath);
    const uploadParams = {
        Bucket: settings.AWS_BUCKET_NAME,
        Key: file.name,
        Body: stream
    }
    const command = new PutObjectCommand(uploadParams);

    return await cliente.send(command);
}

export async function getFiles(){
    const command = new ListObjectsCommand({
        Bucket: settings.AWS_BUCKET_NAME
    })

    return await cliente.send(command);
}

export async function getFileByKey(fileName){
    const command = new GetObjectCommand({
        Bucket: settings.AWS_BUCKET_NAME,
        Key: fileName
    })

    return await cliente.send(command);
}

export async function downloadFileByKey(fileName){
    const command = new GetObjectCommand({
        Bucket: settings.AWS_BUCKET_NAME,
        Key: fileName
    })

    const result = await cliente.send(command);
    // console.log(result);
    result.Body.pipe(fs.createWriteStream(`src/images/${fileName}`));
}

export async function getFileURL(fileName){
    const command = new GetObjectCommand({
        Bucket: settings.AWS_BUCKET_NAME,
        Key: fileName
    })

    return await getSignedUrl(cliente, command, { expiresIn: 3600});
}