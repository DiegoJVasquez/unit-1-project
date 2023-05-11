///   IPO-> INPUT, PROCESS AND OUTPUT   ///

///   Constants data that does NOT change   ///
  const solutions= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const PLAYERS= {
    'null' : '',
    '1' : 'X',
    '-1' : 'O',
  };

  /// variables - data that does change   ///
  let turn;
  let winner;
  let gameboard;
  
  ///   cached elements refrences   ///
  const gameboardEl = document.getElementById('gameboard');
  const squareEls =document.querySelectorAll('.square');
  const messageEl= document.querySelector('h1');
  const buttonEl = document.querySelector('.button');

///   EVENT LISTENER   ///
gameboardEl.addEventListener('click', handleClick);
buttonEl.addEventListener('click', init);

 ///   functions   ///
init(); 
  
function init() {
  turn= 1;                                              /// X will start
  winner= false;                                       ///no winner currently
  gameboard = new Array(9).fill(null);                /// create emtpy gameboard
  render();                                          /// updates the game dom
};


function handleClick(event) {
 console.log(event.target);
};

function render() {
  squareEls.forEach(function(square, position) {
   square.textContent = PLAYERS [gameboard[position]];
  });
};


