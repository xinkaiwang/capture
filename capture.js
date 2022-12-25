#!/usr/bin/env node

'use strict'

var shell = require("shelljs");
var jimp = require('jimp');

shell.exec("raspistill -o img.jpg -rot 180 -t 400")

var center = {
    x: 1046+180,
    y: 942+180
};
var size = {
    x: 380,
    y: 380
};

// open a file called "lenna.png"
jimp.read('img.jpg', (err, img) => {
    if (err) throw err;
    img
      .crop( center.x - size.x/2, center.y - size.y/2, size.x, size.y )
      .resize(256, 256) // resize
      .quality(90) // set JPEG quality
      .write('cropped.jpg'); // save
  });
