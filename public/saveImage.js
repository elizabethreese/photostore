/**
 * Include the File System module
 */
var fs = require('fs');

/**
 * Expose the functions that we need in other files
 */
module.exports = {
    uploadImages: uploadImages()
};

function uploadImages() {
    // If there are files uploaded in the form
    if (document.querySelector('#image').files.length > 0) {
        // Grab the first file
        var file = document.querySelector('#image').files[0];

        // Turn it into base64 data
        // Get base64 data
        getBase64(file).then((base64img) => {
            // Create the appropriate filepath
            var filePath = "/Users/anthonygray/git/web-dev/projects/photolotus/test/test.png"
            // Save the image on the server
            saveImage(base64img);
        });
    }
}

/**
 * Returns a Base64 string representation of an image contained in the file location
 * 
 * @param file - File path to an image on a users computer
 * @returns A promise that will resolve with Base64 string data
 */
function getBase64(file) {
    var reader = new FileReader();
    return new Promise(function (resolve, reject) {
        reader.readAsDataURL(file);
        reader.onerror = function (error) {
            console.log('Error: ', error);
            reject(error);
        };
        reader.onload = function () {
            resolve(reader.result);
        };
    })
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

    // Save the file to the server
    fs.writeFile('filePath', buffer);
}