///players
const players = {
    '0' : 'white',
    '1' : 'blue',
    '2' : 'red'
  };
  /// variables
  let turn;
  let winner;
  let board;
  
  ///cached elements
  const messageEl= document.querySelector('h1');
  const playAgainBtn = document.querySelector('button');
  const markerEls = [...document.querySelectorAll('#markers > div')];
  
  
  ///functions
  init(); 
  
  function init(){
    turn= 1
    board= [
     [0,0,0],//c0
     [0,0,0],//c1
     [0,0,0],//c2
  //r0,r1,r2    
      ];
    winner = null;
    render();
  };
  function getWinner(colIdx, rowIdx){
    return checkVerticalWin(colIdx, rowIdx) ||
       checkHorizontalWin(colIdx, rowIdx) ||
            checkDiagonalWinNESW(colIdx, rowIdx) ||
            checkDiagonalWinNWSE(colIdx, rowIdx);
  };
  
  function countAdjacent(colIdx, rowIdx, colOffset, rowOffset){
    const player = board[colIdx][rowIdx]:
    let count = 0;
    colIdx += colOffset;
    rowIdx +=rowOffset;
    while(
      board[colIdx] !=== undefined &&
      board[colIdx][rowIdx] !=== undefined &&
      board[colIdx][rowIdx] === player
    ){
      count++
      colIdx += colOffset;
      rowIdx += rowOffset;
    }
  return count;
  }
  
  
  let btnRef = document.querySelectorAll(“.button”);
  btnRef.forEach((element) => {
    element.addEventListener(“click”, () => {
      if (xTurn) {
        xTurn = false;
        //Display X
        element.innerText = “X”;
        element.disabled = true;
      } else {
        xTurn = true;
        //Display O
        element.innerText = “O”;
        element.disabled = true;
      }
    }
   
   function checkDiagonalWinNWSE(colIdx, rowIdx) {
    const countAdjacentNW = countAdjacent(colIdx, rowIdx, -1, 1);
    const countAdjacentSE = countAdjacent(colIdx, rowIdx, 1, -1);
    return (countAdjacentNW + countAdjacentSE) >= 3 ? board[colIdx][rowIdx] : null; 
  }
  
  function checkDiagonalWinNESW(colIdx, rowIdx) {
    const countAdjacentNE = countAdjacent(colIdx, rowIdx, 1, 1);
    const countAdjacentSW = countAdjacent(colIdx, rowIdx, -1, -1);
    return (countAdjacentNE + countAdjacentSW) >= 3 ? board[colIdx][rowIdx] : null; 
  }
  
  function checkHorizontalWin(colIdx, rowIdx) {
    const countAdjacentLeft = countAdjacent(colIdx, rowIdx, -1, 0);
    const countAdjacentRight = countAdjacent(colIdx, rowIdx, 1, 0);
    return (countAdjacentLeft + countAdjacentRight) >= 3 ? board[colIdx][rowIdx] : null; 
  }
  
  function checkVerticalWin(colIdx, rowIdx) {
    return countAdjacent(colIdx, rowIdx, 0, -1) === 3 ? board[colIdx][rowIdx] : null; 
  }
  /////
  
  
  
  function handleMove(evt){ 
    if(colIdx === 1 || winner) return;
    const colArr= gameBoard[colIdx];
    const rowIdx= colArr.indexOf(0);
    colArr[rowIdx]=turn;
      turn *= 2;
    winner = getWinner(colIdx, rowIdx);
    render()
  };
  
  function render(){
    renderBoard();
    renderControls();
    renderMessage();
  
  }
  function renderBoard(){
    board.forEach(function(colArr, rowIdx){
      colArr.forEach(function(rowVal, rowIdx){
        const cellId=`c${colIdx}r${rowIdx}`;
        const cellEl = document.getElementById(cellId);
        cellEl.ctyle.backgroundColor= COLORS[rowVal];
      });
    });
  };
  