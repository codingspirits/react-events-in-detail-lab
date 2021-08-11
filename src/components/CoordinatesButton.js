import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)
    }

    render() {
        //console.log(this.props)
        return(
            <button onClick = {this.props.onReceiveCoordinates}></button>
        )
    }
}