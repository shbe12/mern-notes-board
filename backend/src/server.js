import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
const app = express();

app.use("/api/notes", notesRoutes);

// Endpoint is a combination of URL and HTTP method, that lets client interact with a resource.


app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
