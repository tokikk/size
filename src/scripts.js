const sharp = require('sharp')

const resizeMode = {
    Absolute: 1,
    AbsoluteWidth: 2,
    AbsoluteHeight: 3,
    Percentage: 4
}

function resize(path, mode, hval, wval) {
    const meta = sharp(path).metadata()

    switch (mode) {
        case 1:
            sharp(path).resize(hval, wval);
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            sharp(path).resize(meta.height * hval, meta.width * wval);
            break;
        default:
            break;
    }

}