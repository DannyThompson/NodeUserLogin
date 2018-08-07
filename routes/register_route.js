let express = require('express');
let router = express.Router();

/* Get registration page */
router.get('/register', (req, res) => res.render('registration/register'));

module.exports = router;