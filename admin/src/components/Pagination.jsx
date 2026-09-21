import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  total = 0,
  limit = 10,
  skip = 0,
  onLimitChange,
  onSkipChange,
  limitOptions = [10, 25, 50, 100],
}) {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit) || 1;

  const startEntry = total === 0 ? 0 : skip + 1;
  const endEntry = Math.min(skip + limit, total);

  const handlePrev = () => {
    if (skip > 0) {
      onSkipChange(Math.max(0, skip - limit));
    }
  };

  const handleNext = () => {
    if (skip + limit < total) {
      onSkipChange(skip + limit);
    }
  };

  const handlePageClick = (page) => {
    onSkipChange((page - 1) * limit);
  };

  // Generate visible page numbers
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <div className="pagination-info">
        <span>
          Showing <strong>{startEntry}</strong> to <strong>{endEntry}</strong> of{" "}
          <strong>{total}</strong> entries
        </span>
        {onLimitChange && (
          <div className="pagination-limit-select">
            <span>Rows:</span>
            <select
              value={limit}
              onChange={(e) => {
                const newLimit = parseInt(e.target.value, 10);
                onLimitChange(newLimit);
                onSkipChange(0); // Reset to first page
              }}
              className="pagination-select"
            >
              {limitOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="pagination-controls">
        <button
          type="button"
          className="pagination-btn arrow-btn"
          onClick={handlePrev}
          disabled={skip === 0}
          aria-label="Previous Page"
        >
          <ChevronLeft size={16} />
          <span>Prev</span>
        </button>

        <div className="pagination-pages">
          {getPageNumbers().map((p) => (
            <button
              key={p}
              type="button"
              className={`pagination-btn page-btn ${p === currentPage ? "active" : ""}`}
              onClick={() => handlePageClick(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="pagination-btn arrow-btn"
          onClick={handleNext}
          disabled={skip + limit >= total}
          aria-label="Next Page"
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
