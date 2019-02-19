import React, { Component } from 'react'

import authorImage from '../images/person.jpeg'

class author extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default author
