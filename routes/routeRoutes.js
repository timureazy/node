const {Router} = require('express')
const router = Router();
const Route = require('../models/route')

router.get('/', async (req, res) => {
    const routes = await Route.find().lean()
    res.render('routeslist', {
        title: 'Список маршрутов',
        isRoutes: true,
        routes
    })
})

module.exports = router;