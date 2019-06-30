import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'the keyworks are : ',
            keywords: ''
        }
        console.log(props);
    }
    click(e) {
        console.log(e.target.className);
        alert("this is text");
    }
    inputChange(e) {
        this.setState(
            {
                keywords: e.target.value
            }
        )
        this.props.newSearch(e.target.value)
    }



    render() {
        return (
            <header>
                <div className="logo picture" onClick={this.click}>Logo</div>
                <input type="text" onChange={this.inputChange.bind(this)} />
                <div>
                    <h3>{this.state.title} {this.state.keywords}</h3>
                </div>
            </header>
        )
    }
}
export default Header;
