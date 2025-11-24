const router = require('express').Router();
const komikRoutes = require('./komik.route');

// Mount komik routes at /komiks
router.use('/komiks', komikRoutes);

module.exports = router;