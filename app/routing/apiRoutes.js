/* Should contain two routes: A GET route with the url /api/friends
    Will be used to display a JSON of all possible friends
    A POST route to /api/friends
          This will be used to handle all incoming survey results. This route will also be used to handle the compatibility logic.
*/

/* Determine the user's most compatible friend using the following as a
   guide:
    - Convert each user's results into a simple array of numbrs
    - Compare the difference between current user's scores against those from another user
    - Add up the differences to calculate the totalDifference
    - Remember to use absolute values of the differences
    - The closest match will be the user with the least amount of difference
    - Once you've found the current user's most compatible friend, display the result as a modal pop-up
    - The modal should display both the name and picture of the closest match
*/

let friendData = require(`../data/friends`);

module.exports = app => {
    app.get(`/api/friends`, (req, res) => {
        res.json(friendData);
    });

    // WIP, still have to develop matching logic 
    app.post(`/api/friends`, (req, res) => {
        friendData.push(req.body);
        res.json(true);
    });
}
