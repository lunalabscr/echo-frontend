import { Route, Routes } from "react-router-dom";
import { LocalizedApp } from "./LocalizedApp";

export const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<LocalizedApp />} />
      <Route path="/:lng/*" element={<LocalizedApp />} />
    </Routes>
  );
};
