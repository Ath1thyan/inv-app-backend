const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv").config();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const connectDB = require("./database");

// Rest Object

const app = express();

// Database Connection

connectDB();

// Middlewares

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};
app.use(cors());
app.use(cors(corsOptions));
// app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
// app.get("/", (req, res) => {
//   res.send("Hello World");
// })
app.use("/api/products", require("./routes/productRoutes"));

app.use("/api/users", require("./routes/userRoutes"));

app.use("/api/bills", require("./routes/billsRoutes"));

// Listen

const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.listen(3005, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
