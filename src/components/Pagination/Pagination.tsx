import React from "react";
import "./Pagination.css";

function Pagination({
  pageChangeHandler,
  maxPage,
  currentPage,
}: {
  pageChangeHandler: (page: string) => void;
  maxPage: number;
  currentPage: number;
}) {
  return (
    <div className="paginationcontainer">
      <div className="paginationelement">
        <div
          style={{ visibility: currentPage - 10 > 0 ? "visible" : "hidden" }}
          onClick={() => pageChangeHandler("-10")}
          className="arrowelement"
        >
          &lt;&lt;
        </div>

        <div
          style={{ visibility: currentPage - 1 > 0 ? "visible" : "hidden" }}
          onClick={() => pageChangeHandler("-1")}
          className="arrowelement"
        >
          &lt;
        </div>
      </div>
      <div className="paginationelement">{`Page: ${currentPage} / ${maxPage}`}</div>
      <div className="paginationelement">
        <div
          style={{
            visibility: currentPage + 1 < maxPage ? "visible" : "hidden",
          }}
          onClick={() => pageChangeHandler("1")}
          className="arrowelement"
        >
          &gt;
        </div>

        <div
          style={{
            visibility: currentPage + 10 < maxPage ? "visible" : "hidden",
          }}
          onClick={() => pageChangeHandler("10")}
          className="arrowelement"
        >
          &gt;&gt;
        </div>
      </div>
    </div>
  );
}

export default Pagination;
