import ReactPaginate from "react-paginate";
import { limit } from "../../../service/service";
import "../../sass/pagination/pagination.css";

const Pagination = ({ page, total }) => {
  const numOfPages = total / limit;
  const handlePageClick = (num) => {
    page(num.selected * limit);
  };

  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={`${numOfPages}`}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
