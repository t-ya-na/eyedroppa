// Return the pixel given the imageData and index.
function getPixel(imgData, index) {
  var i = index*4, d = imgData.data;
  return [d[i],d[i+1],d[i+2],d[i+3]] // [R,G,B,A]
}

// Return the pixel give the imageDate and the x, y coordinate.
function getPixelXY(imgData, x, y) {
  return getPixel(imgData, y*imgData.width+x);
}

// randomly choose MAX_PALETTE_SIZE coordinates.
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// samples from the given image and adds the palette to the div.
function addPalette(srcImage, paletteContainer) {
  // Create a canvas tag to hold the image.
  var cvs = document.createElement('canvas');
  var img = srcImage;

  // Get the image data
  cvs.width = img.width; cvs.height = img.height;
  var ctx = cvs.getContext("2d");
  ctx.drawImage(img,0,0,cvs.width,cvs.height);
  var idt = ctx.getImageData(0,0,cvs.width,cvs.height);

  var MAX_PALETTE_SIZE = 10;

  paletteContainer.empty();
  // Add the randomly chosen colors as div's to the html.
  for (var i = 0; i < MAX_PALETTE_SIZE; i++) {
    var x = getRandomArbitrary(0, img.width);
    var y = getRandomArbitrary(0, img.height);

    // clear the old palette.

    // Use JQuery to append the new div as the child.
    paletteContainer.append("<div " + 
      "style='display:inline-block;background-color:rgba(" + getPixelXY(idt, x, y) + ");" + 
      "height:50px; width:50px'></div>");
  }
}

