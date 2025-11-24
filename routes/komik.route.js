const komikController = require("../controllers/komik.controller");
const router = require("express").Router();
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), komikController.createKomik);

router.get("/", komikController.getAllKomiks);

router.get("/:id", komikController.getKomikById);

router.put("/:id", upload.single(), komikController.updateKomik);

router.delete("/:id", komikController.deleteKomik);

module.exports = router;
