const pool = require('../db')

async function getUsers() {
    const [result, ] = await pool.query('select * from users');
    return result;
}

async function getUserById(id) {
    const querySql = 'SELECT * FROM users WHERE id = ?'
    const [result,] = await pool.query(querySql, [id]);
    return result;
}

async function addUser(nome) {
    const querySql = 'INSERT INTO users (name) VALUES (?)';
    const [result, ] = await pool.query(querySql, [nome]);
    const user = await getUserById(result.insertId);
    return user;
}



module.exports = {
    getUsers,
    getUserById,
    addUser,
};