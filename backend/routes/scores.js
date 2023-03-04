const express = require('express');
const router = express.Router();
const { addScore, getBestScores, getScoresByUserId, getAboveScoresByScore, getBelowScoresByScore } = require('../controllers/scoresController');


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


router.get('/aboveScoresByScore', async (req, res) => {
    try {
        const result = await getAboveScoresByScore(req.query.score);
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


router.get('/belowScoresByScore', async (req, res) => {
    try {
        const result = await getBelowScoresByScore(req.query.score);
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
