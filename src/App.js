
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/Nav";
import HomePage from "./containers/home/Home";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
