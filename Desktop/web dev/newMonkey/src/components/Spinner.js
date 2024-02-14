import React, { Component } from "react";
import loading from "./loading.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <img src={loading} alt="img"/>
        {/* <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Zncm9kYTg1eGo4YWE0cG1qamJyYmdmdTk5Z2ZmeXppMHdoaTJ4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iCbBAJpfvm17G/giphy.gif" alt="img"/> */}
      </div>
    );
  }
}
