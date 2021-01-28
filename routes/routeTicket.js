const {Router} = require('express');
const router = Router();
const Ticket = require('../models/ticket')
const defend = require('../middleware/routesDefend')
const Route = require('../models/route')
router.get('/', (req, res) => {
    res.status(200);
    res.render('buy', {
        title: 'Покупка билета',
        isBuy: true
    })
})

router.post('/', defend, async (req, res) => {
    const id = req.body.routeid
    const ticket = new Ticket({
        userId: req.user,
        buyerName: req.user.name,
        buyerEmail: req.user.email,
        buyerSurname: req.user.surname,
        price: req.body.button,
        from: req.body.from,
        to: req.body.to,
        date: req.body.start_date
    })
    try {
        await ticket.save()
        await req.user.addToCart(ticket)
        if(req.body.button < 1000) {
           const a = await Route.findById(id)
           a.lowTypeSeats -= 1
          await Route.findByIdAndUpdate(id, {$set:{lowTypeSeats: a.lowTypeSeats}})
        } else if(req.body.button >= 1000) {
            const a = await Route.findById(id)
           a.middleTypeSeats -= 1
          await Route.findByIdAndUpdate(id, {$set:{middleTypeSeats: a.middleTypeSeats}})
        } else (req.body.button >= 2000) 
            const a = await Route.findById(id)
            a.luxTypeSeats -= 1
           await Route.findByIdAndUpdate(id, {$set:{luxTypeSeats: a.luxTypeSeats}})
        
        
        res.redirect('/userstickets')
    } catch(e) {
        console.log(e)
    }
    
})


module.exports = router;