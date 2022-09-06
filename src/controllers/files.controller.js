const filesController = {};
import { uploadFile, getFiles, getFileURL, downloadFileByKey} from '../middlewares/configS3.js';

filesController.getFiles = async (req, res) => {
    const result = await getFiles();
    res.json({all: result.Contents})
}

filesController.getFileByKey = async (req, res) => {
    const result = await getFileURL(req.params.fileName);
    res.json({one: result});
}

filesController.uploadFiles = async (req, res) => {
    const result = await uploadFile(req.files.file);
    res.json({message: 'File uploaded!', result})
}

filesController.downloadFile = async (req, res) => {
    await downloadFileByKey(req.params.fileName);
    res.json({message: 'File downloaded!'})
}

export default filesController;