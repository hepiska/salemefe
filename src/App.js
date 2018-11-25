import React, { Component } from "react"
import { Provider } from "react-redux"
import Pages from "pages"
import {
  BrowserRouter as Router,
} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Pages />
        </div>
      </Router>

    )
  }
}

export default App
