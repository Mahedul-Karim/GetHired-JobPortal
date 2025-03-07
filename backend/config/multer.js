import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

export const uploadMiddleware=upload.fields([
  {
    name:'galleryItems'
  },
  {
    name:'avatar',
    maxCount:1
  },
  {
    name:'banner',
    maxCount:1
  }
])

export default upload;
