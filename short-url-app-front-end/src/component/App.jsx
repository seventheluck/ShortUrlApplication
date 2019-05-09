import React from 'react';
import api from '../api/api';
class App extends React.Component {
    state = {
        longUrl: '',
        shortUrl: 'Short Url will be displayed here!'
    }
    generate = () => {
        api.get('/short', {
            params : {
                longUrl: this.state.longUrl
            }
        }).then(
            success => this.setState({shortUrl : success.data})
        );
    }
    render() {
        return (
            <div className="ui container">
            <div className="ui horizontal divider"></div>
                <div className="ui action input">
                    <input type="text" onChange={event => this.setState({longUrl : event.target.value})} placeholder="Please input the url"/>
                    <button className="ui button" onClick={this.generate}>Generate</button>
                </div>
                <div className="ui floating message">
                    <p>{this.state.shortUrl}</p>
                </div>
            </div>
        );
    }
}

export default App;