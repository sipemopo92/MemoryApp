// const { json } = require('express');
const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/usersController');


router.get('/', async (req, res) => {
    try {
        const result = await getUsers()
        res.json({
            status: 'OK',
            message: '',
            data: result
        });
    } catch (e) {
        res.status(500).json({
            status: 'KO',
            message: e.toString(),
            data: ''
        });
    }
});


router.post('/', async (req, res) => {
    try {
        const result = await addUser(req.body.name);

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
})




module.exports = router;