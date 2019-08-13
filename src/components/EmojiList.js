import React from 'react'
import Emojis from './Emojis'

const EmojiList = (props) => {

  const getDisplayedEmojis = () => {
    return props.emojis 
      .filter(emoji => {
        if (!props.searchTerm){
          return true
        } else {
          return emoji.description.toLowerCase().includes(props.searchTerm.toLowerCase())
        }
      })
  }
  
  const displayedEmojis = getDisplayedEmojis().map(emoji => {
    return <Emojis emoji={emoji} key={Math.floor(Math.random() * 10000000)}/>
  })

  return (
		<div className="row center-xs" id="gitmoji-list">
      {displayedEmojis}
    </div>
  )
}

export default EmojiList
