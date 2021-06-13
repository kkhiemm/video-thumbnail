var ffmpeg = require('fluent-ffmpeg');

exports.videoThumbs = (from, to) =>
    ffmpeg(from)
        // setup event handlers
        .on('filenames', function (filenames) {
            console.log('screenshots are ' + filenames.join(', '));
        })
        .on('end', function () {
            console.log('screenshots were saved');
        })
        .on('error', function (err) {
            console.log('an error happened: ' + err.message);
        })
        // take screenshot at predefined timemarks and size
        .takeScreenshots({ count: 1, timemarks: ['00:00:02.000'], size: '150x100' }, to);
        // TODO: toBuffer or return like ./thumbs/video1-thumb.jpg