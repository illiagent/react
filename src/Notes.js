import React from "react";
let notes = [];
let a = "";
let b = "";
let c = "";
let finder = "";

const styles = {
  backgroundColor: "yellow",
  margin: "20px",
  padding: "10px",
  fontStyle: "italic",
  fontSize: "10px",
  fontWeight: "200",
  overflowWrap: "break-word",
  maxWidth: "150px",
};

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesToRender: "",
      arr: notes,
      match: "",
    };
  }

  checkNote = (e) => {
    this.setState({ notesToRender: e.target.value });
  };

  renderNote = (e) => {
    notes.push(this.state.notesToRender);
    a = notes.map(function (items, i) {
      return (
        <div style={styles} key={i}>
          {items}
        </div>
      );
    });
    c = a;
    this.setState({ arr: c });
  };

  isFind = (e) => {
    this.setState({ arr: c });
    if (e.target.value) {
      finder = notes.filter((word) => word.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1);
      if (finder.length === 0) {
        this.setState({ arr: "заметок не найдено" });
      } else {
        b = finder.map(function (items, i) {
          return (
            <div style={styles} key={i}>
              {items}
            </div>
          );
        });
        finder = b;
        this.setState({ arr: finder });
      }
    }
  };
  render() {
    return (
      <div>
        <textarea onInput={this.checkNote}></textarea>
        <button onClick={this.renderNote}>добавить</button>
        <br></br>
        <input type="search" placeholder="введите запрос" onChange={this.isFind} onFocus={this.isFocus}></input>
        <br></br>

        <div style={{ display: "flex", flexWrap: "wrap", width: "500px" }}>{this.state.arr}</div>

        <br></br>

        <div style={{ display: "flex", flexWrap: "wrap", width: "500px" }}>{this.state.match}</div>
      </div>
    );
  }
}

export default Notes;
// notes.push(e.target.value);
