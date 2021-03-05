import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import BreakingNews from './components/BreakingNews/BreakingNews';
import TopHeadlines from './components/TopHeadlines/TopHeadlines';
import Advertise from './components/Advertise/Advertise';
import TopFiveHeadlines from './components/TopFiveHeadlines/TopFiveHeadlines';

function App() {
  const [headlines, setHeadlines] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=db06836fed124a9697cf7bc0c51f14a7&pageSize=8&page=1")
      .then(res => res.json())
      .then(data => {
        setHeadlines(data.articles);
      })
  }, [])
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3 className="ml-3">Top Headlines</h3>
            <TopHeadlines headlines={headlines}></TopHeadlines>
          </div>
          <div className="col-md-4">
            <Advertise></Advertise>
            <TopFiveHeadlines></TopFiveHeadlines>
          </div>
        </div>
      </div>
      <footer className="bg-secondary">
        <p className="text-center py-2 m-0 text-white">&copy; All right reserve by FTL News Ltd.</p>
      </footer>
    </div>
  );
}


export default App;
