import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/blogData.json")
            .then((res) => res.json())
            .then((data) => {
                const foundBlog = data.find(blog => blog.id.toString() === id);
                setBlog(foundBlog);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching blog data:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="blog-detail-loading">Loading...</div>
                </div>
                <Footer />
            </>
        );
    }

    if (!blog) {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="blog-detail-error">
                        <h2>Blog post not found</h2>
                        <Link to="/" className="btn-learn">Return to Blog</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const authorAvatar = blog.author.avatar.startsWith('/')
        ? blog.author.avatar
        : `/${blog.author.avatar}`;

    const blogImage = blog.image.startsWith('/')
        ? blog.image
        : `/${blog.image}`;

    return (
        <>
            <Header />
            <div className="container">
                <div className="blog-detail">
                    <Link to="/" className="blog-detail-back">
                        ← Back to Blogs
                    </Link>

                    <div className="blog-detail-category">
                        <div className="blog-card-category-border">{blog.category}</div>
                    </div>

                    <h1 className="blog-detail-title">{blog.title}</h1>

                    <div className="blog-detail-meta">
                        <div className="blog-card-author">
                            <img
                                src={authorAvatar}
                                alt={blog.author.name}
                                className="blog-card-author-image"
                            />
                            <div className="blog-card-author-info">
                                <div className="blog-card-author-name">{blog.author.name}</div>
                                <div className="blog-card-date">{blog.date}</div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-detail-image-container">
                        <img
                            src={blogImage}
                            alt={blog.title}
                            className="blog-detail-image"
                        />
                    </div>

                    <div className="blog-detail-content">
                        <p className="blog-detail-excerpt">{blog.excerpt}</p>

                        <p>No prepared data - no text.</p>

                        <h2>Key Takeaways</h2>
                        <p>Взяти сторінку з деталями конкретного блог поста (Макет №5)
                            https://www.figma.com/file/VGwnbsWPWYG3A71dKfcAbx/Blogs-%E2%80%93-Untitled-UI-(untitledui.com)?node-id=2128%3A96518
                        </p>

                        <h2>Conclusion</h2>
                        <p>1. Завдання писалися до макетів 2022 року. </p>
                        <p>2. Посилання застарівші й не ведуть до елементів макету. </p>
                        <p>3. Ні одного макету з деталями
                            конкретного блог-поста не існує, все це різновиди дизайну списку блогів.</p>
                    </div>

                    <div className="blog-detail-share">
                    <h3>Share this article</h3>
                        <div className="blog-detail-share-buttons">
                            <button className="blog-detail-share-button">Twitter</button>
                            <button className="blog-detail-share-button">LinkedIn</button>
                            <button className="blog-detail-share-button">Facebook</button>
                            <button className="blog-detail-share-button">Copy Link</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetail;