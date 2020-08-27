import React from "react";
import "./Game.css";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameRule: props.gameRuleValue };
  }

  componentWillReceiveProps(gameRuleValue) {
    console.log("Component WILL RECIEVE PROPS!");
  }

  render() {
    return (
      <div>
        <div className={"wheel wheel" + this.props.gameRuleValue}>
          <div>
            <span>Big</span>
          </div>
          <div>
            <span>SMALL</span>
          </div>
          <div>
            <span>TIE</span>
          </div>
          <div>
            <span>ODD</span>
          </div>
          <div>
            <span>EVEN</span>
          </div>
          <div>
            <span>High</span>
          </div>
          <div>
            <span>MID</span>
          </div>
          <div>
            <span>LOW</span>
          </div>
          <div className="lastDiv">
            <span>0-99</span>
          </div>

          <span className="centre">
            <span className="betClose">
              <p className="circleDot" id="dot_1"></p>
              <p className="circleDot" id="dot_2"></p>
              <p className="circleDot" id="dot_3"></p>
              <p className="circleDot" id="dot_4"></p>
              <p className="circleDot" id="dot_5"></p>
              <p className="circleDot" id="dot_6"></p>
              <p className="circleDot" id="dot_7"></p>
              <p className="circleDot" id="dot_8"></p>
              <p className="circleDot" id="dot_9"></p>
              <p className="circleDot" id="dot_10"></p>
              <p className="circleDot" id="dot_11"></p>
              <p className="circleDot" id="dot_12"></p>

              <span>
                <h4>Bet Close IN </h4>
                <h1>04:45</h1>
              </span>
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Game;