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

const getMatch = (diffArr, possibleMatches) => {
	// sort the array of differences in ascending order
	diffArr = diffArr.sort((a, b) => a - b);
	// console.log(diffArr[0]);

	// get the value to the key in the possibleMatches obj
	let bestMatch = possibleMatches[diffArr[0]];

	return bestMatch;
	// console.log(`Best Match: ${bestMatch}`);
};

module.exports = (app) => {
	app.get(`/api/friends`, (req, res) => {
		res.json(friendData);
	});

	// WIP, still have to develop matching logic
	app.post(`/api/friends`, (req, res) => {
		let possibleMatches = {};
		let diffArr = [];
		let userScores = req.body.scores;
		// console.log(`user scores: ${userScores}`);

		for (let i = 0; i < friendData.length; i++) {
			let diff = 0;
			let friendScores = friendData[i].scores;

			for (let i = 0; i < friendScores.length; i++) {
				diff += Math.abs(friendScores[i] - userScores[i]);
			}

			// console.log(`Diff: ${diff}`);
			diffArr.push(diff);
			possibleMatches[Number(diff)] = friendData[i].name;
		}

		// console.log(`diffArr ${diffArr}`);
		// console.log(
		// 	`Possible Matches: ${JSON.stringify(possibleMatches, null, 2)}`
		// );

		// best possible match
		let findMatch = getMatch(diffArr, possibleMatches);
		let match = {};

		// looping through the array to get the match data
		for (let i = 0; i < friendData.length; i++) {
			if (friendData[i].name == findMatch) {
				// console.log(`Found`);
				// console.log(
				// 	`friendData of match ${JSON.stringify(friendData[i], null, 2)}`
				// );
				match = {
					name: friendData[i].name,
					photo: friendData[i].photo
				};
			}
		}

		// console.log(`Match: ${JSON.stringify(match, null, 2)}`);

		friendData.push(req.body);
		res.json(match);
	});
};
