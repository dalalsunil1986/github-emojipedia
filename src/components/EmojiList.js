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
    return <Emojis emoji={emoji} />
  })

  return (
    <div className="emojiList">
      {displayedEmojis}
    </div>
  )
}

export default EmojiList
