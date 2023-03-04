const express = require('express');
const router = express.Router();
const { addScore, getBestScores, getScoresByUserId } = require('../controllers/scoresController');


router.post('/', async (req, res) => {
    try {
        const result = await addScore(req.body.id_user, req.body.score);
        res.json({
            status: 'OK',
            message: '',
            data: result
        });;
    } catch (e) {
        res.json({
            status: 'KO',
            message: e.toString(),
            data: ''
        });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getBestScores();
        res.json({
            status: 'OK',
            message: '',
            data: result
        });;
    } catch (e) {
        res.json({
            status: 'KO',
            message: e.toString(),
            data: ''
        });
    }
});


router.get('/scoresByUserId', async (req, res) => {
    try {
        const result = await getScoresByUserId(req.query.id_user);
        res.json({
            status: 'OK',
            message: '',
            data: result
        });;
    } catch (e) {
        res.json({
            status: 'KO',
            message: e.toString(),
            data: ''
        });
    }
});


module.exports = router;
