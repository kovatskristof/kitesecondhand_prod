const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });

});

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        }, async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({googleId: profile.id});
            if (existingUser) {
                //find existing user profile
                return done(null, existingUser);
            }
            //create new user
            const user = await new User({googleId: profile.id}).save();
            done(null, user);
        }
    )
);

passport.use(new FacebookStrategy({
        clientID: keys.facebookAppID,
        clientSecret: keys.facebookAppSecret,
        callbackURL: "/auth/facebook/callback",
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({facebookId: profile.id});
            if (existingUser) {
                //find existing user profile
                done(null, existingUser);
            }
                //create new user
                const user = await new User({facebookId: profile.id}).save();
                done(null, user);

    }
    )
);

// =======USER SIGN UP AND HASH PASSWORD STRATEGY========
passport.use('local-signup', new LocalStrategy({
        usernameField: 'email', // map username to custom field, we call it email in our form
        passwordField: 'password',
        passReqToCallback: true // lets you access other params in req.body
    },
    async (req, email, password, done) => {
        // Return false if user already exists - failureRedirect
        let user = await User.findBy('email', email)
        if (user) { return done(null, false) }

        // Create new user and return the user - successRedirect
        let newUser = await User.create({
            email,
            passwordHash: bcrypt.hashSync(password, 10), // hash the password early
        })

        // save the user_id to the req.user property
        return done(null, {id: newUser.id})
    }
))

    // GET route to render signup page
    passport.signupPage = (req, res, next) => {
        res.render('auth/signup')
    }

    // POST route to signup user and redirect
    passport.signup = passport.authenticate('local-signup', {
        successRedirect: '/surveys',
        failureRedirect: '/login',
        failureFlash: {
            type: 'messageFailure',
            message: 'Email already taken.'
        },
        successFlash: {
            type: 'messageSuccess',
            message: 'Successfully signed up.'
        }
    })