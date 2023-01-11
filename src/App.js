import { Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout/Layout";
import { MoviePage } from "./pages/MoviePage/MoviePage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:movieId" element={<MoviePage />} />
      </Routes>
    </>
  );
};

export default App;
