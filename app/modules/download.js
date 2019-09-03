/**
 * This module is used for downloading images from the server file system and providing
 * them to the client via a GET response.
 */

/**
* Include the File System module
*/
var fs = require('fs');

/**
 * Expose the functions that we need in other files
 */
module.exports = {
    downloadImages: function (filePaths) {
        console.log("Downloading images for ya user hehe");
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