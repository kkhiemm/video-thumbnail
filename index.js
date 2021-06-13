// dependencies
const AWS = require('aws-sdk');
const util = require('util');
const sharp = require('sharp');
var ffmpeg = require('fluent-ffmpeg');
var video = require('./video');

// get reference to S3 client
const s3 = new AWS.S3();

// Use the sharp module to resize the image and save in a buffer.
try {
	// var buffer = await sharp(origimage.Body).resize(width).toBuffer();

	const buffer = video.videoThumbs('VID20180213095930.mp4');
} catch (error) {
	console.log(error);
	return;
}

// Upload the thumbnail image to the destination bucket
// try {
// 	const destparams = {
// 		Bucket: dstBucket,
// 		Key: dstKey,
// 		Body: buffer,
// 		ContentType: "image"
// 	};

// 	const putResult = await s3.putObject(destparams).promise();

// } catch (error) {
// 	console.log(error);
// 	return;
// }

// console.log('Successfully resized ' + srcBucket + '/' + srcKey +
// 	' and uploaded to ' + dstBucket + '/' + dstKey);
