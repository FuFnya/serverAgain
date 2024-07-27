const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const diveRouter = require("./routes/diveRoutes");
const dive_sites_mapRouter = require("./routes/dive_sites_mapRoutes");
const pendings_divesRoutes = require("./routes/pendings_divesRoutes");
const articleRoutes = require("./routes/articleRoutes");

const app = express();
const port = process.env.PORT || 8000; // Use default port 3000 if PORT is not set

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

//1. midlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/dives", diveRouter);
app.use("/api/dive_sites_map", dive_sites_mapRouter);
app.use("/api/pendings_dives", pendings_divesRoutes);
app.use("/api/articles", articleRoutes);

module.exports = app;
