const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('signup', {
        title: 'Регистрация',
        isSignUp: true
    })
})

module.exports = router;