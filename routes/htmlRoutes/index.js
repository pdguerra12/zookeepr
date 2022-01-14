const path = require("path");
const router = require("express").Router();

// just like in animalRoutes.js, because the original api route is in server.js, we can no longer use the app route in the call. we need to switch it to router. i.e: router.get..
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/animals", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/animals.html"));
});

router.get("/zookeepers", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});

router.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
