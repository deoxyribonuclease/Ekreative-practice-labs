import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            scrollToTop();
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            scrollToTop();
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    return (
        <div className="pagination-container">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="pagination-button left"
            >
                {"🡸 Previous"}
            </button>

            <div className="pagination">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={i + 1 === currentPage ? "active" : ""}
                        onClick={() => handlePageClick(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="pagination-button right"
            >
                {"Next 🡺"}
            </button>
        </div>
    );
};

export default Pagination;
