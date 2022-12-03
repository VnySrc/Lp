const multer = require('multer')
const path = require('path')

const multerConfig = {
    multerPath: path.resolve('src', 'checklistPublic', 'temp'),
}

const uploadMiddlware = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve('src', 'checklistPublic', 'temp'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString()+'-'+ file.originalname)
        }
    }),
    fileFilter: (req, file, cb) => {
        const allowedExtensions = ['image/png', 'image/pjpeg', 'image/jpg', 'image/jpeg']

        if (allowedExtensions.includes(file.mimetype)) {
            return cb(null, true)
        }else {
            return cb(null, false)
        }
    }
})

module.exports = { uploadMiddlware, multerConfig }