import {Router} from "express";
import filesControl from '../controllers/files.controller.js';
const router = Router();

router.get('/', filesControl.getFiles);
router.get('/:fileName', filesControl.getFileByKey);
router.get('/download/:fileName', filesControl.downloadFile);
router.post('/', filesControl.uploadFiles);

export default router;