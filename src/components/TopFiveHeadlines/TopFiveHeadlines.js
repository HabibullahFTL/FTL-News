import React, { useEffect, useState } from 'react';

const TopFiveHeadlines = () => {
    const [fiveHeadlines, setFiveHeadlines] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=db06836fed124a9697cf7bc0c51f14a7&pageSize=5&page=1")
            .then(res => res.json())
            .then(data => {
                setFiveHeadlines(data.articles);
            })
    }, [])
    return (
        <div className="my-4">
            <h3>Top Five News</h3>
            {fiveHeadlines.map(article => {
                return (
                    <div>
                        <h5>{article.title}</h5>
                        <hr />
                    </div>
                )
            })}
        </div>
    );
};

export default TopFiveHeadlines;