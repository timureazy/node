const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('signin', {
        title: 'Войти',
        isSignIn: true
    })
})

module.exports = router;