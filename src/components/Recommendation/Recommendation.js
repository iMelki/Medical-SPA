import React, { Component } from 'react';
import './Recommendation.css';
import GenericForm from '../GenericForm/GenericForm.js';

class Recommendation extends Component{

  constructor(props){
    super(props);
    this.state = {
      Operator: '+',
      response: 'choose params first',
      isLoaded: false
    }
  }

  onButtonSubmit = (state) => {
    console.log("recommend");
    console.log(state);
    
      fetch('https://localhost:5001/api/Measurements/recommend', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          Operator: this.state.Operator,
          Platelets: state.Platelets,
          Albumin: state.Albumin
        })
      })
        .then(response => response.json())
        .then(res => {
          //console.log(res);
          this.setState({
            isLoaded: true,
            response: res,
          });
          //this.forceUpdate();
        })

  }

  onInputChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
    console.log(this.state);
  }

  render() {

    return (
      <div className="Recommendation">
        Get recommended medical data:
        <div className='pa2'>
          Operator : 
          <select
            className='pa3 ba b--green bg-lightest-blue'
            id='Operator'
            onChange={this.onInputChange}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>
        <GenericForm 
          header="Get recommended medical data" 
          btnLabel="Get recommended medical data" 
          onButtonSubmit={this.onButtonSubmit} 
        />
        Recommendation is: {this.state.response}
      </div>
    );
  }

}

export default Recommendation;
