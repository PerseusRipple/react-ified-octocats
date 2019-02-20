import React, { Component } from 'react'

import authorImage from '../images/person.jpeg'

class Author extends Component {
  render() {
    return (
      <section>
        <figcaption>
          <p className="number">#57</p>
          <p className="item">
            <span>the</span>
            <a href="https://github.com/cameronmcefee">Baracktocat</a>
            <span>by</span>
          </p>
          <a href="https://github.com/cameronmcefee" target="blank">
            <img
              src={authorImage}
              alt="Author Cameron McEfee"
              width="28"
              height="28"
            />
          </a>
        </figcaption>
      </section>
    )
  }
}

export default Author
