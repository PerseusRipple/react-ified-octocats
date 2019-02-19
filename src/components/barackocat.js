import React, { Component } from 'react'

import barackImage from '../images/baracktocat.jpg'

class baracktocat extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src={barackImage} alt="Baracktocat" />
        </figure>
        <figcaption>
          <p>the Baracktocat</p>
        </figcaption>
      </div>
    )
  }
}

export default baracktocat
