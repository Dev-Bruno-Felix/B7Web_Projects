import express from 'express';
import helmet from 'helmet';
import router from './routers';

const server = express();

server.use(helmet()); // Use Helmet to secure Express apps by setting various HTTP headers
server.use(express.json()); // Parse JSON bodies
server.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

server.use('/', router);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});