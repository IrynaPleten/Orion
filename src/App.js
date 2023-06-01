import { Route, Router, Routes } from "react-router-dom";
import { Courses } from "./pages/index";


const App = () => {
  return (
    <Routes>
				<Route path='/courses' element={<Courses/>} />
		</Routes>
  );
}

export default App;
