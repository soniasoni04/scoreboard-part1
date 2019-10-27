import React, {Component} from 'react'
import PropTypes from "prop-types";

class Title extends Component{

    static propTypes = {
        content: PropTypes.string.isRequired,
      }

    render(){
        return (
            <div>
                <h1>hello Title</h1>
                <h2> {this.props.content}</h2>
            </div>
        )
    }
}

export default Title;