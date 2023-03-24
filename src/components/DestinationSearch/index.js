// Write your code here

import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-bar-bg">
            <input
              type="search"
              className="search"
              placeholder="search"
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="logo"
            />
          </div>
          <div className="countries">
            <ul className="ul">
              {searchResults.map(eachRes => (
                <DestinationItem
                  key={eachRes.id}
                  destinationDetails={eachRes}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
