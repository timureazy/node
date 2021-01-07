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

router.post('/return/:id', async (req, res) => {
   try {
    await req.user.removeFromCart(req.params.id)
    await Ticket.deleteOne({
        _id: req.body.id
    })
    res.redirect('/userstickets')
   } catch(e) {
    console.log(e)
   }
    
})


module.exports = router;