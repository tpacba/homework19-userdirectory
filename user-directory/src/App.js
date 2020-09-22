import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Buttons from './components/Buttons'
import API from "./utils/API";

class App extends React.Component {
  state = {
    results: []
  };

  compare_last = (a, b) => {
    if (a.name.last < b.name.last) {
      return -1;
    } else if (a.name.last > b.name.last) {
      return 1;
    } else {
      return 0;
    }
  }

  componentDidMount() {
    API.results()
      .then(response => {
        const results = response.data.results.sort(this.compare_last)
        this.setState({
          results: results
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  sortLastName = {
    forward: () => {
      const forwardResults = this.state.results.sort(this.compare_last);
      this.setState({
        results: forwardResults
      })
    },
    reverse: () => {
      const reverseResults = this.state.results.sort(this.compare_last).reverse();
      this.setState({
        results: reverseResults
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Buttons
          sortLastName={this.sortLastName}
        />
        <Title>Employee List</Title>
        <EmployeeCard
          results={this.state.results}
        />
      </Wrapper>
    );
  }
}

export default App;