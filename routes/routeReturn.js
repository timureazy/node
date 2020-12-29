const {Router} = require('express')
const router = Router()
const Ticket = require('../models/ticket')

router.get('/:id', async (req, res) => {
    const ticket = await Ticket.getById(req.params.id)
    res.render('ticketback', {
        title: 'Возврат билета',
        isBack: true,
        ticket
    })
})


module.exports = router;