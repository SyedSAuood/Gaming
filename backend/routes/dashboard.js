const router = require('express').Router();

//middleware
function isAuthorized(req,res,next){
    if(req.user){
        console.log("User is logged in");
        //res.redirect('/game')
        console.log(req.user);
        next();
    }else{
        console.log("user is not logged in");
        res.redirect('/login')
    }
}


router.get('/', isAuthorized, (req,res) => {
  //console.log(req.user)
    res.send(200)  
})

module.exports = router;