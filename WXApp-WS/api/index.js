const router = require('../node_modules/express').Router();

router.use('/lioenix', require('./users'));

module.exports = router;