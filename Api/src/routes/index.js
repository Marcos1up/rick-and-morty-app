const { Router } = require("express");
const router = Router();

const {
    getAllCharacter,
} = require("../controllers/getController/getAllCharacter");
const {
    getAllEpisodes,
} = require("../controllers/getController/getAllEpisodes");
const {
    getCharacterById,
} = require("../controllers/idController/getIdCharacter");
const {
    postCharacter,
} = require("../controllers/postController/postCharacterController");

// rutas GET
router.get("/characters", getAllCharacter);
router.get("/episodes", getAllEpisodes);

router.get("/characters/:id", getCharacterById);

//rutas POST
router.post("/create", postCharacter);

//rutas PUT

//rutas DELETE

module.exports = router;
