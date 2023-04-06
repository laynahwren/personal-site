
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/Nav";
import HomePage from "./containers/home/Home";
import WorkExperience from "./containers/experience/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/experience' element={<WorkExperience />} />
      </Routes>
    </>
  );
}

export default App;
