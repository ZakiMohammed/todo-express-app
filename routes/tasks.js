const express = require('express')
const uuid = require('uuid')
const tasks = require('../data/tasks')

const router = express.Router();

router.post('/', (req, res) => {
    const task = {
        id: uuid.v4(),
        task: req.body.task
    };
    tasks.push(task);

    res.redirect('/');
})

router.post('/remove', (req, res) => {
    if (req.body.id) {
        const index = tasks.findIndex(i => i.id === +req.body.id);
        tasks.splice(index, 1);
    }
    res.redirect('/');
})

module.exports = router;
