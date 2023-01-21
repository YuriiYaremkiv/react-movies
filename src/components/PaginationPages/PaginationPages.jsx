import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export function PaginationPages({ page, pages = 1, paginationPage }) {
  function handlePageChange(event, newPage) {
    paginationPage(newPage);
  }

  return (
    <Stack spacing={2}>
      <Pagination
        showFirstButton
        showLastButton
        count={pages}
        page={page}
        onChange={handlePageChange}
      />
    </Stack>
  );
}
