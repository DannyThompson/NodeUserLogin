let express = require('express');
let router = express.Router();

/* Get main page */
router.get('/', (req, res) => res.render('index'));

module.exports = router;