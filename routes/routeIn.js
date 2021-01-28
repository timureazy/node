const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('signin', {
        title: 'Войти',
        isSignIn: true,
        error: req.flash('error'),
        loginError: req.flash('loginError')
    })
})

module.exports = router;