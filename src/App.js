
import './App.css';
import { Component } from 'react';
import { CardList } from './Components/CardList/card-list.component';
import {Search} from './Components/SearchBox/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
        monsters: [],
        searchField: ""
    }
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }
  
  render() {
    const { monsters, searchField} = this.state;
    const filteredMoster = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monster Rolobox</h1>
        <Search type="search" 
        placeholder="search here 1" 
        onchangehandler={this.handleChange } />
       <CardList monsters={filteredMoster}> 
        </CardList>
      </div>
    );
  }
  
}

export default App;
