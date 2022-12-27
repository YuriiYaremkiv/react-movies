import { Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout/Layout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
