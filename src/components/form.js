import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: 'position',
        position: 'junior'
    }
    render() {

        return (
            <form action="">
                <input type="radio" name="position" value="junior" onChange={this.handleUpdate} />
                <input type="radio" name="position" value="middle" onChange={this.handleUpdate} />
                <input type="radio" name="position" value="senior" onChange={this.handleUpdate} />
            </form>

        )
    }
}

export default Form
