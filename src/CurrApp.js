// import React, { Component } from "react";

// const USD_TO_BYN = 2.2;
// const EUR_TO_BYN = 2.6;
// const USD_TO_EUR = 1.1;

// function convert(amount, currencyFrom, currencyTo) {
//   switch (`${currencyFrom}/${currencyTo}`) {
//     case "usd/byn":
//       return amount * USD_TO_BYN;
//     case "eur/byn":
//       return amount * EUR_TO_BYN;
//     case "eur/usd":
//       return amount * USD_TO_EUR;
//     case "byn/usd":
//       return amount / USD_TO_BYN;
//     case "usd/eur":
//       return amount / EUR_TO_BYN;
//     case "byn/eur":
//       return amount / EUR_TO_BYN;
//     default:
//       return amount;
//   }
// }

// function tryConvert(amount, currencyFrom, currencyTo) {
//   const input = parseFloat(amount);
//   if (Number.isNaN(input)) {
//     return "";
//   }
//   const output = convert(input, currencyFrom, currencyTo);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
// export default class Conversion extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { amount: "", currency: "byn" };
//   }

//   handleAmountChange = (amount, currency) => {
//     this.setState({ amount, currency });
//   };

//   render() {
//     const { amount, currency } = this.state;
//     const bynAmoun = tryConvert(amount, currency, "byn");
//     const usdAmoun = tryConvert(amount, currency, "usd");
//     const eurAmoun = tryConvert(amount, currency, "eur");
//     return (
//       <div>
//         <CurrencyInput currency="byn" amount={bynAmoun} onAmountChange={this.handleAmountChange} />
//         <CurrencyInput currency="usd" amount={usdAmoun} onAmountChange={this.handleAmountChange} />
//         <CurrencyInput currency="eur" amount={eurAmoun} onAmountChange={this.handleAmountChange} />
//       </div>
//     );
//   }
// }

// function CurrencyInput(props) {
//   const { amount, currency, onAmountChange } = props;

//   function handleChange(e) {
//     onAmountChange(e.target.value, currency);
//   }
//   return (
//     <fieldset>
//       <legend>Введите сумму в {currency.toUpperCase()}:</legend>
//       <input type="text" value={amount} onChange={handleChange} />
//     </fieldset>
//   );
// }

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
