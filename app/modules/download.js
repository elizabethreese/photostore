/**
 * This module is used for downloading images from the server file system and providing
 * them to the client via a GET response.
 */

/**
* Include the File System module
*/
var fs = require('fs');

/**
 * Include the Path module
 */
var path = require('path');

/**
 * Expose the functions that we need in other files
 */
module.exports = {
    downloadImages: function (images) {
        var downloadedImages = [];

        // If there were image records in the database
        if (images.length > 0) {
            // Gather information and download each image
            images.forEach(image => {
                // Get the filepath
                filePath = image.dataValues.Path;
                // Get the file extention
                fileExtention = path.extname(filePath);
                // Add the image information to the array of downloaded images
                downloadedImages.push(
                    {
                        name: image.dataValues.Name,
                        extention: fileExtention,
                        baseName: path.basename(filePath, fileExtention),
                        base64img: encodeBase64(filePath)
                    }
                )
            })
        }
        // Return the array of downloaded images
        return downloadedImages;
    }
};

/**
 * Returns a Base64 string representation of an image contained in the file location
 *
 * @param file - Image file supplied by user
 * @returns Base64 string representation of the image file
 */
function encodeBase64(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    var base64img = new Buffer(bitmap).toString('base64');

    return base64img;
}