import React, { Component } from 'react';
import './GenericForm.css';
import InputValue from '../InputValue';

class GenericForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      Platelets: '',
      Albumin: ''
    }

    //onButtonSubmit = onButtonSubmit.bind(this);

    //this.onButtonRecommend = this.props.onButtonRecommend;
  }

  onButtonRecommend = (event) => {
    this.props.onButtonSubmit(this.state);
  }
  
  onInputChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }
 
  render() {
    return (

      <div className="GenericForm">
        
        <InputValue name="Platelets" rangeFrom="0" rangeTo="100" onInputChange={this.onInputChange}/>
        <InputValue name="Albumin" rangeFrom="0" rangeTo="7" onInputChange={this.onInputChange}/>

        <button
              className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
              onClick={this.onButtonRecommend}
        >{this.props.btnLabel}</button>

      </div>
    );
  }
  //
}

export default GenericForm;
