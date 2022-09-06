import {config} from 'dotenv';
config();

const variable = {};

variable.PORT = process.env.PORT,
variable.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
variable.AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
variable.AWS_PUBLIC_ACCESS_KEY = process.env.AWS_PUBLIC_ACCESS_KEY;
variable.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export default variable;