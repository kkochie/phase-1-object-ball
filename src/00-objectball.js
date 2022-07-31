function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1, 
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8, 
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11, 
                    slamDunks: 1 
                }
                
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15, 
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4, 
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            },
        }
   
    }
}

console.log(gameObject());

const games = gameObject()
const players = playersObject()
const teams = Object.values(games)

// put all players into one object
function playersObject() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

//takes argument of player's name and returns the number of points scored for that player
function numPointsScored(playerInput) {
   return players[playerInput].points
}
console.log("Number of points scored: ", numPointsScored('DeSagna Diop'))

//takes argument of player's name and returns the show size for that player
function shoeSize(playerInput) {
    return players[playerInput].shoe
}
console.log("Shoe size: ", shoeSize('DeSagna Diop'))

//takes argument of the team name and returns an array of that teams colors
function teamColors(teamName) {
    return findByTeamName(teamName).colors
}
console.log("Team colors: ", teamColors("Brooklyn Nets"))

function findByTeamName(teamName) {
    return teams.find(team => teamName === team.teamName)
}

//operates on the game object to return an array of team names
function teamNames() {
    return teams.map(team => team.teamName)
}
console.log("Teams: ", teamNames())

//takes in an argument of a team name and returns an array of the jersey numbers for that team
function playerNumbers(teamName) {
    
}
console.log("Jersey numbers: ", playerNumbers("Brooklyn Nets"))

//takes in an argument of a player's name and returns an object of that player's stats
function playerStats() {

}

//return the number of rebounds assoicated with the player that has the largest show size
function bigShoeRebounds() {

}

//which player has the most points?
function mostPointsScored() {

}

//which team has the most points?
function winningTeam() {

}

//what player has the longest name?
function playerWithLongestName() {

}

//returns true if the player with the longest name had the most steals
function doesLongNameStealATon() {

}