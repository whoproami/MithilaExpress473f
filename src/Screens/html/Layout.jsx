import { Link, NavLink, Outlet } from "react-router-dom";
import  '../css/App.css';
function Layout() {
   return (
     <>
       <header>
                <NavLink id="navlin" to="/" ><span id="Logo">
                NepalUnacademy
                </span></NavLink>
                <div id="FooterRight">
                <div id="dropbar">
                   <NavLink id="navlin" to="StudyMaterials">Study Materials</NavLink>
                </div>
                <div id="dropbar">
                  <NavLink id="navlin" to="Vacency_ExamDates">Vacancy and Examdates</NavLink>
                </div>
                <div id="dropbar">
                  <NavLink id="navlin" to="Educator">Educator</NavLink>
                </div>
                <div id="dropbar">
                  <NavLink id="navlin">About us</NavLink>
                </div>
                </div>

            </header>
    <Outlet/>
          <footer></footer>
     </>
   )
}

export default Layout;