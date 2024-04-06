import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News =(props)=> {
 
const Capitalize=(element)=>{
  return element.charAt(0).toUpperCase()+element.slice(1)
}
const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,settotalResults]=useState(0)


  const updateNews=async()=>{
    props.setProgress(0);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
    setLoading(true);
  const data=await fetch(url);
    props.setProgress(30);
  const parsedData=await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    settotalResults(parsedData.articles);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(()=>{
    document.title=`${Capitalize(props.category)} - MyNews`;
    updateNews();
    //eslint-disable-next-line
  },[])

  const fetchMoreData=async()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`
  const data=await fetch(url);
  const parsedData=await data.json();
  setPage(page+1);
  setArticles(articles.concat(parsedData.articles));
  settotalResults(parsedData.totalResults);
  setLoading(false);
  }


    
    return (
      <>
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>Top {Capitalize(props.category)} Headlines</h1>
        {loading && <Spinner/>}
    <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length!==totalResults}
        loader={<Spinner/>}
    >
      <div className="container">
        
      <div className="row">
        {articles.map((element,index)=>{
          return <div className="col-md-4" key={index}>
          <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} urlToImage={element.urlToImage?element.urlToImage:"https://images.barrons.com/im-09787795/social"} NewsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/ >
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
          
      
      </>
    )
  
}


News.defaultProps={
  country:"in",
  pagesize:8,
  category:"general"
}
News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}

export default News
