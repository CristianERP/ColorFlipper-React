import React from 'react';
import './App.css';

const Hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const COLORS = ['Red', 'Green', 'Purple', 'Yellow', 'rgb(100, 150, 200)', '#F025D4'];

function Nav(props){
  return(
    <nav>
          <div>
            Color Flipper
          </div>

          <ul>
            <li>
              <div onClick={props.onClick} id="Simple">Simple</div>
            </li>
            <li>
              <div onClick={props.onClick} id="Hex">Hex</div>
            </li>
          </ul>
        </nav>
  )
}

class Button extends React.Component{
  render(){
    return(
      <button className="btn" onClick={this.props.onClick}>Click Me</button>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      config: 'Simple',
      colorState: '#F0F0F0'
    };
    this.handleColor = this.handleColor.bind(this);
    this.generatorColor = this.generatorColor.bind(this);
    this.setConfig = this.setConfig.bind(this);
  }
  handleColor(){
    this.setState({
      colorState: this.generatorColor()
    })    
  }

  generatorColor(){
    if(this.state.config === 'Hex'){
      let hexColor = '#';
      for(let i = 0; i < 6; i++){
        hexColor += Hex[Math.floor((Math.random() * (15 - 0 + 1)) + 0)]
      }
      return hexColor
    } else{
      return (COLORS[Math.floor((Math.random() * (5 - 0 + 1)) + 0)])
    }
  }

  setConfig(e){
    if(this.state.config !== e.target.id){
      this.setState({
        config: e.target.id
      })
    }
  }

  render(){
    let  colorState = this.state.colorState
    return (
      <div className="App" style={{'background': colorState}}>
        <div className="App-header">
          <Nav onClick={this.setConfig}></Nav>
        </div>
        <div className="App-content">
          Background Color : <span className="color">{colorState}</span>
        </div> <br></br>
        <Button onClick={this.handleColor}></Button>
      </div>
    );
  }
}

export default App;
