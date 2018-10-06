import express = require("express");

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
	res.send("Hello world!");
});

const app = express();
const port = 3001;

app.use(router);

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}/`);
})