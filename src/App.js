import { BrowserRouter, Routes, Route } from "react-router-dom";
import Henkaten from "./pages/henkaten";
import MainKpi from "./pages/mainKpi";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/reset.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Henkaten />} />
        <Route path="/mainkpi" element={<MainKpi />} />

        {/* <Route path="addcost" element={<AddCost/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
