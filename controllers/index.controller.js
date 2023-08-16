const {Pool} = require('pg');


const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'Epre*2022*',
    database:'firstapi',
    port:'5432'
});

const getUsers = async (req,res) => {
    const response = await pool.query('SELECT * FROM users');
    // console.log(response.rows);
    // res.send('users')
    // res.json(response.rows)
    res.status(200).json(response.rows);
}

const createUsers = async (req,res) => {

}


module.exports = {
    getUsers,
    createUsers
}