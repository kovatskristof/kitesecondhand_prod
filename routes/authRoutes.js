const passport = require('passport');

module.exports = (app) => {

    app.get('/',isLoggedIn,(req,res)=>{
        console.log("req user",req.user);
        res.render('home',{
            user : req.user
        });
    });


    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get('/auth/signup',(req,res) => {
        res.render('signup');
    })

    app.post('/auth/signup', passport.authenticate('local-signup', {

        successRedirect : '/surveys', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }

    ));

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)});

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/login');
    }


};

// { successRedirect: '/',
//             failureRedirect: '/login' }