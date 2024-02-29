const { Error } = require("mongoose");
const Review = require("../model/review")
const cloudinary = require('cloudinary');

CLOUD_NAME = "dp7niullu"
CLOUD_API_KEY = "947826175568299"
CLOUD_API_SECRET = "4gbmr2te7Fr08sDYHc5zos-A1Ng"

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
})

exports.addUserReview = async (req, res, next) => {
    const { header, comment, image, author, company } = req.body
    try {
        cloudinary.v2.uploader.upload(image, { overwrite: true, invalidate: true, resource_type: "auto", folder: 'ahrelia' }, async (error, file) => {
            console.log(file.secure_url)
            await Review.create({
                header,
                comment,
                image: file.secure_url,
                author,
                company
            }).then(review =>
                console.log(review)
            )
        })
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

function uploadImage(image) {
    cloudinary.v2.uploader.upload('data:image/jpeg;base64,' + image, { overwrite: true, invalidate: true, resource_type: "auto", folder: 'ahrelia' }, (error, file) => {
        console.log(file)
    })
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
            { header, comment, image, author, company },
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

