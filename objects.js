const songMaker = {
	makeSongString: function() {
		return `"${song.title}" is from the album "${song.album}" by ${song.artist}`
	},
	makeSongCard: function () {
		return 	`<div class="song-card"> <h2></h2> </div>`
	},
};

let song1 = Object.create(songMaker);
song1.title = "Private Idaho";
song1.artist = "The B-52s";
console.log("song1", song1);

let song1 = Object.create(songMaker);
song2.title = "Shiny Happy People";
song2.artist = "REM";
console.log("song2", song2 );











// const song = {
// 	title: "Private Idaho",
// 	artist: "The B-52s",
// 	plays: 120,
// 	album: "Wild Planet",
// 	bandMembers: [
// 		{name: "Fred", roles: {vocals: "lead", instrument: null} },
// 		{name: "Cindy", roles: {vocals: "lead", instrument: "keyboard"} },
// 		{name: "Ricky", roles: {vocals: "background", instrument: "guitar"} }, 
// 		{name: "Keith", roles: {vocals: "null", instrument: "drums"} },
// 		{name: "Kate", roles: {vocals: "lead", instrument: null} }
// 	],

// }


// //var bandMembers

// const member = song.bandMembers;

// for (var i = 0; i < member.length; i++) {
// 	if ("lead" === member[i].roles.vocals) { 
// 		document.write(`"${member[i].name} " is a lead singer on " ${song.album}"`);
// 		console.log("blah",`"${member[i].name} " is a lead singer on " ${song.album}"`);
// 	} else if ("background" === member[i].roles.vocals) {
// 		document.write(`"${member[i].name}" is a background singer on "${song.album}"`);
// 		console.log("ha",`"${member[i].name} " is a background singer on " ${song.album}"`);
// 	} else {
// 		document.write(`"${member[i].name}" did not sing on "${song.album}"`);
// 		console.log("ka", `"${member[i].name} " did not sing on " ${song.album}"`); 
// 	};
// };


// // const vocalRole = member.roles.vocals;
// if (vocalRole) {
// 	console.log(`${member.name} was the ${vocalRole} singer on this track`);
// } else {
// 	console.log(`${member.name} did not sing on this track`);
// };




// console.log("fred's vocals", song.bandMembers[0].roles.vocals);

// song.albumCoverColor = "red";

// console.log("the artist", song["artist"] );

// const record = "album";
// console.log(song.makeSongString());