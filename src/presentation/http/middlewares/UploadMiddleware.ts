import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, 'src/uploads/')
  },
  filename: function (_req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

const uploadMiddleware = multer({ storage })

export { uploadMiddleware }
