import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getRandomColor = () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    return randomColor;
};

const BlogCard = ({ blog, isCategory }) => {
    const [randomColor, setRandomColor] = useState(getRandomColor());

    useEffect(() => {
        setRandomColor(getRandomColor());
    }, []);

    return (
        <Link to={`/blog/${blog.id}`} className="blog-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="blog-card">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-card-image"
                    style={{ filter: `hue-rotate(${Math.random() * 360}deg)` }}
                />
                <div className="blog-card-content" style={{ borderColor: randomColor }}>
                    <div className="blog-card-category">
                        {
                            isCategory ? (
                                <div className="blog-card-category-border">
                                    {blog.category}
                                </div>
                            ) : (
                                blog.category
                            )
                        }
                    </div>
                    <h3>{blog.title}
                        <div className="blog-card-arrow">🡽</div>
                    </h3>
                    <p>{blog.excerpt}</p>
                    <div className="blog-card-footer">
                        <div className="blog-card-author">
                            <img
                                src={blog.author.avatar}
                                alt={blog.author.name}
                                className="blog-card-author-image"
                                style={{ borderColor: randomColor }}
                            />
                            <div className="blog-card-author-info">
                                <div className="blog-card-author-name">{blog.author.name}</div>
                                <div className="blog-card-date">{blog.date}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;