import React from 'react';

const TopHeadlines = (props) => {
    return (
        props.headlines.map(article => {
            const { title, description, publishedAt } = article;
            return (
                <div key={title} className="container">
                    <div className="card my-2 p-3">
                        <h4>{title}</h4>
                        <small>{dateFormating(publishedAt)}</small>
                        <p>{description}</p>
                    </div> 
                </div>)
        })
    );
};
function dateFormating(strDate) {
    let dateTime = new Date(strDate);
    let date = dateTime.getDate();
    let month = dateTime.getMonth();
    let year = dateTime.getFullYear();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let monthList = ["January", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];
    let amPm = '';
    if (hour < 12) {
        amPm = "AM";
    } else {
        amPm = "PM";
    }
    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }
    return date + " " + monthList[month] + " " + year + " " + hour + ":" + minute + " " + amPm;
}

export default TopHeadlines;