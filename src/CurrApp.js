import React from "react";

let count = "";
class CurrApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      currencyHave: "",
      currencyWant: "",
      result: "",
    };
    this.convertStart = this.convertStart.bind(this);
    this.typeAmount = this.typeAmount.bind(this);
  }
  currCheckHave = (e) => {
    this.setState({ currencyHave: e.target.value });
  };
  currCheckWant = (e) => {
    this.setState({ currencyWant: e.target.value });
  };
  typeAmount = (e) => {
    this.setState({ amount: e.target.value });
  };
  convertStart = (e) => {
    e.preventDefault();
    if (this.state.currencyHave === "BYN" && this.state.currencyWant === "USD") {
      count = this.state.amount / 2.5;
      this.setState({ result: count });
    } else if (this.state.currencyHave === "USD" && this.state.currencyWant === "BYN") {
      count = Math.round((this.state.amount * 2.3 * 1000) / 1000);
      this.setState({ result: count });
    }
  };
  render() {
    return (
      <div>
        <form>
          <label>
            введите сумму: <input onInput={this.typeAmount} type="text"></input>
          </label>
          <select onChange={this.currCheckHave} name="currency">
            <option label="" value="" />
            <option label="BYN" value="BYN" />
            <option label="USD" value="USD" />
          </select>
          <br></br>
          <br></br>

          <button onClick={this.convertStart}>конвертировать</button>
          <br></br>
          <br></br>

          <label>
            результат конвертации:<input type="text" readOnly="readonly" value={this.state.result}></input>
          </label>
          <select onChange={this.currCheckWant} name="currency">
            <option label="" value="" />
            <option label="BYN" value="BYN" />
            <option label="USD" value="USD" />
          </select>
        </form>
      </div>
    );
  }
}

export default CurrApp;
