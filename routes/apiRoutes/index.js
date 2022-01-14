// Here we're employing Router as before, but this time we're having it use the module exported from animalRoutes.js. (Note that the .js extension is implied when supplying file names in require()).
const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes");

router.use(animalRoutes);
router.use(require("./zookeeperRoutes"));

module.exports = router;
