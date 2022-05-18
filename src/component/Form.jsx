import React, { Component } from "react";
import "./Style.css";
class Form extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    employees: [],
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleDepartmentChange = (event) => {
    this.setState({
      department: event.target.value,
    });
  };
  handleRatingChange = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

  handleButtonClick = (event) => {
    event.preventDefault();

    const tempObj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };

    const tempArr = this.state.employees;
    tempArr.push(tempObj);
    this.setState({ employees: tempArr });
  };

  render() {
    return (
      <div>
        <div className="formContainer">
          <form onSubmit={this.handleButtonClick}>
            <h1>Employee Feedback Form</h1>
            <div>
              <label className="label">Name :</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              ></input>
            </div>
            <br />
            <div>
              <lable className="label">Department :</lable>
              <input
                type="text"
                value={this.state.department}
                onChange={this.handleDepartmentChange}
              ></input>
            </div>
            <br />
            <div>
              <lable className="label">Rating :</lable>
              <input
                type="number"
                value={this.state.rating}
                onChange={this.handleRatingChange}
              ></input>
            </div>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <br />
        <div className="container">
          {this.state.employees.map((value, index) => {
            return (
              <div className="box">
                {index + 1}. Name : {value.name} | Department :
                {value.department} | Rating : {value.rating}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Form;
