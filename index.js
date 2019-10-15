const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');
const path = require('path');
let session = require('express-session');

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
// app.use('/', express.static('./login.html'))
// app.get('/', (request, response) => {
//     response.json({info: 'Node.js, Express, and Postgres API'})
// });

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/login.html'))
})
app.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname + '/register.html'))
})
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users/', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.post('/auth', db.loginUser)
// app.get('/home', db.homeUser)
app.get('/home', (request, response) => {
    response.sendFile(path.join(__dirname + '/home.html'))
})
app.post('/sign', db.createUser)
app.get('/logout', db.kickUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});

