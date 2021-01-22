import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render(){
    const renderBands = () => this.props.bands.map((band) => {
      return <Band band={band} key={band.id} deleteBand={this.props.deleteBand}/>})
    
    return <div>{renderBands()}</div>
  }
}

export default Bands