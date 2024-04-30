import { Outlet } from "react-router-dom";
import "./App.css"
function Layout() {
   return (
     <>
       <header>
                <span id="Logo">
                hamrosikshya.online
                </span>
                <div id="FooterRight">
                <div>
                  Study Materials
                </div>
                <div id="dropbar">
                  Vaccines and Examdates
                </div>
                <div>
                  About us
                </div>
                </div>

            </header>
    <Outlet/>
          <footer></footer>
     </>
   )
}

export default Layout;