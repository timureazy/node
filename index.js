const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const routeHome = require('./routes/routeHome')
const routeTicket = require('./routes/routeTicket')
const routeBack = require('./routes/routeReturn')
const routeRoutes = require('./routes/routeRoutes.js')
const routeSignIn = require('./routes/routeIn.js')
const routeSignUp = require('./routes/routeUp.js')
const routeAbout = require('./routes/routeAbout')
const routeOwnTickets = require('./routes/routeOwn')
const routeAdd = require('./routes/routeAdd.js')
const routeAuth = require('./routes/routeAuth')
const routeStat = require('./routes/routeStat')
const session  = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const varMiddleware = require('./middleware/variables')
const userMiddleware = require('./middleware/user')
const app = express();

const MONGODB_URI = 'mongodb+srv://VpiStudent:VPXlcHyXx7N9yLaD@cluster0.oskra.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
const store = new MongoStore({
    collection: 'session',
    uri: MONGODB_URI,
})

app.engine('hbs', hbs.engine); //указываем название движка(шаблонизатора) и прописываем сам движок
app.set('view engine', 'hbs'); //указываем, что данный движок отвечает за шаблоны
app.set('views', 'views');     //указываем папку с представлениями
app.use(express.static('public')); //указываем статическую папку, експресс будет в нее смотреть, когда увидит обращения к /
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: "some secret",
    resave: false,
    store
}))
app.use(flash())
app.use(varMiddleware)
app.use(userMiddleware)
app.use('/', routeHome)
app.use('/tickets', routeTicket)
app.use('/ticketsback', routeBack)
app.use('/routeslist', routeRoutes)
app.use('/userstickets', routeOwnTickets)
app.use('/signin', routeSignIn)
app.use('/signup', routeSignUp)
app.use('/about', routeAbout)
app.use('/addroute', routeAdd)
app.use('/auth', routeAuth)
app.use('/stat', routeStat)


async function start() {
    try {
        await mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch(e) {
        console.log(e)
    }

}

start()

