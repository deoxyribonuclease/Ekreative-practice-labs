import React from "react";

import news1 from "../../assets/news/news1.png";
import news2 from "../../assets/news/news2.png";
import news3 from "../../assets/news/news3.png";

const newsItems = [
    { img: news1, date: "09 April, 2022", author: "Admin", text: "Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam" },
    { img: news2, date: "12 April, 2022", author: "Admin", text: "Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam" },
    { img: news3, date: "19 April, 2022", author: "Admin", text: "Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam" }
];


const News = () => {
    return (
        <section id="news" className="news">
            <h3>BLOG</h3>
            <h2>Read Our News</h2>
            <div className="news-gallery">
                {newsItems.map((item, index) => (
                    <div className="news-item" key={index}>
                        <img src={item.img} alt={`News ${index + 1}`} />
                        <div className="news-description">
                            <span>{item.date} &nbsp; by {item.author}</span>
                            <p>{item.text}</p>
                            <a href="#" className="btn">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default News;
