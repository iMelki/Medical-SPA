import React, { Component } from 'react';
import './AddData.css';
import InputValue from '../InputValue';

class AddData extends Component {

  constructor(){
    super();
    this.state = {
      Platelets: '',
      Albumin: ''
    }
  }

  
  onInputChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }

  
  onButtonSubmit = () => {
    console.log("Register!");
    console.log(this.state);
    
    fetch('https://localhost:5001/api/Measurements/register', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        Platelets: this.state.Platelets,
        Albumin: this.state.Albumin
      })
    })
      .then(response => response.json())
      .then(console.log)
  }

  render() {
    return (
      <div className="AddData">
        <p>
            Add medical data:
        </p>
        
        <InputValue name="Platelets" rangeFrom="0" rangeTo="100" onInputChange={this.onInputChange}/>
        <InputValue name="Albumin" rangeFrom="0" rangeTo="7" onInputChange={this.onInputChange}/>

        <button
              className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
              onClick={this.onButtonSubmit}
        >Save medical data</button>

      </div>
    );
  }
  //
}

export default AddData;
