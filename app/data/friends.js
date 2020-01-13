// Should save your application's data inside of /app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below:

/*
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[5, 1, 4, 4, 5, 1, 2,5, 4, 1]
  }
*/

let friendsArray = [
	{
		name: `Corey`,
		photo: `https://www.fillmurray.com/140/200`,
		scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	},

	{
		name: `Jared`,
		photo: `https://www.fillmurray.com/140/200`,
		scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
	},

	{
		name: `Sydney`,
		photo: `https://www.fillmurray.com/140/200`,
		scores: [2, 2, 2, 4, 5, 1, 2, 5, 4, 1]
	},

	{
		name: `Jim`,
		photo: `https://www.fillmurray.com/140/200`,
		scores: [3, 2, 3, 2, 3, 2, 3, 2, 3, 2]
	}
];

module.exports = friendsArray;
