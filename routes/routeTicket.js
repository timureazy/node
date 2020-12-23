const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('buy', {
        title: 'Покупка билета',
        isBuy: true
    })
})

module.exports = router;