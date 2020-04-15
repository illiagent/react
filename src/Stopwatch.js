import React from "react";
import "./Stopwatch.css";

let secA = 0;
let secB = 0;
let minA = 0;
let minB = 0;
let hoursA = 0;
let hoursB = 0;
let current = "";
let y = 0;
let i = 1;
let z = 0;
let milSecA = 0;
let milSecB = 0;
let milSecC = 0;

let lapsItems = [];

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "start",
      display: "00 : 00 : 00 : 000",
      conditionPause: { display: "none" },
      transformArrow: "",
      transformArrowSmall: "",
      lap: lapsItems,
    };
    this.isStart = this.isStart.bind(this);
    this.lapRec = this.lapRec.bind(this);
    this.isPause = this.isPause.bind(this);
    this.isStop = this.isStop.bind(this);
    this.isReset = this.isReset.bind(this);
  }

  count() {
    secA += 1;
    if (secA > 9) {
      secA = 0;
      secB += 1;
    } else if (secB > 5) {
      secB = 0;
      minA += 1;
    } else if (minA > 9) {
      minA = 0;
      minB += 1;
    } else if (minB > 9) {
      minB = 0;
      hoursA += 1;
    }
    y += 6;
    this.setState({ transformArrow: "rotate(" + `${y}` + "deg)" });
  }
  miliSeconds() {
    milSecA += 1;
    if (milSecA > 9) {
      milSecA = 0;
      milSecB += 1;
    } else if (milSecB > 9) {
      milSecB = 0;
      milSecC += 1;
    } else if (milSecC > 9) {
      milSecC = 0;
    }
    this.setState({ display: `${hoursB}${hoursA} : ${minB}${minA} : ${secB}${secA} : ${milSecA}${milSecB}${milSecC}` });
    current = `${hoursB}${hoursA} : ${minB}${minA}  : ${secB}${secA} : ${milSecA}${milSecB}${milSecC}`;
  }
  minCount() {
    z += 6;
    this.setState({ transformArrowSmall: "rotate(" + `${z}` + "deg)" });
  }

  isStart() {
    this.seconds = setInterval(() => this.count(), 1000);
    this.minutes = setInterval(() => this.minCount(), 50);
    this.mili = setInterval(() => this.miliSeconds(), 0.1);
    this.setState({
      conditionPause: { display: "inline-block" },
    });
    this.setState({
      conditionStart: { display: "none" },
    });
  }

  lapRec() {
    current = (
      <li>
        lap №{i} {current}{" "}
      </li>
    );
    lapsItems.push(current);
    this.setState({ lapsItems });
    let listItems = lapsItems.map((number) => <li>{number}</li>);
    console.log(listItems);
    i++;
  }

  isPause() {
    clearInterval(this.seconds);
    clearInterval(this.minutes);
    clearInterval(this.mili);

    this.setState({
      conditionStart: { display: "inline-block" },
      conditionPause: { display: "none" },
    });
    this.setState({ start: "continue" });
  }

  isStop() {
    this.setState({ start: "start" });

    this.setState({
      conditionPause: { display: "none" },
    });
    this.setState({
      conditionStart: { display: "inline-block" },
    });
    this.setState({ display: "00 : 00 : 00 : 000" });
    clearInterval(this.seconds);
    clearInterval(this.minutes);
    clearInterval(this.mili);

    current = "";
    this.setState({ transformArrowSmall: "rotate(0deg)" });

    this.setState({ transformArrow: "rotate(0deg)" });
    z = 0;
    y = 0;
    i = 1;
    secA = 0;
    secB = 0;
    minA = 0;
    minB = 0;
    hoursA = 0;
    hoursB = 0;
  }
  isReset() {
    lapsItems = [];
    this.setState({ lap: lapsItems });
    i = 1;
  }

  render() {
    return (
      <div className="Main">
        <div className="btns">
          <button style={this.state.conditionStart} onClick={this.isStart}>
            {this.state.start}
          </button>
          <button style={this.state.conditionPause} onClick={this.isPause}>
            pause
          </button>
        </div>
        <button className="stop" onClick={this.isStop}>
          stop
        </button>
        <div className="display">{this.state.display}</div>
        <button className="lapBtn" onClick={this.lapRec}>
          lap
        </button>
        <button className="lapReset" onClick={this.isReset}>
          Reset
        </button>
        <div className="lapsResult">
          <ul>{this.state.lap}</ul>
        </div>
        <div className="arrow" style={{ transform: this.state.transformArrow }}></div>
        <div className="arrow-small" style={{ transform: this.state.transformArrowSmall }}></div>
      </div>
    );
  }
}
export default Stopwatch;
