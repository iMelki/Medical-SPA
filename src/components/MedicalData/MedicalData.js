import React, { Component } from 'react';
//import './MedicalData.css';

class MedicalData extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    fetch('https://localhost:5001/api/Measurements')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          data: json,
        });
      });
  }

  render() {
    let {isLoaded, data} = this.state;
    if (!isLoaded){
      return (
        <div>
          Medical Data:    
          Loading..
        </div>
      );
    }else{
      return (
        <div className="MedicalData">
          Medical Data:
          
          <ul className="list-group list-group-flush">
            {data.map((post, i) => (
              <li key={i} className="list-group-item">
                {post.time}  Platelets:{post.platelets}  Albumin:{post.albumin} 
              </li>
            ))}
          </ul>
          
        </div>
      );
    }
  }
}

export default MedicalData;
