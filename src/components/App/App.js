import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: []
    }
  }

  getData = () => {
    let allUrls
    getUrls()
      .then(urls => {
        this.setState({urls: urls.urls})
        console.log(this.state.urls)
        // console.log(urls.urls)
        // allUrls = urls.urls.map(item => {
        //   this.setState({urls: [allUrls, item]})
        // })
        })
        .catch(error => {
          console.log('Request Failed', error)
        })
  }
  

  componentDidMount = () => {
    this.getData()
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>
        <UrlContainer urls={this.state.urls} />
      </main>
    );
  }
}

export default App;
