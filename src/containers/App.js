import React from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';
import Scroll from '../components/Scroll';
import Button from '../components/Button';
import Menu from '../components/Menu';
import './App.css';

import {setMsgNumber} from '../actions'

const mapStateToProps = state => {
  return{
    msgnumber: state.msgnumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onChangeMsgNumber: (event) => dispatch(setMsgNumber())
  }
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      prevmsgnumber: '',
      numatual: 0,
      prevnum: 0,
      alreadyin: false,
      totaljokes: 0,
      chuckjokes: []
    }
  }

  //CHUCK=====================================================================
  request = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(joke => {this.setState({
            chuckjokes: this.state.chuckjokes.concat([joke])
         })
      });
  }

  totalJokes = () => {
    const lengthchuck = this.state.chuckjokes.length + 1;
    this.setState({
          totaljokes: lengthchuck
      })
  }

  newJokes = () => {
    this.setState({chuckjokes: []})
    for(let i = 0 ; i < this.state.totaljokes; i++){
      this.request()
    }
  }

  addJoke = () => {
    this.request();
    this.totalJokes();
  }

  //NUMBERS=====================================================================
  funNumber = () => {
    if((this.state.prevnum !== this.state.numatual) && this.state.alreadyin === true){
      fetch(`http://numbersapi.com/${this.state.numatual}?json`)
        .then(response => response.json())
        .then(data => {this.alreadyIn(data)});
    }
    if(this.state.prevnum === this.state.numatual){
        this.setState({
          msgnumber: this.state.prevmsgnumber
        })
    }
  }

  alreadyIn = (data) => {
    this.setState({
          msgnumber: data.text,
          prevmsgnumber: data.text,
          alreadyin: false
    })
  }

  updateNum =(event) => {
    const val = event.target.innerText;
    this.setState(
      (prevState => {
        return {
          alreadyin: true,
          numatual: val,
          prevnum: prevState.numatual
        };
      }),
      () => {this.funNumber()}
    )
  }

  //RENDER===================================================================

  componentDidMount(){
    this.setState({
        totaljokes: 10
      },
        () => {
          for(let i = 0 ; i < this.state.totaljokes; i++){
          this.request()
        }
      })
  }

  render(){
    const lengthchuck = this.state.chuckjokes.length;
    return (
      <div>

        <div className="tc pa4 ma2">
          <h1 className="f1 b glow">A funny site!</h1>
        </div>

        <Scroll>
            {(lengthchuck === this.state.totaljokes) ? (
              <Table
              jokes={this.state.chuckjokes}
              messageNumber={this.props.msgnumber}
              updateNumber={this.updateNum}
              updateStateNumber={this.updateStateNumber}
              />
      ) : (
        <div className="flex justify-center pa4">
          <h1 className="black">
            Loading!
          </h1>
        </div>
      )}
        </Scroll>

        <Menu>
          <Button
            handleClick={this.newJokes}
            name="Refresh jokes!"
          />
          <Button
            handleClick={this.addJoke}
            name="New Joke!"
          />
        </Menu>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
