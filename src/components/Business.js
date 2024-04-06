import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class business extends Component {
  static defaultProps={
    country:"in",
    pagesize:8,
    category:"business"
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }
 

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=fb658002094e49f2a7161527b5a4be4d&page=1&pagesize=1&category=business`
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults
    });
  }
  handlePrevClick=async()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=fb658002094e49f2a7161527b5a4be4d&page=${this.state.page-1}&pagesize=5&category=business`
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page-1,
      loading:false
    });
  }
  handleNextClick=async()=>{
    console.log("Next");
    
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=fb658002094e49f2a7161527b5a4be4d&page=${this.state.page+1}&pagesize=5&category=busness`
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({
      articles:parsedData.articles,
      page:this.state.page+1,
      loading:false
    });
  
  }


  render() {
    
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px'}}>MyNews Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlToImage={element.urlToImage?element.urlToImage:"https://images.barrons.com/im-09787795/social"} NewsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/ >+
            </div>
        })}
          
        </div>
        <div className="d-flex justify-content-between">
          <button className='btn btn-dark' disabled={this.state.page<=1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className='btn btn-dark' disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default business
