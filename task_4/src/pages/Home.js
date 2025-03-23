import React, { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import BlogHeader from "../components/BlogHeader";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("recent");
    const [activeCategory, setActiveCategory] = useState("View all");
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 8;

    useEffect(() => {
        fetch("/blogData.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    const filteredBySearch = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredBlogs = activeCategory === "View all"
        ? filteredBySearch
        : filteredBySearch.filter(blog => blog.category === activeCategory);

    const sortedBlogs = [...filteredBlogs].sort((a, b) => {
        if (sortOption === "recent") return new Date(b.date) - new Date(a.date);
        if (sortOption === "oldest") return new Date(a.date) - new Date(b.date);
        if (sortOption === "alph") return a.title.localeCompare(b.title);
        return 0;
    });

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, activeCategory, sortOption]);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
        <>
            <Header />
            <div className="container">
                <BlogHeader
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    sortOption={sortOption}
                    setSortOption={setSortOption}
                />
                <BlogList blogs={currentBlogs} />
                <Pagination
                    totalPosts={sortedBlogs.length}
                    postsPerPage={blogsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
                <CTASection />
            </div>
            <Footer />
        </>
    );
};

export default Home;
