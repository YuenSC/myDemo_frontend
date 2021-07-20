import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

/**
 *
 * @param {itemsCount, pageSize, currentPage, onPageChange}
 * itemsCount : Total number of items
 * pageSize : The number of items in one page
 * currentPage : Current Page
 * onPageChange : A function that change currentPage to clicked page when clicking.
 * @returns
 * A nav bar that provide page button to change page
 * if only one page, render nothing
 */

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        <li class="page-item">
          <button class="page-link" onClick={() => onPageChange("previous")}>
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li class="page-item">
          <button class="page-link" onClick={() => onPageChange("next")}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
