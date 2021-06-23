const router = require("express").Router();
const controller = require("../controllers/siteControllers");

router.get("/admin", controller.getAdminInfo);

module.exports = router;
