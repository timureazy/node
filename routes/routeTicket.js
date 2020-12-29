const {Router} = require('express');
const router = Router();
const Ticket = require('../models/ticket')

router.get('/', (req, res) => {
    res.status(200);
    res.render('buy', {
        title: 'Покупка билета',
        isBuy: true
    })
})

router.post('/', async (req, res) => {
    const ticket = new Ticket(req.body.name, req.body.email, req.body.surname, req.body.from, req.body.to);
    console.log(req.name)
    await ticket.save()
    res.redirect('/')
})


module.exports = router;