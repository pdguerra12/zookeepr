const router = require("express").Router();
const {
	filterByQuery,
	findById,
	createNewAnimal,
	validateAnimal,
} = require("../../lib/animals");
const { animals } = require("../../data/animals");

// animal API routes moved from server.js and because they were moved, the route needs to be changed from "/api/animals" to "/animals"
// furthermore, because the original api route is in server.js, we can no longer use the app route in the call. we need to switch it to router. i.e: router.get...
router.get("/animals", (req, res) => {
	let results = animals;
	if (req.query) {
		results = filterByQuery(req.query, results);
	}
	res.json(results);
});

router.get("/animals/:id", (req, res) => {
	const result = findById(req.params.id, animals);
	if (result) {
		res.json(result);
	} else {
		res.send(404);
	}
});

router.post("/animals", (req, res) => {
	// set id based on what the next index of the array will be
	req.body.id = animals.length.toString();

	// if any data in req.body is incorrect, send 400 error back
	if (!validateAnimal(req.body)) {
		res.status(400).send("The animal is not properly formatted.");
	} else {
		const animal = createNewAnimal(req.body, animals);
		res.json(animal);
	}
});

// app.post("/api/animals", (req, res) => {
// 	// set id based on what the next index of the array will be
// 	req.body.id = animals.length.toString();

// 	// add animal to json file and animals array in this function
// 	const animal = createNewAnimal(req.body, animals);

// 	res.json(animal);
// });

// app.post("/api/animals", (req, res) => {
// 	// set id based on what the next index of the array will be
// 	req.body.id = animals.length.toString();

// 	res.json(req.body);
// });

// app.post("/api/animals", (req, res) => {
// 	// req.body is where our incoming content will be
// 	console.log(req.body);
// 	res.json(req.body);
// });

module.exports = router;
