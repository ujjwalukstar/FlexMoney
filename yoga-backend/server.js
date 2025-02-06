const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const enrollRoutes = require("./routes/enrollRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const _dirname = path.resolve();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/enroll", enrollRoutes);

// Serve frontend
app.use(express.static(path.join(_dirname, "/yoga-frontend/build")));
app.get('*', (_, res) => {
  res.sendFile(path.resolve(_dirname, "yoga-frontend", "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
