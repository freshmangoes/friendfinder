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

		// best possible match
		let findMatch = getMatch(diffArr, possibleMatches);
		let match = {};

		// looping through the array to get the match data
		for (let i = 0; i < friendData.length; i++) {
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
