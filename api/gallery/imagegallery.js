require('dotenv').config();

const CLOUD_NAME = process.env.CLOUD_NAME;
const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;

const { Error } = require("mongoose");
const Image = require("../model/gallery");
const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET,
});

exports.addImage = async (req, res, next) => {
    const { image } = req.body
    try {
        cloudinary.v2.uploader.upload(image, { overwrite: true, invalidate: true, resource_type: "auto", folder: 'ahrelia' }, async (error, file) => {
            console.log(file.secure_url)
            await Image.create({
                image: file.secure_url,
            }).then(image =>
                console.log(image)
            )
        })
        res.status(200).json({
            message: "Image successfully added",
            // image,
        })
    } catch (error) {
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

exports.getAllImages = async (req, res, next) => {
    try {
        const gallery = await Image.find();
        res.status(200).json({
            message: "Image successfully fetched",
            gallery,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching image",
            error: err.message,
        });
    }
};

exports.getImagesById = async (req, res, next) => {
    const galleryId = req.params.id;

    try {
        const gallery = await Gallery.findById(galleryId);
        if (!gallery) {
            return res.status(404).json({
                message: "Image not found",
            });
        }

        res.status(200).json({
            message: "Image successfully fetched by ID",
            gallery,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error fetching image by ID",
            error: err.message,
        });
    }
};

exports.updateImage = async (req, res, next) => {
    const galleryId = req.params.id; // Assuming the blog ID is passed as a parameter in the request
    const { image } = req.body;

    try {
        const gallery = await Gallery.findByIdAndUpdate(
            galleryId,
            { image },
            { new: true } // To return the updated blog
        );

        if (!gallery) {
            return res.status(404).json({
                message: "Image not found",
            });
        }

        res.status(200).json({
            message: "Image successfully updated",
            gallery,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error updating image",
            error: err.message,
        });
    }
};

exports.deleteImage = async (req, res, next) => {
    const galleryId = req.params.id;
    try {
        const gallery = await Gallery.findByIdAndDelete(galleryId);

        if (!gallery) {
            return res.status(404).json({
                message: "Image not found",
            });
        }

        res.status(200).json({
            message: "Image successfully deleted",
            deletedGallery: gallery,
        });
    } catch (err) {
        res.status(500).json({
            message: "Error deleting image",
            error: err.message,
        });
    }
};