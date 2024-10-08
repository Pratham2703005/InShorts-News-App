import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import NewsContent from './components/NewsContent';
import axios from 'axios';
// import apikey from './data/config';
import Footer from './components/Footer'

const App = () => {
  const [category,setcategory] = useState("general");
  const [newsArray,setnewsArray]= useState([]);
  const [newsResult,setnewsResult] = useState(); 
  const [loadmore, setLoadmore] = useState(20);
  const newsApi = async ()=>{
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadmore}`);
      
      setnewsArray(news.data.articles);
      setnewsResult(news.data.totalResults);
    }catch(e){
      console.log(e);
    }
  };
  
  useEffect(()=>{
    newsApi();// eslint-disable-next-line
  },[newsResult,category,loadmore]);
  
  return (
    <div>
      <NavBar setcategory={setcategory}/>
      <NewsContent newsArray={newsArray} newsResult={newsResult} loadmore={loadmore} setLoadmore={setLoadmore}/>
      <Footer/>
    </div>
  )
}

export default App
