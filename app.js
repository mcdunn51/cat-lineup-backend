const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
//
// const connectDB = require("./config/dbConnect");
// const { logger } = require("./middleware/logger");
// const errorLogger = require("./middleware/errorLogger");
// const corsOptions = require("./config/corsOptions");
const PORT = 3500;

// connectDB();

// log requests
// app.use(logger);

// CORS
// app.use(cors(corsOptions));
app.use(cors())

// AUTH
// app.use("/api/auth", require("./routes/authRoutes"));

//IMAGE UPLOAD
app.use("/api/isthisacat", require("./routes/catImageRoutes"));

// app.use(errorLogger);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

