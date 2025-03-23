import React from "react";
import BlogCard from "./BlogCard";
import NewsletterCard from "./NewsletterCard";

const BlogList = ({ blogs }) => {
    if (blogs.length === 0) {
        return (
            <div className="no-results">
                <h3>No posts found</h3>
                <p>Pusto...</p>
            </div>
        );
    }

    const blogsWithNewsletter = [...blogs];
    if (blogs.length >= 3) {
        blogsWithNewsletter.splice(3, 0, { id: "newsletter", isNewsletter: true });
    }

    return (
        <div className="blog-list">
            {blogsWithNewsletter.map((blog) => (
                blog.isNewsletter ? (
                    <NewsletterCard key="newsletter" />
                ) : (
                    <BlogCard key={blog.id} blog={blog} />
                )
            ))}
        </div>
    );
};

export default BlogList;