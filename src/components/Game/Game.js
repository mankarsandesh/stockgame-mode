import React from "react";
import "./Game.css";
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: [],
      gameRule: "",
      gameAmount: "",
    };
  }

  handleChange = (ruleName) => {  
    if(this.findValueInArray(ruleName) === false){
      this.setState({gameType:this.state.gameType.concat(ruleName)});
    }else{
      const index = this.state.gameType.indexOf(ruleName);  
      this.state.gameType.splice(index, 1)
      this.setState({gameType:  this.state.gameType});
    }
  }

  findValueInArray(ruleName){
    return this.state.gameType.includes(ruleName);
  }
  componentDidMount(){
    console.log("Mounted");
  }
  render() {
    return (
      <div>
        {this.props.gameRuleValue} {this.props.gameAmount} {this.state.gameType}
        <div className={"wheel wheel" + this.props.gameRuleValue}>
          <div onClick={() => this.handleChange("Big")}  className={this.findValueInArray('Big') ? 'activeGameRule' : '' } >
            <span>Big</span>
          </div>
          <div onClick={() => this.handleChange("Small")}  className={this.findValueInArray('Small') ? 'activeGameRule' : '' } >
            <span>SMALL</span>
          </div>
          <div onClick={() => this.handleChange("Tie")}  className={this.findValueInArray('Tie') ? 'activeGameRule' : '' }>
            <span>TIE</span>
          </div>
          <div onClick={() => this.handleChange("Odd")}  className={this.findValueInArray('Odd') ? 'activeGameRule' : '' }>
            <span>ODD</span>
          </div>
          <div onClick={() => this.handleChange("Even")}  className={this.findValueInArray('Even') ? 'activeGameRule' : '' }>
            <span>EVEN</span>
          </div>
          <div onClick={() => this.handleChange("High")}  className={this.findValueInArray('High') ? 'activeGameRule' : '' }>
            <span>High</span>
          </div>
          <div onClick={() => this.handleChange("Mid")}  className={this.findValueInArray('Mid') ? 'activeGameRule' : '' }>
            <span>MID</span>
          </div>
          <div onClick={() => this.handleChange("Low")}  className={this.findValueInArray('Low') ? 'activeGameRule' : '' }>
            <span>LOW</span>
          </div>
          <div className="lastDiv" onClick={() => this.handleChange("99")}  className={this.findValueInArray('99') ? 'activeGameRule' : '' }>
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

  componentDidUpdate(){
    console.log("Update Component");
    console.log(this.props);
   
    console.log(this.state);
  }
}

export default Game;
