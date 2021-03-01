const express = require("express");
const app = express();
// middleware configurations
require("./configs/middleware.config")(app);
// mongodb
require("./configs/db.config")();
// session
require("./configs/session.config")(app);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

app.listen(process.env.PORT, () => console.log("server running"));
