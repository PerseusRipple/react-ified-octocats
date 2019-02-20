import React, { Component } from 'react'

import barackImage from '../images/baracktocat.jpg'

class Baracktocat extends Component {
  render() {
    return (
      <section>
        <figure>
          <img
            class="oct-image"
            height="424"
            width="424"
            src={barackImage}
            alt="Baracktocat"
          />
        </figure>
        <figcaption>
          <p>the Baracktocat</p>
        </figcaption>
      </section>
    )
  }
}

export default Baracktocat
