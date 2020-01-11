// Should require the node packages express and path

// Dependencies
const express = require(`express`);
const path = require(`path`);

// Express server setup
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require(`./app/routing/apiRoutes`)(app);
require(`./app/routing/htmlRoutes`)(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});