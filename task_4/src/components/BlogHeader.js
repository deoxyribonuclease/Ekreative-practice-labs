const BlogHeader = ({ searchQuery, setSearchQuery, activeCategory, setActiveCategory, sortOption, setSortOption }) => {
    const categories = ["View all", "Design", "Product", "Software Engineering", "Customer Success"];

    return (
        <div className="blog-header">
            <a href="/" className="blog-category">Our blog</a>
            <h1 className="blog-title">The latest writings from our team</h1>
            <p className="blog-subtitle">The latest industry news, interviews, technologies, and resources.</p>

            <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="filter-container">
                <div className="filter-tabs">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`tab ${activeCategory === category ? "active" : ""}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}

                    <div className="sort-container">
                        <select
                            className="sort-select"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="recent">Most recent</option>
                            <option value="oldest">Oldest first</option>
                            <option value="alph">Alphabet</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogHeader;