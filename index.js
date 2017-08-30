/** lambda-open-source
 * 
 * Welcome to lambda-open-source!
 * 
 * This is a place where students can learn, experiment, grow, teach,
 * and hone the skills that they are learning in their respective
 * Lambda School courses.
 * 
 * All are welcome to participate and encouraged to collaborate, teach,
 * and learn. We hope that this experience can serve as an example of
 * what it might be like to work on a real open source project. We
 * hope you enjoy the experience!
 * 
 * TODO: Change the intro to make it more awesome
 * 
 * DEVELOPERS
 * 1. Ryan Sherrill | CS1 | Staff Software Engineer | Current Project Manager
 * 
 * VARIABLES & USE/FUNCTION
 * 
// ENVIRONMENT VARIABLE to get PORT to use from Heroku
// if we are running in production, then we use this variable
// if we are in test or development, then we use our local PORT
// "If there is an environment variable that has been defined by
// Heroku, go ahead and assign that variable to PORT. Otherwise,
// just use the defaul of 5000." - Stephen Grider
 * 
 * ROUTES
 * What do they do?
 * How are they used?
 * What does the specific method used do?
 * GET SOME LINKS UP IN THIS JOINT
 * 
 * GET /
 * req, res descriptions
 * app.get & app.send descriptions
 * 
 * FUNCTIONS CALLED
 * app.listen() description
 * 
 * WHAT IS THIS CODE DOING?
*/
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// Creates a new instance of Google Passport Strategy
// Strategy needs clientID and Secret
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
