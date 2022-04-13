const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

var router = express.Router();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', router);

app.listen(port, () => {console.log('Launching...')});

