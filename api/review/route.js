const express = require("express");
const router = express.Router()
const { addUserReview, getAllUserReviews, getReviewById, updateReview, deleteReview } = require("./userreview");
router.route("/add").post(addUserReview)
router.route("/all").get(getAllUserReviews)
router.route("/:id").get(getReviewById)
router.route("/:id/update").put(updateReview)
router.route("/:id/delete").delete(deleteReview)
module.exports = router