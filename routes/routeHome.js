const {Router} = require('express');
const router = Router();

  router.get('/', (req, res) => {
        res.status(200);
        res.render('index', {
            title: 'Бронь билетов'
        }); //рендер файла с расширением hbs, в указанной в set папке с представлениями
    })


module.exports = router;