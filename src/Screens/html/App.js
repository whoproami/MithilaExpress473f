import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import StdMat from "./StdMat";
import VacExam from "./VacExam";
import Educat from "./Educat";
function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
           <Route path="StudyMaterials" element={<StdMat />} />
          <Route path="Vacency_ExamDates" element={<VacExam/>} />
          <Route path="Educator" element={<Educat/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    );
}
export default App;