require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))

//const cookieParser = require('cookie-parser');

//app.use(cookieParser());


const PORT = process.env.PORT || 3000
const authRoute = require('./routes/auth')
const session = require('express-session');
const passport = require('passport');
const authway = require('./Authentication/discordauth')
const db = require('./database/database');
const dashboardroute = require('./routes/dashboard')
//db.then(()=>console.log('conncted to MOngodb')).catch(err=> console.log(err));

const cors = require('cors');
// app.use(cors);


app.use(session({
    secret:'somethink',
    cookie:{
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized:false,
    resave: false,
    name:'discord.auth2'
}))

app.use(passport.initialize())
app.use(passport.session())



app.use('/auth',authRoute);
app.use('/Home',dashboardroute);

/*app.get('/logout', (req, res) => {
    // Clear the 'auth' cookie to log out the user
    res.clearCookie('auth');
    res.redirect('/');
  });*/


app.listen(PORT, ()=>console.log(`Server is listening on http://localhost:${PORT}`))