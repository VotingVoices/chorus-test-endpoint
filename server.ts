import express = require('express');
import * as bodyParser from 'body-parser';
import cors = require('cors');

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
	console.log(`${req.method}: ${req.body}`);
	console.log(req.body);
	res.status(200).json({ result: 'success' });
});

const app = express();
const port = 3001;

app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}/`);
})