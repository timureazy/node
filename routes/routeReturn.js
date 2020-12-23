const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.status(200);
    res.render('ticketback', {
        title: 'Возврат билета',
        isBack: true
    })
})

module.exports = router;