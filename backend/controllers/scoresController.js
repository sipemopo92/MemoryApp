const pool = require('../db')


async function getScoreById(id) {
    const querySql = 'SELECT * FROM scores WHERE id = ?'
    const [result,] = await pool.query(querySql, [id]);
    return result;
}


async function getBestScores() {
    const querySql = `
        SELECT u.name, s.*
        FROM users u
        JOIN scores s ON u.id = s.id_user 
        WHERE s.score = (
            SELECT MAX(score)
            FROM scores
            WHERE id_user = u.id
          )
        ORDER BY score DESC`;
    const [result,] = await pool.query(querySql);
    return result;
}


async function getScoresByUserId(id) {
    const querySql = `
        SELECT u.name, s.*
        FROM users u
        LEFT OUTER JOIN scores s ON u.id = s.id_user 
        WHERE u.id = ?
        ORDER BY s.data DESC`;
    const [result,] = await pool.query(querySql, [id]);
    return result;
}


async function addScore(idUser, score) {
    const querySql = 'INSERT INTO scores (id_user, score, data) VALUES (?, ?, ?)';
    const [result, ] = await pool.query(querySql, [idUser, score, new Date()]);
    const user = await getScoreById(result.insertId);
    return user;
}


module.exports = {
    getScoreById,
    addScore,
    getBestScores,
    getScoresByUserId
};