
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/Nav";
import HomePage from "./containers/home/Home";
import TechStack from "./containers/stack/Stack";
import WorkExperience from "./containers/experience/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stack' element={<TechStack />} />
        <Route path='/experience' element={<WorkExperience />} />
      </Routes>
    </>
  );
}

export default App;
