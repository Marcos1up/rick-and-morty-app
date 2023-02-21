const { Router } = require("express");
const {
    getAllCharacter,
} = require("../controllers/getController/getAllCharacter");

const router = Router();

router.get("/characters", getAllCharacter);

module.exports = router;
