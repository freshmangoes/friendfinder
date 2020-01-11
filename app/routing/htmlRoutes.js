/*
  Should have two routes:
    A default catch-all route that leads to home.html
    A GET route to /survey which should display the survey page
*/

const path = require(`path`);

module.exports = app => {
  app.get(`/survey`, (req, res) => {
    res.sendFile(path.join(__dirname + `/../public/survey.html`));
  });

  app.use((req, res) => {
    res.sendFile(path.join(__dirname + `/../public/home.html`));
  });
}