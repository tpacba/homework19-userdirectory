import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import API from "./utils/API";

class App extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    API.results()
      .then(response => {
        this.setState({
          results: response.data.results
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <EmployeeCard
          results={this.state.results}
        />
      </Wrapper>
    );
  }
}

export default App;
