import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import {Link} from "react-router-dom";

const CategoryPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("View all");
    const blogsPerPage = 9;

    useEffect(() => {
        fetch("/blogData.json")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
                const uniqueCategories = ["View all", ...new Set(data.map(blog => blog.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    const filteredBySearch = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredBlogs = activeCategory === "View all"
        ? filteredBySearch
        : filteredBySearch.filter(blog => blog.category === activeCategory);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, activeCategory]);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const featuredBlog = currentBlogs.length > 0 ? currentBlogs[0] : null;
    const regularBlogs = currentBlogs.length > 1 ? currentBlogs.slice(1) : [];

    return (
        <>
            <Header />
            <div className="container">
                <div className="blog-header" style={{justifyItems:"left", justifyContent:"left"}}>
                    <a href="/" className="blog-category">Our blog</a>
                    <h1 className="blog-title">Resources and insights</h1>
                    <p className="blog-subtitle" style={{ margin:"0 0 80px 0"}}>The latest industry news, interviews, technologies, and resources.</p>
                </div>

                <div className="categories-layout">
                    <div className="categories-sidebar">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input sidebar-search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <h3 className="categories-title">Blog categories</h3>
                        <div className="categories-list">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`category-btn ${activeCategory === category ? "active" : ""}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="blog-content">
                        {filteredBlogs.length === 0 ? (
                            <div className="no-results">
                                <h3>No results found</h3>
                                <p>Pusto...</p>
                                <button
                                    className="btn-learn"
                                    onClick={() => {
                                        setSearchQuery("");
                                        setActiveCategory("View all");
                                    }}
                                >
                                    Reset filters
                                </button>
                            </div>
                        ) : (
                            <>
                                {featuredBlog && (
                                    <div className="featured-blog">
                                        <Link to={`/blog/${featuredBlog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <div className="featured-blog-card">
                                                <div className="featured-blog-row">
                                                    <img src={featuredBlog.image} alt={featuredBlog.title}
                                                         className="featured-blog-image"/>
                                                    <div className="featured-blog-content">
                                                        <div className="blog-card-category">
                                                            <div
                                                                className="blog-card-category-border">{featuredBlog.category}</div>
                                                        </div>
                                                        <h2 className="featured-blog-title">{featuredBlog.title}
                                                            <div className="blog-card-arrow">🡽</div>
                                                        </h2>
                                                        <p className="featured-blog-excerpt">{featuredBlog.excerpt}</p>
                                                        <div className="blog-card-footer">
                                                            <div className="blog-card-author">
                                                                <img src={featuredBlog.author.avatar}
                                                                     alt={featuredBlog.author.name}
                                                                     className="blog-card-author-image"/>
                                                                <div className="blog-card-author-info">
                                                                    <div
                                                                        className="blog-card-author-name">{featuredBlog.author.name}</div>
                                                                    <div
                                                                        className="blog-card-date">{featuredBlog.date}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )}

                                <div className="regular-blogs">
                                    {regularBlogs.map((blog) => (
                                        <BlogCard key={blog.id} blog={blog} isCategory={true}/>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <Pagination
                    totalPosts={filteredBlogs.length}
                    postsPerPage={blogsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
            <Footer/>
        </>
    );
};

export default CategoryPage;
