const {Router} = require('express')
const router = Router()
const Ticket = require('../models/ticket')

const mapToCart = function(cart) {
   return cart.map(c => ({
        ...c.ticketId._doc
    }))
}

router.get('/', async (req, res) => {
    const user = await req.user
   .populate('ticketCart.items.ticketId')
   .execPopulate()
   console.log(user)
    const tickets = mapToCart(user.ticketCart.items)
    res.render('userstickets', {
        title: 'Мои билеты',
        isMyTickets: true,
        tickets
    })
})

module.exports = router