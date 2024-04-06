
import './App.css';
import Navbar from'./components/Navbar'
import News from'./components/News'
import React, { useState } from 'react'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =()=> {

  const pageSize=6;
  const apiKey=process.env.REACT_APP_NEWS_API
 
  const [progress,setProgress]=useState(10);
 

    return (
      <>
      <BrowserRouter>
      <div>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Navbar/>
      </div>
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  pagesize={pageSize} key="general" country={"in"} category={"general"}/>}>
      </Route>
      <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}   pagesize={pageSize} key="business" country={"in" }category={"business"}/>}>
      </Route>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}   pagesize={pageSize} key="entertainment" country={"in"} category={"entertainment"}/>}>
      </Route>
      <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}   pagesize={pageSize} key="general" country={"in"} category={"general"}/>}>
      </Route>
      <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}   pagesize={pageSize} key="health" country={"in"} category={"health"}/>}>
      </Route>
      <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}   pagesize={pageSize} key="science" country={"in"} category={"science"}/>}>
      </Route>
      <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}   pagesize={pageSize} key="sports" country={"in"} category={"sports"}/>}>
      </Route>
      <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}   pagesize={pageSize} key="technology" country={"in"} category={"technology"}/>}>
      </Route>
      </Routes>
      </BrowserRouter>
      </>
    )
  
}

export default App;