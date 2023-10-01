const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID =
  '40447848414-g51ps0p1rgsi1r4t19m7joi5vo65uch6.apps.googleusercontent.com';

const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
