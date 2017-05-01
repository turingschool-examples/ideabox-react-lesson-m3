import React, { Component } from 'react';

// I know that I'm going to have an input field
// therefor this needs to be stateful

export default class CreateIdea extends Component {

  // 'constructor' is a es6 nicety. This is common in programming.
  // in Ruby, it is 'initialize'
  constructor(){
    super()
    this.state = {
      title: '',
      body: '',
    }
  }

  // DRY

  inputChange(e, field){
    let callback = () => console.log(this.state)
    this.setState({[field]: e.target.value}, callback)
  }


  submitIdea(){
    this.props.handleSubmit()
  }

  render() {
    return (
      <div>
        <label>Title</label>
        <input type='text' onChange={(e) => this.inputChange(e, 'title')}/>
        <br />
        <br />
        <label>Body</label>
        <textarea onChange={(e) => this.inputChange(e, 'body')}/>
        <br />
        <br />
        <button onClick={() => this.submitIdea()}>Submit</button>
      </div>
    )
  }
}