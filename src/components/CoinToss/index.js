// Write your code here
import {Component} from 'react'

import './index.css'

const headImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    randomImg: headImg,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const random = Math.floor(Math.random() * 2)

    if (random === 0) {
      this.setState(prevState => ({
        randomImg: headImg,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        randomImg: tailImg,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {randomImg, total, heads, tails} = this.state
    return (
      <div className="app-container">
        <div className="toss-coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>

          <div className="coin-btn">
            <img src={randomImg} alt="toss result" className="coin-img" />
            <button
              type="button"
              onClick={this.onClickTossCoin}
              className="toss-coin-btn"
            >
              Toss Coin
            </button>
          </div>

          <div className="total-head-tails-count-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
