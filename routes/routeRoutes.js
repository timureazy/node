const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('routeslist', {
        title: 'Список маршрутов',
        isRoutes: true
    })
})

module.exports = router;