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


// router.get('/redirect', passport.authenticate('discord', {
//     // Your authentication options
// }), (req, res) => {
//     // Check a condition after successful authentication
//     if (req.isAuthenticated()) {
//         // The user is authenticated
//        // console.log(window.location.href);
//        // user = req.user
//         res.send(req.user).status(200);
//         //res.redirect(url)
//     } else {
//         // The user is not authenticated, handle this case
//         res.send('Authentication failed');
//     }
// });

// router.get('/redirect/callback',passport.authenticate('discord'),(req,res)=>{
//     res.set('req.user','value');
//     res.send(req.user);
//     //res.set('req.user','value');
//   //  res.redirect('http://localhost:3001/Home')
// })


// working one
router.get('/redirect',
  passport.authenticate('discord')
)


router.get('/redirect/callback',
    passport.authenticate('discord', {
        failureRedirect: '/',
    }),
    (req, res) => {
        // Successful authentication
         //console.log(req.query);
        // console.log(req.user)
         //res.status(200).json(req.user);
        // console.log(req.user.access_token);
         req.session.user = req.user;
         res.redirect(url); // Redirect to a dashboard or home page

    });
    // router.get('/api/getuser',(req,res)=>{
    //   console.log(req.user);
    // })

    router.get('/api/user', (req, res) => {
      if (req.session.user) {
        // If the user is authenticated and their data is in the session, send their data
        res.status(200).json(req.session.user);
      } else {
        // If the user is not authenticated or their data is not available, send an error or an empty object
        res.status(401).json({ error: 'Unauthorized' });
      }
    });

module.exports = router;

