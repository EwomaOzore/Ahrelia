const Review = require("../model/review")

exports.addUserReview = async (req, res, next) => {
    const { header, comment, author, company } = req.body
    try {
        res.status(200).json({
            message: "Review successfully created",
            //review,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}

exports.getAllUserReviews = async (req, res, next) => {
    try {
        const review = await Review.find();
        res.status(200).json({
            message: "Review successfully fetched",
            review,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching review",
            error: err.message,
        });
    }
};

exports.getReviewById = async (req, res, next) => {
    const reviewId = req.params.id;

    try {
        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({
                message: "Review not found",
            });
        }

        res.status(200).json({
            message: "Review successfully fetched by ID",
            review,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching review by ID",
            error: err.message,
        });
    }
};

exports.updateReview = async (req, res, next) => {
    const reviewId = req.params.id;
    const { header, comment, image, author, company } = req.body;

    try {
        const review = await Review.findByIdAndUpdate(
            reviewId,
            { header, comment, author, company },
            { new: true }
        );

        if (!review) {
            return res.status(404).json({
                message: "Review not found",
            });
        }

        res.status(200).json({
            message: "Review successfully updated",
            review,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error updating blog",
            error: err.message,
        });
    }
};

exports.deleteReview = async (req, res, next) => {
    const reviewId = req.params.id;

    try {
        const review = await Review.findByIdAndDelete(reviewId);

        if (!review) {
            return res.status(404).json({
                message: "Review not found",
            });
        }

        res.status(200).json({
            message: "Review successfully deleted",
            deletedReview: review,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting Review",
            error: err.message,
        });
    }
};