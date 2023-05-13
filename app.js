///   Constants data that does NOT change   ///
  const solutions= [
    [0, 1, 2],/// horitzonal
    [3, 4, 5],  /// horitzonal
    [6, 7, 8],   /// horitzonal
    [0, 3, 6],    /// vertical
    [1, 4, 7],      /// vertical
    [2, 5, 8],    /// vertical
    [0, 4, 8],  /// diagnal
    [2, 4, 6],/// diagnol 
  ];

  const PLAYERS= {
    'null' : '',
    '1' : 'X',                                                                            ///player 1 is X
    '-1' : 'O',                                                                          ///player 2 is O
  };

  /// variables - data that does change   ///
  let turn, winner, gameboard;
  
  ///   cached elements refrences   ///
  const gameboardEl = document.getElementById('gameboard');
  const squareEls = document.querySelectorAll('.square');
  const messageEl = document.querySelector('h1');
  const buttonEl = document.querySelector('button');

///   EVENT LISTENER   ///
gameboardEl.addEventListener('click', handleClick);
buttonEl.addEventListener('click', init);

 ///   functions   ///
init();                                                                            ///starts and resets the game
  
function init() {
  turn= 1;                                                                       /// X will start
  winner= false;                                                                ///no winner currently
  gameboard = new Array(9).fill(null)                                          /// create emtpy gameboard
  render();                                                                   /// updates the game dom 
};

function getWinner(){
for(let i = 0; i < solutions.length; i++) {                                 ///checks solutions array for possible wins
  if(Math.abs(gameboard[solutions[i][0]] +                                 ///checks first value in first array in the solutions 
              gameboard[solutions[i][1]] +                                /// & compares it to the value put in the gameboard cube by player
              gameboard[solutions[i][2]]) ===3){                         ///checks and adds all cubes absolute values
                return gameboard[solutions[i][0]];                      ///which is either 1 or -1 and checks if it adds to 3
              };                                                       /// returns winner
  };
 if(gameboard.includes(null)) return false;                           ///if no solution detected, return no winner or Tie
 return 'T';
};

function handleClick(event) {
 const position = event.target.dataset.cube;      
 if(winner || gameboard[position]) return;                                     ///stops overlapping on cubes
 gameboard[position] = turn;
 turn *=-1;
 winner = getWinner();
 render();
};

function render() {
  squareEls.forEach(function(square, position) {                              ///funtion to show x's and o's 
   square.textContent = PLAYERS [gameboard[position]];                       
  });
  if(!winner) {                                                               ///From here below updates the headers
  messageEl.textContent= `Players ${PLAYERS[turn]}'s turn`;
 } else if(winner === 'T') {
  messageEl.textContent = 'Tie Game!! Play Again!';
 } else {
  messageEl.textContent = `Player ${PLAYERS[winner]} Wins! Congradulations!!`;      
 }
};


