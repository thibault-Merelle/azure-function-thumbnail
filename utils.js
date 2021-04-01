function initchecking() {
    return "init utils"
}

function imagetypecheck(image){
    if (image.files[0].type.match(/(bmp|jpeg|png|gif|tiff)/i)){
        return "image type accepted";
    } else {
        return "not a image, loading refused";
    }
}

function imagefilesize(image){
    return filesize(image);
    
}


module.exports = {
    initchecking,
    imagetypecheck,
    imagefilesize
};
  