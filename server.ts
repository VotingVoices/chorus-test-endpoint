import express = require("express");

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
	console.log(`${req.method}: ${req.body}`);
	res.status(200).json({ result: 'success' });
});

const app = express();
const port = 3001;

app.use(router);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}/`);
})