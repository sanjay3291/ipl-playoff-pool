const express = require("express");
const router = express.Router();
const controllers = require("../controllers/apicontrollers");

router.get("/sayHello", controllers.sayHello);

router.post("/submitData", controllers.submitData);

module.exports = router;
