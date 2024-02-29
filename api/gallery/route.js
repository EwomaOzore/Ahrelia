const express = require("express");
const router = express.Router()
const { addImage, getAllImages, getImagesById, updateImage, deleteImage } = require("./imagegallery");
router.route("/add").post(addImage)
router.route("/all").get(getAllImages)
router.route("/:id").get(getImagesById)
router.route("/:id/update").put(updateImage)
router.route("/:id/delete").delete(deleteImage)
module.exports = router