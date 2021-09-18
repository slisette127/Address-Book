import React, { Component } from "react";
import { Users } from "./components/Users"
import './App.css';

const URL = "https://randomuser.me/api?results=25"

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }


  async componentDidMount() {
    let response = await fetch(URL)
    let json = await response.json()
    let { results } = json;
    console.log(results)

      this.setState({
        users: results
      })

  }

    componentDidUpdate() {
      console.log("Updated", this.state.users)
    }

  render() {
    return (
      <div className="App">
        <Users people={this.state.users}/>
      </div>
     );

  }
}

//export default App;
