const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'katuang',
    host: 'localhost',
    database: 'api',
    password: 'qweasd',
    port: 5432

});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createUser = (request, response) => {
    const { username, email, password } = request.body

    pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [username, email, password], (error, results) => {
        if(error) {
            throw error
        }
        response.redirect('/')
        // response.status(200).send(`User added with ID: ${results.rows[0]}`)
    })
};

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email, password } = request.body;

    pool.query('UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4', [name, email, password, id], (error, results) => {
        if(error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
    })
};

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM users WHERE id=$1', [id], (error, results) => {
        if(error) {
            throw error
        }
        
        response.status(200).send(`User deleted with ID: ${id}`)
    })
};

const loginUser = (request, response) => {
    let username = request.body.username;
    let password = request.body.password;
    // console.log(password)

    if(username && password) {
        pool.query('SELECT * FROM users WHERE name = $1 AND password = $2', [username, password], (error, results) => {
            // console.log(results.rows.length)
            if(results.rows.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Incorrect username and password')
            }
            response.end();
        })
    } else {
        response.send('please enter username and password')
        response.end()
    }
};

const homeUser = (request, response) => {
    if(request.session.loggedin) {
        response.send(`welcome back ${request.session.username}`)
    } else {
        response.send('please login to view this page')
    }
    response.end();
};

const kickUser = (request, response) => {
    request.session.destroy( error => {
        if(error) {
            console.log(error)
        } else {
            response.redirect('/')
        }
    })
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser, loginUser, homeUser, kickUser};