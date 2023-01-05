import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export function PaginationPages({ page = 1, pages = 0, paginationPage }) {
  return (
    <Stack spacing={2}>
      <Pagination
        defaultPage={Number(page)}
        count={pages}
        onChange={(e) => paginationPage(e.target.textContent)}
      />
    </Stack>
  );
}
