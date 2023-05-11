///   IPO-> INPUT, PROCESS AND OUTPUT   ///

///   Constants data that does NOT change   ///
  const solutions= [
    [0, 1, 2],/// horitzonal
    [3, 4, 5],/// horitzonal
    [6, 7, 8],/// horitzonal
    [0, 3, 6],/// vertical
    [1, 4, 7],/// vertical
    [2, 5, 8],/// vertical
    [0, 4, 8],/// diagnal
    [2, 4, 6],/// diagnol 
  ];

  const PLAYERS= {
    'null' : '',
    '1' : 'X',
    '-1' : 'O',
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
init();                                                   ///starts and resets the game
  
function init() {
  turn= 1;                                              /// X will start
  winner= false;                                       ///no winner currently
  gameboard = new Array(9).fill(null)                 /// create emtpy gameboard
  render();                                          /// updates the game dom new   Array(9).fill(null);
};


function handleClick(event) {
 const position = event.target.dataset.cube;
 if(gameboard[position] !== null) return;
 gameboard[position] = turn;
 turn *=-1;
 render();

};

function render() {
  squareEls.forEach(function(square, position) {
   square.textContent = PLAYERS [gameboard[position]];
  });
};


