import React from 'react'

const Emojis = (props) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-body">
      <p className="lead"><img src={props.emoji.image} href="emoji" /></p>
      <hr className="my-4"></hr>
      <h3 className="card-title">{props.emoji.description}</h3>
      </div>
    </div>
  )
}

export default Emojis