import React, { Component } from 'react';
import './App.css';
import { getUrls, updateUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      error: ''
    }
  }

  getData = () => {
    getUrls()
      .then((urls) => {
        this.setState({urls: urls.urls})
      })
      .catch(error => {
        console.log('Request Failed', error)
        this.setState({error: "We are having issues loading this page, please try again later."})
      })
  }

  componentDidMount = () => {
    this.getData()
  }

  addUrl = ({longUrl, title}) => {
    updateUrls(longUrl, title)
      .then((url) => this.setState({urls: [...this.state.urls, url]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm 
            addUrl={this.addUrl} 
          />
        </header>
        {this.state.error ? <h2>{this.state.error}</h2> :
        <UrlContainer 
          urls={this.state.urls} 
        />
        }
      </main>
    );
  }
}

export default App;
