const path = require("path")
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// ROUTES
// const welcome = require("./routes/welcome");
const app = express();
app.set("view engine", "ejs");
s
// MIDDLEWARE
// Http Request Logger
app.use(morgan("dev"));

// Static Assets
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")))

// Cookie Parser
app.use(cookieParser());

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));

// Custom Middleware
app.use((request, response, next) => {
  const username = request.cookies.username;
  console.log(request.cookies);

  response.locals.username = null;

  if (username) {
    response.locals.username = username;
  }
  next();
});

app.use("/", welcome);

const DOMAIN = "localhost";
const PORT = 3000;

app.listen(PORT, DOMAIN, () => {
  console.log(`💻 Server listenning on http://${DOMAIN}:${PORT}`);
});
