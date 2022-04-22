function gameObject(){ return {
    home:{
    teamName: "Brooklyn Nets",
    color: ["Black", "White"],
    players: {
        "Alan Anderson": {
            Number: 0,
           Shoe: 16,
            Points: 22,
            Rebounds: 12,
            Assists: 12,
            Steals: 3,
            Blocks: 1,
            Slam_Dunks: 1

        },
        "Reggie Evans": {
            Number: 30,
           Shoe: 14,
            Points: 12,
            Rebounds: 12,
            Assists: 12,
            Steals: 12,
            Blocks: 12,
            Slam_Dunks: 7

        },
        "Brook Lopez": {
            Number: 11,
           Shoe: 17,
            Points: 17,
            Rebounds: 19,
            Assists: 10,
            Steals: 3,
            Blocks: 1,
            Slam_Dunks: 15

        },
        "Mason Plumlee": {
            Number: 1,
           Shoe: 19,
            Points: 26,
            Rebounds: 12,
            Assists: 6,
            Steals: 3,
            Blocks: 8,
            Slam_Dunks: 5

        },
        "Jason Terry": {
            Number: 31,
           Shoe: 15,
            Points: 19,
            Rebounds: 2,
            Assists: 2,
            Steals: 4,
            Blocks: 11,
            Slam_Dunks: 1

        }

    }


}, 
away:{
    teamName: "Charlotte Hornets",
    color: ["Turquoise", "Purple"],
    players: {
        "Jeff Adrien": {
            Number: 4,
           Shoe: 18,
            Points: 10,
            Rebounds: 1,
            Assists: 1,
            Steals: 2,
            Blocks: 7,
            Slam_Dunks: 2

        },	 
        "Bismak Biyombo": {
            Number: 0,
           Shoe: 16,
            Points: 12,
            Rebounds: 4,
            Assists: 7,
            Steals: 7,
            Blocks: 15,
            Slam_Dunks: 10

        },	 
        "Ben Gordon": {
            Number: 8,
           Shoe: 15,
            Points: 33,
            Rebounds: 3,
            Assists: 2,
            Steals: 1,
            Blocks: 1,
            Slam_Dunks: 0

        },	 
        "DeSagna Diop": {
            Number: 2,
           Shoe: 14,
            Points: 24,
            Rebounds: 12,
            Assists: 12,
            Steals: 4,
            Blocks: 5,
            Slam_Dunks: 5

        },	 
        "Brendan Haywood": {
            Number: 33,
           Shoe: 15,
            Points: 6,
            Rebounds: 12,
            Assists: 12,
            Steals: 22,
            Blocks: 5,
            Slam_Dunks: 12

        }	 
    }


}
 } }
    

 const Players = () => {
    const game = gameObject();
    const homPlrs = game.home.players;
    const awayPlrs = game.away.players;
   return Object.assign(homPlrs, awayPlrs)}

//   THIS IS THE FIRST FUNCTION
const numPointsScored = (name) => {
    for (const PlayerName in Players()) {
        if (PlayerName === name) {
            return Players()[PlayerName].Points
        }
    }
  }

  // THIS IS THE SECOND FUNCTION
  const shoeSize = (name) => {
    for (const PlayerName in Players()) {
        if (PlayerName === name) {
            return Players()[PlayerName].Shoe
        }
    }
  }



  // THIS IS THE THIRD FUNCTION
 const teamColors = (team) => {
    const game = gameObject();
    const home = game.home.color;
    const away = game.away.color;
    if (team === game.home.teamName) {
        return home
    } else if (team === game.away.teamName) {
        return away
    }
    else{
        return undefined}
    }
 

     // THIS IS THE FOURTH FUNCTION
    const teamNames = () => {
        const game = gameObject();
        Names= []
        for (teams in game) {
            Names.push(game[teams].teamName)
        }
        return Names
      }

      // THIS IS THE FIFTH FUNCTION
      const playerNumbers = (team) => {
        const game = gameObject();
        const homPlrs = game.home.players;
        const awayPlrs = game.away.players;
        let JrNum = []
                if (team === game.home.teamName) {
                for (const PlayerName in homPlrs) {
                    JrNum.push(homPlrs[PlayerName].Number)
                }
            }
                else if (team === game.away.teamName) {
                    for (const PlayerName in awayPlrs) {
                        JrNum.push(awayPlrs[PlayerName].Number)
                    }
                }

                else{ JrNum = `No Such a Team !`}
        return JrNum
      }


      // THIS IS THE SIXTH FUNCTION
      const playerStats = (PlayerName) => {
      return Players()[PlayerName]
    }

    // THIS IS THE SEVENTH FUNCTION
    const bigShoeRebounds = () => {
        let maxShoe = ""
        let RebNum = ""
        let PlayerName = ""
      for(const player in  Players()){
          if (Players()[player].Shoe > maxShoe) {
              maxShoe = Players()[player].Shoe
              RebNum = Players()[player].Rebounds
                PlayerName = player

          }

      }
    return `The rebounds of the player with the biggest shoe size goes to "${PlayerName}"
with shoe size of "${maxShoe}" and "${RebNum}" rebounds`
    }

    // The BONUS SECTION

    //BONUS 1
    const mostPointsScored = () => {

        let maxPoints = 0
        let PlayerName = ""
        for(const player in  Players()){
            if (Players()[player].Points > maxPoints) {
                maxPoints = Players()[player].Points
                PlayerName = player

            }

        }
        return `The player with the most points is "${PlayerName}" with "${maxPoints}" points`
    }

    //BONUS 2
   const winningTeam = () => {
        const game = gameObject();
        const homPlrs = game.home.players;
        const awayPlrs = game.away.players;
        let homPts = []
        let awayPts = []
        for(const player in  homPlrs){
            homPts.push(homPlrs[player].Points)
        }
        for(const player in  awayPlrs){
            awayPts.push(awayPlrs[player].Points)
        }
        if (homPts.reduce((a, b) => a + b, 0) > awayPts.reduce((a, b) => a + b, 0)) {
            return game.home.teamName
        } else{ return game.away.teamName}
    }
    //BONUS 3
    const playerWithLongestName = () => {
        let maxName = ""
        for (const player in Players()) {
            if (player.length > maxName.length) {
                maxName = player
            }
        }
        return maxName}
    const LongestNameObj = () => {
        for (const player in Players()) {
            if (player === playerWithLongestName()) {
               return Players()[player]
            }
            else {continue}
        }
    }

        //SUPER BONUS
       const  doesLongNameStealATon = () => {
       for (const PlayerName in Players()) {
        if (Players()[PlayerName].Steals < LongestNameObj()["Steals"]) {
           return `This is ${true} The player with the longest name ,${playerWithLongestName()}, steals a ton of steals`
        }
        else {
            return `This is ${false} The player with the longest name ,${playerWithLongestName()}, DOESN'T steals a ton of steals`}
    }
       }


       // TEST SECTION
console.log(numPointsScored("Reggie Evans"));
 console.log(shoeSize("Mason Plumlee"));
 console.log(teamColors("Charlotte Hornets"));
 console.log(teamNames());
 console.log(playerNumbers("Charlotte Hornets"));
 console.log(playerStats("Brendan Haywood"));
 console.log(bigShoeRebounds());
 console.log(mostPointsScored());
 console.log(winningTeam());
 console.log(playerWithLongestName());
 console.log(doesLongNameStealATon());

