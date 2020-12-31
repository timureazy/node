const {Router} = require('express')
const router = Router()
const Ticket = require('../models/ticket')

router.get('/:id', async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).lean()
    res.render('ticketback', {
        title: 'Возврат билета',
        isBack: true,
        ticket
    })
})


module.exports = router;