const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {

    res.render('signup', {
        title: 'Регистрация',
        isSignUp: true
    })
})

module.exports = router;