const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Epre*2022*',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    // console.log(response.rows);
    // res.send('users')
    // res.json(response.rows)
    res.status(200).json(response.rows);
};

const getUsersById = async (req, res) => {
    // res.send('User ID' + req.params.id)
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
    console.log(response);
};

const deleteUsers = async (req, res) => {
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} eliminado correctamente`)
};

const updateUsers = async (req, res) => {
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    //console.log(id,name,email);
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.json('User updated')
};

const createUsers = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.json({
        message: 'Usuario creado satisfactoriamente',
        body: {
            user: { name, email }
        }
    })
};


module.exports = {
    getUsers,
    getUsersById,
    deleteUsers,
    createUsers,
    updateUsers
}