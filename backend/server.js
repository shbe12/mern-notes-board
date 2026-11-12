import express from "express";

const app = express();

// Endpoint is a combination of URL and HTTP method, that lets client interact with a resource.
app.get("/api/notes", (req,res) => {
  res.status(200).send("you got 10 notes");
})

app.post("/api/notes", (req,res) =>{
  res.status(201).json({message:"note created successfully"});
})

app.put("/api/notes/:id", (req,res) =>{
  res.status(200).json({message:"note updated successfully"});
})


app.delete("/api/notes/:id", (req,res) =>{
  res.status(200).json({message:"note deleted successfully"});
})

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
