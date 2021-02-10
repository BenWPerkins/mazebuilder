import React, { Component } from "react";
import "./App.css";

class Building extends Component {
  constructor(props) {
    super(props);
    var superpath = [];
    this.state = {
      path: superpath,
      pathX: [0],
      pathY: [0],
    };
  }

  renderSquare(x, y) {
    var { pathX, pathY } = this.state;
    function shuffle(arry) {
      arry.sort(() => Math.random() - 0.5);
    }
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    var z = randomNumber(1, 15);
    //console.log("square" + z);
    var rid = "square" + z;
    var bid = "b1";
    var bad = "bplus";
    //console.log({ rid });
    var i = null;
    for (i = 0; i < pathX.length; i++) {
      if (x == pathX[i] && y == pathY[i]) {
        return <button class={bad} codeX={x} codeY={y}></button>;
      }
    }
    return <button class={bid} codeX={x} codeY={y}></button>;
  }

  renderGreen(x, y) {
    return <button id="squareGreen" codeX={x} codeY={y}></button>;
  }

  pathgenerator() {
    var { pathX, pathY } = this.state;
    //new path = { ex: [0], wy: [0] };
    var ex = pathX;
    var wy = pathY;
    var nonpath = [];
    //  console.log({ pathX });
    //  console.log({ pathY });
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    console.log(pathX.length + "hi length");
    var checker = 0;
    var i = null;

    function pastDirection(x1, x2, y1, y2) {
      if (x1 == x2 && y1 > y2) {
        return 1;
        //down
      } else if (x1 == x2 && y1 < y2) {
        return 2;
        //up
      } else if (x1 > x2 && y1 == y2) {
        return 3;
        //right
      } else if (x1 < x2 && y1 == y2) {
        return 4;
        //left
      }
    }
    var directionvar = pastDirection(
      pathX[pathX.length - 1],
      pathX[pathX.length - 2],
      pathY[pathY.length - 1],
      pathY[pathY.length - 2]
    );
    console.log(directionvar + "direction?");

    if (pathX.length == 1) {
      var chooser = randomNumber(1, 3);
      //   console.log(chooser);
      if (chooser == 1) {
        ex.push(1);
        ex.push(2);
        wy.push(0);
        wy.push(0);
      } else if (chooser == 2) {
        ex.push(0);
        ex.push(0);
        wy.push(1);
        wy.push(2);
      } else if (chooser == 3) {
        //  console.log("wall");
      }
    } else if (pathX[pathX.length - 1] == 0 && directionvar == 1) {
      console.log("fun");
      //right
      ex.push(ex[ex.length - 1] + 1);
      ex.push(ex[ex.length - 1] + 1);
      wy.push(wy[wy.length - 1]);
      wy.push(wy[wy.length - 1]);
    } else if (pathX[pathX.length - 1] == 0 && directionvar == 4) {
      console.log("more fun");
      //down
      ex.push(ex[ex.length - 1]);
      ex.push(ex[ex.length - 1]);
      wy.push(wy[wy.length - 1] + 1);
      wy.push(wy[wy.length - 1] + 1);
    } else if (pathY[pathY.length - 1] == 0 && directionvar == 3) {
      console.log("more fun");
      //down
      ex.push(ex[ex.length - 1]);
      ex.push(ex[ex.length - 1]);
      wy.push(wy[wy.length - 1] + 1);
      wy.push(wy[wy.length - 1] + 1);
    } else if (pathY[pathY.length - 1] == 0 && directionvar == 2) {
      console.log("fun");
      //right
      ex.push(ex[ex.length - 1] + 1);
      ex.push(ex[ex.length - 1] + 1);
      wy.push(wy[wy.length - 1]);
      wy.push(wy[wy.length - 1]);
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 2 &&
      pathX[pathX.length - 1] > 0 &&
      pathY[pathY.length - 1] > 0
      //down detection
    ) {
      var chooser = randomNumber(1, 4);
      //  console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      } else if (chooser == 3) {
        console.log("special");
        //left
        ex.push(ex[ex.length - 1] - 1);
        ex.push(ex[ex.length - 1] - 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      }
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 1
      //up detection
    ) {
      var chooser = randomNumber(1, 4);
      //  console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //up
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] - 1);
        wy.push(wy[wy.length - 1] - 1);
      } else if (chooser == 3) {
        console.log("special");
        //left
        ex.push(ex[ex.length - 1] - 1);
        ex.push(ex[ex.length - 1] - 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      }
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 3
      //right detection
    ) {
      var chooser = randomNumber(1, 4);
      //    console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //up
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] - 1);
        wy.push(wy[wy.length - 1] - 1);
      } else if (chooser == 3) {
        console.log("special");
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      }
    } else if (
      pathX.length >= 3 &&
      pathX[pathX.length - 1] < 8 &&
      pathY[pathY.length - 1] < 8 &&
      directionvar == 4
      //left detection
    ) {
      var chooser = randomNumber(1, 4);
      //    console.log(chooser);
      if (chooser == 1) {
        //left
        ex.push(ex[ex.length - 1] - 1);
        ex.push(ex[ex.length - 1] - 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //up
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] - 1);
        wy.push(wy[wy.length - 1] - 1);
      } else if (chooser == 3) {
        console.log("special");
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      }
    } else if (pathX.length == 20) {
      var chooser = randomNumber(1, 3);
      //    console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      } else if (chooser == 3) {
        //     console.log("wall");
      }
    } else if (pathX.length == 21) {
      var chooser = randomNumber(1, 3);
      console.log(chooser);
      if (chooser == 1) {
        //right
        ex.push(ex[ex.length - 1] + 1);
        ex.push(ex[ex.length - 1] + 1);
        wy.push(wy[wy.length - 1]);
        wy.push(wy[wy.length - 1]);
      } else if (chooser == 2) {
        //down
        ex.push(ex[ex.length - 1]);
        ex.push(ex[ex.length - 1]);
        wy.push(wy[wy.length - 1] + 1);
        wy.push(wy[wy.length - 1] + 1);
      } else if (chooser == 3) {
        console.log("wall");
      }
    }

    this.setState((state) => {
      return { pathX: ex, pathY: wy };
    });
    //  console.log(ex);
    this.forceUpdate();
  }

  render() {
    const elementS = [];
    const elementZ = [];
    const viewSize = this.props.sizeValue;

    var x;
    var y;
    for (y = 0; y < viewSize; y++) {
      for (x = 0; x < viewSize; x++) {
        elementS.push(<o>{this.renderSquare(x, y)}</o>);
      }
      elementZ.push(
        <div className="newLine">
          {elementS.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </div>
      );
      for (x = 0; x < viewSize; x++) {
        elementS.pop();
      }
    }
    return (
      <div className="entireThing">
        <div>
          {elementZ.map((value, index) => {
            return <span key={index}>{value}</span>;
          })}
        </div>
        <button onClick={() => this.pathgenerator()}>
          Click to generate path
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
    };
  }
  enterCount() {
    console.log("hello");
    var zvalue = document.getElementById("sizeHere").value;
    console.log(zvalue);
    this.setState((state) => {
      return { count: zvalue };
    });
  }

  render() {
    var { count } = this.state;

    const inputBox = (
      <div>
        <form>
          <input type="number" class="button" id="sizeHere"></input>
          <button
            type="button"
            class="button"
            onClick={() => this.enterCount()}
          >
            ENTER
          </button>
          10 PRINT CHR$ (205.5 + RND (1)); : GOTO 10
        </form>
      </div>
    );
    return (
      <div>
        <div className="HeaderSpot">{inputBox}</div>
        <Building sizeValue={count} />
      </div>
    );
  }
}

export default App;
