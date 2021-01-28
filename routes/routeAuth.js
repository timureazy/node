const {Router} = require('express')
const router = Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({email})
    
        if (candidate) {
          const areSame = await bcrypt.compare(password, candidate.password)
          const isAdmin = candidate.isAdmin
          if (areSame) {
            req.session.user = candidate
            isAdmin === true ? req.session.isAdmin = true : false
            req.session.isAuth = true
            req.session.save(err => {
              if (err) {
                throw err
              }
              res.redirect('/')
            })
          } else {
            req.flash('error', 'Неправильный пароль')
            res.redirect('/signin')
          }
        } else {
          req.flash('loginError', 'Пользователь не найден')
          res.redirect('/signin')
        }
      } catch (e) {
        console.log(e)
      }
})

router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/signin')
    })
})

router.post('/register', async(req, res) => {
    try {
    const {email, name, surname, patronymic, password} = req.body
    const candidate  = await User.findOne({email})
    if(candidate) {
        req.flash('registerError', 'Пользователь с таким email уже существует')
        res.redirect('/signup')
    } else {
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User ({
            email, name, surname, patronymic, password: hashPassword, ticketCard: {items:[]}
        })
        await user.save()
        res.redirect('/')
    }
    } catch(e) {
        if(e) throw e
    }
})

module.exports = router;