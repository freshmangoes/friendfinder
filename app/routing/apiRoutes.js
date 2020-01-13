let friendData = require(`../data/friends`);

const getMatch = (diffArr, possibleMatches) => {
	// sort the array of differences in ascending order
	diffArr = diffArr.sort((a, b) => a - b);

	// get the value to the key in the possibleMatches obj
	let bestMatch = possibleMatches[diffArr[0]];

	return bestMatch;
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

		// loops through friendData to get differences from each score
		for (let i = 0; i < friendData.length; i++) {
			let diff = 0;
			let friendScores = friendData[i].scores;

			// loops through current friendData index scores and compares them to user scores
			for (let i = 0; i < friendScores.length; i++) {
				diff += Math.abs(friendScores[i] - userScores[i]);
			}

			// pushes difference to an array to later be sorted
			diffArr.push(diff);
			// adds the differences as a key to a name in a hashmap
			possibleMatches[Number(diff)] = friendData[i].name;
		}

		// best possible match
		let findMatch = getMatch(diffArr, possibleMatches);

		// empty object for match data
		let match = {};

		// looping through the array to get the match data
		for (let i = 0; i < friendData.length; i++) {
			// compares match name to names in friendData
			if (friendData[i].name == findMatch) {
				match = {
					name: friendData[i].name,
					photo: friendData[i].photo
				};
			}
		}

		friendData.push(req.body);
		res.json(match);
	});
};
