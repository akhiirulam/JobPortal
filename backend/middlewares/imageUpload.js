// cloudinaryMiddleware.js

const cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

const uploadImage = async (imagePath) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
    throw new Error('Image upload failed');
  }
};

module.exports = {
  uploadImage,
  getAssetInfo: async (publicId) => {
    const options = {
      colors: true,
    };

    try {
      const result = await cloudinary.api.resource(publicId, options);
      console.log(result);
      return result.colors;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve asset info');
    }
  },
  createImageTag: (publicId, ...colors) => {
    const [effectColor, backgroundColor] = colors;

    return cloudinary.image(publicId, {
      transformation: [
        { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
        { radius: 'max' },
        { effect: 'outline:10', color: effectColor },
        { background: backgroundColor },
      ],
    });
  },
};
