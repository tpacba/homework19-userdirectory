import React from 'react';
import Search from './components/Search';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Buttons from './components/Buttons';
import Dropdown from './components/Dropdown'
import API from "./utils/API";

class App extends React.Component {

  // Create two states "results" (to show all results) and "filterResults" (to show filtered results)
  // The two states are used later for conditional rendering
  state = {
    results: [],
    filterResults: []
  };

  componentDidMount() {
    API.results()
      .then(response => {

        // Sort the results according to last name initially and save to state.result
        // Scroll to bottom to see function "compare_last"
        const results = response.data.results.sort(compare_last)
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
      const forwardResults = this.state.results.sort(compare_last);
      const forwardFilterResults = this.state.filterResults.sort(compare_last);
      this.setState({
        results: forwardResults,
        filterResults: forwardFilterResults
      })
    },
    reverse: () => {
      const reverseResults = this.state.results.sort(compare_last).reverse();
      const reverseFilterResults = this.state.filterResults.sort(compare_last).reverse();
      this.setState({
        results: reverseResults,
        filterResults: reverseFilterResults
      })
    }
  }

  filterByState = (event) => {
    event.preventDefault();

    // Filter by state by matching the state of each result to input value, then set filtered results to state.filterResults
    // See ./Dropdown/index.js how dropwdown input value works
    const filterResults = this.state.results.filter(item => item.location.state === event.target.value);
    if (filterResults.length === 0) {
      alert("No matches!");
    }  
    this.setState({
      filterResults: filterResults
    })
  }

  searchByName = (event) => {
    event.preventDefault();
    let search = event.target.value.toLowerCase();

    // When user begins typing a name, filter through the state.results array
    // Use regular expression to test if what user is inputting is within the fullName string
    if (search.length > 0) {
      const filterResults = this.state.results.filter(item => {
        const fullName = (item.name.first + " " + item.name.last).toLowerCase();
        return RegExp(`${search}*`).test(fullName)
      })
      if (filterResults.length === 0) {
        alert("No matches!");
      }
      this.setState({
        filterResults: filterResults
      })
    }
  }

  render() {

    // Conditional rendering whether to display results or filterResults
    let card;
    if (this.state.filterResults.length > 0) {
      card = <EmployeeCard
      results={this.state.filterResults}
      />
    } else {
      card = <EmployeeCard
      results={this.state.results}
      />
    }

    return (
      <Wrapper>
        <Title>User Directory</Title>
        <Buttons
          sortLastName={this.sortLastName}
        />
        <Dropdown 
        filterByState={this.filterByState}/>
        <Search 
        searchByName={this.searchByName}/>
        {card}
      </Wrapper>
    );
  }
}

export default App;

// Used for sort function to compare each item and return 0, -1, 1 which determines if it's placed ahead or behind within the array
// Check out https://www.educative.io/edpresso/how-to-sort-an-array-of-objects-in-javascript for more info
function compare_last(a, b) {
  if (a.name.last < b.name.last) {
    return -1;
  } else if (a.name.last > b.name.last) {
    return 1;
  } else {
    return 0;
  }
}