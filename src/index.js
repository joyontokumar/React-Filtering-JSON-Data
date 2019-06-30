import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './bd';
import NewList from './Components/News_list';
// import component
import Header from './Components/Header';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsondata: JSON,
            filtered: JSON
        }
    }
    fiterNews(TypeInputField) {
        let filetered = this.state.jsondata.filter((item) => {
            return item.title.indexOf(TypeInputField) > -1;
        })
        this.setState({ filtered: filetered })
    }
    render() {
        return (
            <div>
                <Header newSearch={TypeInputField => this.fiterNews(TypeInputField)} />
                <NewList news={this.state.filtered} />
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));