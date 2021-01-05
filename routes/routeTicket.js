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
    
    const ticket = new Ticket({
        userId: req.user,
        buyerName: req.body.name,
        buyerEmail: req.body.email,
        buyerSurname: req.body.surname,
        from: req.body.from,
        to: req.body.to
    })
    try {
        await ticket.save()
        await req.user.addToCart(ticket)
        res.redirect('/')
    } catch(e) {
        console.log(e)
    }
    
})


module.exports = router;