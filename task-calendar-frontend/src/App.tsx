import "./App.css";
import Index from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const TODAY = new Date();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Index date={TODAY} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
