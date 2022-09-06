import express from "express";
import morgan from 'morgan';
import fileUpload from "express-fileupload";
import routes from './routes/index.js';
import settings from './config/settings.js'
import path from 'path';
import { fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

const app = express();

// Settings
app.set('port', Number(settings.PORT) || Number(4500));

// Middlewares
app.use(morgan('dev'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: 'src/uploads'
}))

// Routes
app.use('/api/v1', routes);

// console.log(__filename);
// console.log(__dirname);
app.use('/images',express.static(path.join(__dirname, 'images')))

export default app;