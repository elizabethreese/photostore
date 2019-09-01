/**
 * Include the File System module
 */
var fs = require('fs');

/**
 * Expose the functions that we need in other files
 */
module.exports = {
    uploadImages: function (files) {
        // If there are files uploaded in the form
        if (files.length > 0) {
            // Grab the first file
            var file = files[0];

            // Turn it into base64 data
            var encodedBase64 = encodeBase64(file);

            // Get a filepath
            var filePath = "./test/test.png"

            // Save the image on the server
            saveImage(encodedBase64, filePath);
        }
    }
};

/**
 * Returns a Base64 string representation of an image contained in the file location
 * 
 * @param file - File path to an image on a users computer
 * @returns A promise that will resolve with Base64 string data
 */
function encodeBase64(file) {
    // Read in the binary data
    //var bitmap = fs.readFileSync(file);

    // Convert binary data to base64 encoded string
    var encodedBase64 = new Buffer(file).toString("base64");

    return encodedBase64;
}

/**
 * Saves an image to the provided file path on the server that this is
 * running on
 * 
 * @param base64img - Base64 data of image uploaded by a user
 * @param filePath -  The path to save the image to
 */
function saveImage(base64img, filePath) {

    // Create a buffer for the data
    var buffer = new Buffer(base64img, 'base64');
    console.log(process.cwd());
    // Save the file to the server
    fs.writeFileSync(filePath, buffer);
}