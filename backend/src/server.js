import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


connectDB();
// Endpoint is a combination of URL and HTTP method, that lets client interact with a resource.

//middleware
app.use(express.json()); // this middleware parse JSON bodies: req.body
app.use(rateLimiter) // this middleware will limit the number of requests a client can make to the server in a given time frame
// a simple custom middleware to log the request method and URL
// app.use((req,res,next) => {
//   // console.log("We just got a new request");
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
