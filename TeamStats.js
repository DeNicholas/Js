const team = {
  _players:[{
    firstName: 'Pablo',
    lastName:' Sanchez',
    age:11,
  },
    {firstName: 'Nicholas',
    lastName: 'De',
    age:19
  },
    {
      firstName: 'John',
      lastName: 'Allen',
      age: 29,
    },
  ],
  _games:[
    {
      opponent: 'Broncos',
      teamPoints:42,
      opponentPoints: 27,
    },
    {
      opponent: 'playtypus',
      teamPoints: 50,
      opponentPoints: 70,
    },
    {
      opponent: 'Football dude',
      teamPoints: 69,
      opponentPoints: 420,
    },
  ],
  get games(){
    return this._games
  },
  get players(){
    return this._players
  },
  addPlayer(firstName, lastName, age) {
    const player= {
      firstName:firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints){
    const game={
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }
    this._games.push(game)
  }
};
team.addPlayer('Steph', 'Curry' , 28)
team.addPlayer('Lisa','Leslie', 44)
team.addPlayer('Bugs','Bunny', 76)
console.log(team._players)
team.addGame('babooshka', 70, 13)
team.addGame('super Saiyan', 12, 32)
team.addGame('Pro players', 1423,51234)
console.log(team._games)
