import React, { Component } from 'react';
import Band from './Band'


class Bands extends Component {

    render() {
        debugger
        return(
            <div>
            <ul>
                {this.props.bands.map((band) => <Band key={band.id} band={band} delete={this.props.delete} />)}
            </ul>
            </div>

        )
    }

}

export default Bands
