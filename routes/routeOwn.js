const {Router} = require('express')
const router = Router()
const Ticket = require('../models/ticket')

router.get('/', async (req, res) => {
    const tickets = await Ticket.getAll() 
    res.render('userstickets', {
        title: 'Мои билеты',
        isMyTickets: true,
        tickets
    })
})

module.exports = router