const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
    new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "http://localhost:3000/google/callback",
            passReqToCallback: true,
        },
        function(request, accessToken, refreshToken, profile, done) {
            //create user in database here if new
            /* User.findOrCreate({ googleId: profile.id }, function(err, user) {
                                              return cb(err, user);
                                          });*/
            return done(err, profile);
        }
    )
);

/*Passport uses serializeUser function to persist user data (after successful authentication) into session.
 Function deserializeUser is used to retrieve user data from session. */

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});