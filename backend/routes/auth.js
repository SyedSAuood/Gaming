const router =require('express').Router();
const passport = require('passport');

const url = 'http://localhost:3001/Home'
//router.get('/')
/*router.get('/redirect',passport.authenticate('discord',{
    //failureRedirect:'/forbidden',
     //successRedirect:url
}),(req,res)=>{
    //console.log(res)
    res.send(JSON.stringify(req.user))
})*/

// router.get('/redirect',passport.authenticate('discord', (err, user) => {
//     if (err) {
//       // Handle authentication error
//       res.status(500).json({ error: 'Authentication failed' });
//     } else {
//       // Authentication succeeded
//       console.log(user)
//       res.status(200).json({ user });
      
//     }
//   }));

/*router.get('/redirect', (req, res) => {
    console.log(req.query)
    passport.authenticate('discord', (err, user) => {
      if (err) {
        // Handle authentication error
        console.log('here')
        res.status(500).json({ error: 'Authentication failed' });

      } else {
        // Authentication succeeded
        res.send(JSON.stringify(req.user));
      }
    });
})*/
router.get('/redirect', passport.authenticate('discord', {
    // Your authentication options
}), (req, res) => {
    // Check a condition after successful authentication
    if (req.isAuthenticated()) {
        // The user is authenticated
        console.log(window.location.href);
        user = req.user
        res.send(user).status(200);
        //res.redirect(url)
    } else {
        // The user is not authenticated, handle this case
        res.send('Authentication failed');
    }
});

module.exports = router;