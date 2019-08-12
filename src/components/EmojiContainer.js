import React, { Component } from 'react'
import EmojiList from './EmojiList'
import Search from './Search'

export default class EmojiContainer extends Component {
  constructor () {
    super()
    this.state = {
      emojis: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
      this.fetchEmojis()
      setTimeout(() => {
        console.log("emojis state", this.state.emojis)
      }, 1000);
  }

  fetchEmojis = () => {
    let url = "https://api.github.com/emojis"
    fetch(url)
      .then(response => response.json())
      .then(resp => this.restructureData(resp))
  }

  restructureData = (emojis) => {
    let newEmojis = Object.entries(emojis).map(([key, value]) => ({
      "description": key, 
      "image": value
    }))
    this.setState({
      emojis: newEmojis
    })
  }

  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {

    return(
      <div className="emoji-container">
        <Search searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} />

        {this.state.emojis ? <EmojiList emojis={this.state.emojis} searchTerm={this.state.searchTerm}/> : "Loading Emojis..." }
      </div>
    )
  }
}