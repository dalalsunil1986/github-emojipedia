import React, { Component } from 'react'
import EmojiList from './EmojiList'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'

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
        this.emojiHeaderBackgroundColors()
      }, 2000);
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

  emojiHeaderBackgroundColors = () => {
    var emojiHeaders = document.getElementsByClassName('emoji-header')
    for(var i=0, len=emojiHeaders.length; i<len; i++)
    {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      emojiHeaders[i].style["background-color"] = bgColor;
    }
  }

  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {

    return(
      <div>
        <Header searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} key={Math.floor(Math.random() * 10000000)}/>
        <NavBar />
        <main className="wrap">
          {this.state.emojis ? <EmojiList emojis={this.state.emojis} searchTerm={this.state.searchTerm} key={Math.floor(Math.random() * 1000000)}/> : "Loading Emojis..." }
        </main>
        <Footer />
      </div>
    )
  }
}