
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/Nav";
import HomePage from "./containers/home/Home";
import TechStack from "./containers/stack/Stack";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/stack' element={<TechStack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
