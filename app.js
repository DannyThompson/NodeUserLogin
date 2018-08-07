//DMT 2018
let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app);

const hostname = '127.0.0.1';
const port = 3000;

let index = require('./routes/index');
let register = require('./routes/register_route');

app.use('/', index);
app.use('/registration', register);
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
app.use(express.static('public'));



app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

server.listen(port, hostname, () => {
	console.log("Server started on port " + port);
});

module.exports = app;