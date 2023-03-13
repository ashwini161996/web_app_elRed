import { Routes, Route } from "react-router-dom";
import AtLinks from "./pages/AtLinks";

export const RoutesMain = () => {
  return (
    <Routes>
          <Route path="/" element={<AtLinks/>} />
        </Routes>
  );
};
