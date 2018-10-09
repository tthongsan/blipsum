import React, { Component } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';


import axios from 'axios';
import './App.css';
import './reset.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allArticles: {},
      topFourArticles: []
    }
    this.postAllArticles = this.postAllArticles.bind(this);
    this.getTopFour = this.getTopFour.bind(this);
    //this.getThePosts = this.getThePosts.bind(this);
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=64531e01e997478aab9721db939f6574`).then(res => {
      console.log(res.data.articles)
      this.setState({allArticles: res.data.articles});
      this.postAllArticles();
      //this.getThePosts();
      this.getTopFour();
    }) 
  }

  // getThePosts() {
  //   this.getTopFour();
  // }



  postAllArticles() {
    axios.post('/articles', {articles: this.state.allArticles})
    .then(res => {
      console.log("did it work", res.data)
      // this.setState({
      //   topFourArticles: res.data
      // })
      // console.log(topFourArticles);
    })
  }

  getTopFour() {
    axios.get('/articles/topFour')
    .then(res => {
      console.log('did it work?',res.data)
      this.setState({topFourArticles: res.data})
    })
    //console.log('did it work?',this.state.topFourArticles)
  }


  render() {
    console.log('did it work?',this.state.topFourArticles)
    return (
      <div className="App">
      <Header />
      <Navbar />
      <div className="post-box">
        <div>
          <Post 
          fourPosts={this.state.topFourArticles}
          />
        </div>
      </div>
      <div className="ad-div">
        <img src="https://tpc.googlesyndication.com/daca_images/simgad/8505660205946313674" alt="ad"/>
      </div>
      </div>
    );
  }
}

export default App;
