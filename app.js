// Import the express module
import express from "express";

// Create an instance of an Express application
const app = express();

// Enable static file serving
app.use(express.static("public"));

// allow the app to parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// create an array to store orders

// Define the port number where our server will listen
const PORT = 4000;

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get("/", (req, res) => {
  // Send a response to the client
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Start the server and make it listen on the port
// specified above
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
