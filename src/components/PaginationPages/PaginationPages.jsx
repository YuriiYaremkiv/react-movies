import Pagination from "@mui/material/Pagination";

export const PaginationPages = ({ page = 1, pages = 0, paginationPage }) => {
  return (
    <>
      <Pagination
        defaultPage={Number(page)}
        count={pages}
        onChange={(e) => paginationPage(e.target.textContent)}
      />
    </>
  );
};

// Signature:
// function(event: React.ChangeEvent<unknown>, page: number) => void
