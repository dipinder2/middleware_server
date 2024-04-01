
var express = require('express');
var app = express();
const Router = express.Router()
const PORT = 8000
app.use(Router)
const router = require("./middlewares/movies.middleware")
const routes = require("./Routes/movies.routes")

router(Router)
routes(app)
app.listen(PORT,()=>console.log(`listening on ${PORT}`))