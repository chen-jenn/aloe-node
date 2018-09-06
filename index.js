const path = require("path")
const express = require("express");
const morgan = require("morgan"); //http request logger
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const five = require("johnny-five");
// const board = new five.Board();
//
// board.on('ready', function() {
//   let led = new five.Led(13); // pin 13
//   led.blink(300); // 500ms interval
// });

// ROUTES
const welcome = require("./routes/welcome");
const app = express();
app.set("view engine", "ejs"); //Tells the app where to find your view pages

// MIDDLEWARE
app.use(morgan("dev"));

// Static Assets
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")))

// Cookie Parser
app.use(cookieParser());

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));

// Adding routes to your app
app.use("/", welcome);


//Server setup
const DOMAIN = "localhost";
const PORT = 3000;

app.listen(PORT, DOMAIN, () => {
  console.log(`💻 Server listenning on http://${DOMAIN}:${PORT}`);
});
