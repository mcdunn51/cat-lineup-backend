const express = require("express");
const router = express.Router();
// const { checkSchema } = require("express-validator");
//
// const verifyJWT = require("../middleware/verifyJWT");
// const requestLimiter = require("../middleware/requestLimiter");
// const { jsonParser } = require("../middleware/parseRequestBody");
// const {
//     imageUploadSchema,
// } = require("./requestSchema/imageUploadSchema");
// const {
//     validateRequestSchema,
// } = require("../middleware/validateRequestSchema");
const {catImageUploadController} = require("../controllers/catImageController");

// router.use(verifyJWT);
router
    .route("/")
    .post(
        // requestLimiter,
        // jsonParser(),
        // checkSchema(loginRequestSchema), - maybe decode base64 image url and do some validation
        // validateRequestSchema,
        catImageUploadController);

module.exports = router;
