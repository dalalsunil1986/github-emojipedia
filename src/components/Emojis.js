import React from 'react'
import EmojiConvertor from 'emoji-js'

const Emojis = (props) => {
  const emoji = new EmojiConvertor()
  const emojiCode = ":" + props.emoji.description + ":"
  const output2 = emoji.replace_colons(emojiCode)

  return (
    <article className="emoji col-xs-12 col-sm-6 col-md-3">
      <div className="emoji-card">
        <header className="emoji-header" id="emoji-header"><span className="emoji-icon gitmoji" data-clipboard-text={emojiCode}>{output2.length <= 4 ? output2 : <img src={props.emoji.image} alt="emoji" />}</span></header>
        <div className="emoji-info"><code>{emojiCode}</code>
        <p>{props.emoji.description}</p>
        </div>
      </div>
    </article>

  )
}

export default Emojis    
    // <div className="card border-primary mb-3">
    //   <div className="card-body">
    //   <p className="lead"><img src={props.emoji.image} alt="emoji" /></p>
    //   <hr className="my-4"></hr>
    //   <h3 className="card-title">{emojiCode}</h3>
    //   <h3 className="apple-emoji">{output2.length <= 4 ? output2 : null}</h3>
    //   </div>
    // </div>