import "./App.css";

function App() {
  function randomGenerator() {
    const random = Math.floor(Math.random() * 101);
    if (random > 50) {
      return 0;
    } else {
      return 1;
    }
  }

  let n1 = randomGenerator();
  let n2 = randomGenerator();
  let n3 = randomGenerator();
  let n4 = randomGenerator();
  let n5 = randomGenerator();
  let n6 = randomGenerator();
  let n7 = randomGenerator();
  let n8 = randomGenerator();
  let n9 = randomGenerator();

  const boxes = [
    [n1, n2, n3],
    [n4, n5, n6],
    [n7, n8, n9],
  ];
  let won = false;
  function checkWinner() {
    //horizontal check
    for (let i = 0; i < 3; i++) {
      if (boxes[i][0] === boxes[i][1] && boxes[i][1] === boxes[i][2]) {
        won = true;
        return;
      }
    }

    //vertical check
    for (let i = 0; i < 3; i++) {
      if (boxes[0][i] === boxes[1][i] && boxes[1][i] === boxes[2][i]) {
        won = true;
        return;
      }
    }

    //diagonal check
    if (
      (boxes[0][0] === boxes[1][1] && boxes[1][1] === boxes[2][2]) ||
      (boxes[0][2] === boxes[1][1] && boxes[1][1] === boxes[2][0])
    ) {
      won = true;
      return;
    }
    //test
  }
  checkWinner();

  const resetHandler = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="row">
        <div>{boxes[0][0]}</div>
        <div>{boxes[0][1]}</div>
        <div>{boxes[0][2]}</div>
      </div>
      <div className="row">
        <div>{boxes[1][0]}</div>
        <div>{boxes[1][1]}</div>
        <div>{boxes[1][2]}</div>
      </div>
      <div className="row">
        <div>{boxes[2][0]}</div>
        <div>{boxes[2][1]}</div>
        <div>{boxes[2][2]}</div>
      </div>
      <div className="reset" onClick={resetHandler}>
        Reset
      </div>
      <div className="result">{won === true ? "Won" : "Lost"}</div>
    </div>
  );
}

export default App;
